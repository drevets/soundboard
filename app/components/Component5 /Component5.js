import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class Component5 extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  onPress(user){
    this.props.navigator.push({
      id: 'component6',
      user: user
    })
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response),
        });
      });
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <TouchableHighlight onPress={() => {this.onPress(user)}}>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {user.name}: {user.email}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3,
  },
  rowText: {
    flex: 1,
  },
});
