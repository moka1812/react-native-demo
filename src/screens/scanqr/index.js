import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import DetailScan from './info-scan';
import ScanQR     from './scan';
import NotificationSuccess from './success-alert';
import GetStarted from './get-started-scan';

const stackQrScan = createStackNavigator({
    DetailScan, ScanQR, NotificationSuccess, GetStarted
}, {
  headerMode: "none",
  initialRouteName: 'GetStarted'
})

export default stackQrScan;