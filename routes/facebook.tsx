import React, { Component } from 'react';
import { WebView } from 'react-native-web-webview';

export default class FacebookScreen extends React.Component {
   render() {
      return <WebView source={{ uri: 'https://reactnative.dev'}} />
   }
}