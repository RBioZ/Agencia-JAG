import React from 'react';
import { WebView } from 'react-native-webview';

function Web() {
  return <WebView style={{ flex: 1 }} source={{ uri: `https://jag.agency/` }} />
}

export default Web;