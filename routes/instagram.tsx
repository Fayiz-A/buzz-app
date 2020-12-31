import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-web-webview';

export default class InstagramScreen extends React.Component {
   render() {
      return <WebView source={{uri: 'https://www.flutter.dev'}} />
   }
}