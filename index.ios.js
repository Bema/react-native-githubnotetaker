/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/Components/Main');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});


class githubnotetaker extends React.Component{
  render() {
    return (
        <NavigatorIOS
            style={ styles.container }
            initialRoute={{
              title: 'Github NoteTaker',
              component: Main
            }} />
    );
  }
};



AppRegistry.registerComponent('githubnotetaker', () => githubnotetaker);
