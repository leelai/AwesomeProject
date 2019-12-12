/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AlohaTest from 'react-native-aloha-test';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--'
  };
  componentDidMount() {
    AlohaTest.sampleMethod('Testing', 123, (message) => {
      this.setState({
        status: 'native callback received',
        message
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆LLMyToastLibrary example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
