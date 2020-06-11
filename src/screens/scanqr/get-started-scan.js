import React, { Component } from 'react';
import { View, Text, Platform, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

class GetStartedScan extends Component {

    __handleGoToScan = () => {
        const { navigate } = this.props.navigation;
        return navigate('ScanQR');
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 15, color: '#8e8e8e' }}>Quét Mã Với QR Code</Text>
            <Text style={{ top: 20, color: '#DB1513', fontWeight: 'bold', fontSize: 20 }}>Xin Chào, Khánh Ney</Text>
        </View>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center", borderWidth: 0.2, borderColor: '#f1f1f1', width: '80%', height: '50%',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 2,
            borderWidth: 0.2,
            borderColor: '#f1f1f1',
            backgroundColor: '#fff',
        }}>
            <Image source={require('../../../assets/qrdemo.png')} resizeMode='contain' style={{ width: '70%', height: '70%', flex: 1 }}></Image>
            <View style={{ flex: 2, justifyContent: "center", alignItems: 'flex-end', position: 'absolute', bottom: -30}}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.__handleGoToScan}
                    style={{ paddingHorizontal: 30, paddingVertical: 15, borderRadius: 8, backgroundColor: '#DB1513' }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Bắt Đầu Quét QR</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.select({ ios: 20, android: 40 }),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default GetStartedScan;
