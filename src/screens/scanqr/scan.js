import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet,  
    Dimensions, LayoutAnimation, StatusBar, 
    TouchableOpacity, ActivityIndicator } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { red, white } from 'ansi-colors';

const { height, width } = Dimensions.get('window');
import axios from 'axios';
import { URI_NGROK } from '../../constants/';

class ScanQR extends Component {
    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
        /**
         * Vì hÀm query là bất đồng bộ, nên cần scannedTemp để xử lý show dữ liệu trước
         */
        scannedTemp: false,
        scanned : false,
        transactions: {
            patient: {
                fullname: '',
                address : '',
                phone   : '',
                gender: '',
                height: '',
                weight: '',
                age: ''
            }, 
            doctor: {
                fullnameDoctor: '', 
                genderDoctor: '',
                phoneDoctor: '',
            }, 
            prescription: {
                description: '',
                title: '',
                amount  : '',
            },
            totalPrice: '',
            descriptionTotal: '',
            userID: ''
        }
    };

    componentDidMount() {
        this._requestCameraPermission();
    }
    
    /**
     * REQUEST_PERMISSION
     */
    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = async ({ type, data }) => {
        this.setState({ scannedTemp: true });
        // data = userID (5d006f7d524b98acccfe1bad)
        // data = 'https://c596c8c7.ngrok.io/verify-qrcode-user/5d006f7d524b98acccfe1bad'
        let URI = `${URI_NGROK}/verify-qrcode-user/${data.toString()}`;
        let resp = await axios.get(URI);
        let { 
                data:   { 
                            totalPrice, description, 
                            patientID: { fullname, address, phone, gender, height, weight, age, _id: userID }, 
                            doctorID: { fullname: fullnameDoctor, gender: genderDoctor, phone: phoneDoctor }, 
                            prescriptionID: {  description: descriptionTotal, title, amount }
                        } 
            } = resp.data;
        this.setState({
            scanned: true,
            transactions: {
                totalPrice: totalPrice, descriptionTotal: descriptionTotal,
                patient: {
                    fullname, address, phone, gender, height, weight, age 
                },
                doctor: {
                    fullnameDoctor, genderDoctor, phoneDoctor
                }, 
                prescription: {
                    description, title, amount
                },
                userID: userID
            }
        });
        console.log({ _: this.state })
        
    }

    __handleClickDetail = () => {
        const { navigate }   = this.props.navigation;
        const { transactions } = this.state;
        return navigate('DetailScan', { metaTransaction: JSON.stringify(transactions) })
    }
    /**
     * RENDER WORKPLACES 
     */
    __renderDetailAfterScan = () => {
        const { transactions: { prescription: { title, amount } } } = this.state;
        return <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, flexDirection: 'column', paddingLeft: 10, justifyContent: "center", alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', overflow: 'visible', paddingTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Đơn Thuốc:</Text>
                <Text style={{ fontSize: 16, color: 'white', top: 4, left: 5 }}>{title}</Text>    
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Số Lượng:</Text>
                <Text style={{ fontSize: 16, color: 'white', top: 4, left: 5, marginBottom: 8 }}>{amount}</Text>    
            </View>

             <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#ffffff', paddingHorizontal: 5, flex: 1, marginBottom: 50,
            justifyContent: 'center', alignItems: "center", width: '97%', zIndex: 300, opacity: 1 }}
                onPress={this.__handleClickDetail}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#DB1513' }}>Chi Tiết</Text>
            </TouchableOpacity>
        </View>
    };

    __renderLoadingScanWhenNotGetData = () => {
        return <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, flexDirection: 'column', paddingLeft: 10, justifyContent: "center", alignItems: 'center' }}>
            <Text style={{ fontSize: 12, color: 'gray' }}>(Đã Quét, Chờ Dữ Liệu Phản Hồi Ethereum)</Text>
            <ActivityIndicator size={"large"} color='#ffffff'></ActivityIndicator>
        </View>
    }

    __renderLoadingScan = () => {
        return <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, flexDirection: 'column', paddingLeft: 10, justifyContent: "center", alignItems: 'center' }}>
            <ActivityIndicator size={"large"} color='#ffffff'></ActivityIndicator>
        </View>
    }
  render() {
      const { scanned, scannedTemp } = this.state;
      const { __renderDetailAfterScan, __renderLoadingScan, __renderLoadingScanWhenNotGetData } = this;
    return (
      <SafeAreaView style={styles.container}>
           {this.state.hasCameraPermission === null
            ? <Text>Requesting for camera permission</Text>
            : this.state.hasCameraPermission === false
                ? <Text style={{ color: '#fff' }}>
                    Camera permission is not granted
                    </Text>
                : <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this._handleBarCodeRead}
                    style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, justifyContent: "center", alignItems: "center" }}>  
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>Quét Thông Tin Bệnh Án</Text>
                        <Text style={{ fontSize: 12, color: 'gray' }}>(Mã QR trên Đơn Thuốc)</Text>
                    </View>
                    <View style={{ flex: 2, borderWidth: 0.2}}>
                    </View>
                       
                    {   
                        scannedTemp ? scanned ? __renderDetailAfterScan() : __renderLoadingScanWhenNotGetData()
                            : __renderLoadingScan()
                            
                        
                    }
                 </BarCodeScanner>}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        position: 'relative',
    },
    barCodeFrame: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    footer: {
        flex: 1
    }
})

export default ScanQR;
