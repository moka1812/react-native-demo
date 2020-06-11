import React from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * IMPORT SCREEN
 */
import Profile from '../screens/profiles';
import ScanQR from '../screens/scanqr';
import Setting from '../screens/settings';
import History from '../screens/history';

const tabNavigation = createMaterialBottomTabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'Lịch Sử',
            tabBarIcon: ({ focused }) => (
                <Ionicons name='ios-paper' size={18} color={focused ? '#DB1513' : '#B2A6A7'}></Ionicons>
            )
        }
    },
    ScanQR: {
        screen: ScanQR,
        navigationOptions: {
            tabBarLabel: 'Quét QR',
            tabBarIcon:  ({ focused }) => (
                <Ionicons name='ios-barcode' size={18} color={focused ? '#DB1513' : '#B2A6A7'}></Ionicons>
            )
        }
    },
    // Profile: {
    //     screen: Profile,
    //     navigationOptions: {
    //         tabBarLabel: 'Cá Nhân',
    //         tabBarIcon: ({ focused }) => (
    //             <Ionicons name='ios-clipboard' size={18} color={focused ? '#DB1513' : '#B2A6A7'}></Ionicons>
    //         )
    //     }
    // },
    Setting: {
        screen: Setting,
        navigationOptions: {
            tabBarLabel: 'Cài Đặt',
            tabBarIcon: ({ focused }) => (
                <Ionicons name='ios-switch' size={18} color={focused ? '#DB1513' : '#B2A6A7'}></Ionicons>
            )
        }
    }
}, {
    initialRouteName: 'History',
    activeTintColor: '#DB1513',
    inactiveTintColor: '#B2A6A7',
    barStyle: { backgroundColor: 'white' }
})

export default createAppContainer(tabNavigation);