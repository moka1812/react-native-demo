import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

class NotiSucess extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  __handleDone = () => {
      const { navigate } = this.props.navigation;
      return navigate('History');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/confirm-sucessed.png')} resizeMode='center'></Image>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer__top}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fe3d7e' }}>Dữ Liệu Cập Nhật Thành Công</Text>
                </View>
                <View style={styles.footer__content}>
                    <Text style={{ color: 'gray', fontSize: 12 }}>(Dữ liệu trước khi lưu trữ, đã được lưu trên IPFS, sau khi có hashString, lưu trữ hashString vào Ethereum)</Text>
                </View>
                <View style={styles.footer__footer}>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        style={{ paddingHorizontal: 90, paddingVertical: 10, borderRadius: 8, backgroundColor: '#fe3d7e', 
                        justifyContent: 'center', alignItems: "center"
                    }}

                        onPress={this.__handleDone}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Hoàn Tất</Text>  
                    </TouchableOpacity>
                </View>
                <View style={styles.footer__temp}>
                    <Text style={{ color: 'gray', fontSize: 12 }}>[Bản Quyền (KoF - KhánhNey)]</Text>
                </View>
            </View>
      </SafeAreaView>   
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        bottom: 35
    },
    footer: {
        flex: 1
    },
    footer__top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer__content: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    footer__footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },
    footer__temp: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 15
    },
})

export default NotiSucess;
