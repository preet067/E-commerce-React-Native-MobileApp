import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class StoresScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>We'll be launcing new stores Soon</Text>
      </Box>
    );
  }
}

export default StoresScreen;
