import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import { URI_NGROK } from '../../constants/';

class DetailScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        submitting: false
    };
  }

  componentDidMount() {
        const { getParam } = this.props.navigation;
        const transactionStr = getParam('metaTransaction', 'default_data');
        const transactions = JSON.parse(transactionStr);

        const  {
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
            userID
        } = transactions;
      console.log(`------`);
      this.setState({
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
            userID
        }
      }, () => {
        console.log(`set_state_success_when_pass_param`)
      })
  }

  __handleClickVerifyTransaction = async () =>  {
    const { transactions: { userID } } = this.state;
    this.setState({ submitting: true });
    const URI_CONFRIM_BLOCKCHAIN = `${URI_NGROK}/submit-verify-info/${userID}`
    let respConfirm = await axios.get(URI_CONFRIM_BLOCKCHAIN);
    // console.log({ respConfirm: respConfirm.data })
    if (respConfirm.error) return alert('Lỗi IPFS hoặc Ethereum!');
    /**
     * TODO
     */
    this.setState({ submitting: false });
    return this.props.navigation.navigate('NotificationSuccess');
  }

  __renderButtonWithSubmitted = () => (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ paddingHorizontal: 15, paddingVertical: 4, backgroundColor: '#DB1513', width: '80%', justifyContent: "center", alignItems: "center",
            borderRadius: 8
        }}
            onPress={this.__handleClickVerifyTransaction}
        >       
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#ffffff' }}>Xác Nhận</Text>
            <Text style={{ fontSize: 12, color: '#f1f1f1' }}>(Dữ Liệu Lưu Trữ Blockchain)</Text>
        </TouchableOpacity>
    )

    __renderButtonWithSubmitting = () => (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ paddingHorizontal: 15, paddingVertical: 4, backgroundColor: '#DB1513', width: '80%', justifyContent: "center", alignItems: "center",
            borderRadius: 8
        }}
            onPress={this.__handleClickVerifyTransaction}
        >       
            <ActivityIndicator size='large' color='#ffffff' style={{ paddingVertical: 5 }}></ActivityIndicator>
        </TouchableOpacity>
  )

  render() {
    const { transactions: {
        totalPrice: totalPrice, descriptionTotal: descriptionTotal,
        patient: {
            fullname, address, phone, gender, height, weight, age 
        },
        doctor: {
            fullnameDoctor, genderDoctor, phoneDoctor
        }, 
        prescription: {
            description, title, amount
        }
    }, submitting } = this.state;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.content}>
                <View style={styles.boxInfoDoctor}>
                    <View style={styles.boxInfoDoctor_header}>
                        <View style={styles.boxInfoDoctor_header__left}>
                            <View style={{ width: 80, height: 80, position: 'relative', borderRadius: 45}}>
                                <Image 
                                source={require('../../../assets/doctor-avatar.png')} 
                                resizeMode='center' style={{ position: 'absolute', width: '100%', height: '100%' }}></Image>
                            </View>
                        </View>
                        <View style={styles.boxInfoDoctor_header__right}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>{fullnameDoctor}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'gray', fontSize: 12, bottom: 4 }}>Khoa. Chấn Thương</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={{ color: '#DB1513', paddingRight: 5 }}>5.0</Text>
                                <Ionicons name='md-paper-plane' size={15} color='linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ' style={{top: 3, marginRight: 3}}></Ionicons>
                                <Ionicons name='md-paper-plane' size={15} color='linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ' style={{top: 3, marginRight: 3}}></Ionicons>
                                <Ionicons name='md-paper-plane' size={15} color='linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ' style={{top: 3, marginRight: 3}}></Ionicons>
                                <Ionicons name='md-paper-plane' size={15} color='linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ' style={{top: 3, marginRight: 3}}></Ionicons>
                                <Ionicons name='md-paper-plane' size={15} color='linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ' style={{top: 3, marginRight: 3}}></Ionicons>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxInfoDoctor_content}>
                        <Text style={{ color: 'gray', fontSize: 11 }}>Hiện Tại đang làm việc tại KoF Company Technology, với chức danh là Project Manager</Text>
                    </View>
                    <View style={styles.boxInfoDoctor_bottom}>
                        <View style={{ height: 40, borderRadius: 25, backgroundColor: '#ffffff', position: 'relative', flex: 1,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.53,
                            elevation: 10, 
                            justifyContent: 'center', alignItems: "center",
                            marginLeft: 8
                        }}>
                            <Ionicons name='md-chatboxes' size={20} color='#DB1513' style={{ position: 'absolute' }}></Ionicons>
                        </View>
                        <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity 
                                activeOpacity={0.7}
                                style={{ paddingHorizontal: 14, paddingVertical: 8, borderWidth: 0.2, borderColor: 'red', borderRadius: 8,
                                    width: '80%', backgroundColor: '#DB1513', justifyContent: "center", alignItems: "center"
                                }}>
                                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Thông Tin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
                <View style={{ width: '100%', height: 200, bottom: 40, flexDirection: "row",
                    backgroundColor: 'white',
                    zIndex: 100,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
            
                    elevation: 8,
                    borderRadius: 8,
                    width: '95%'
                }}>
                        <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 10, top: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center"}}>
                                <MaterialCommunityIcons name='clipboard-pulse-outline' size={23} color='gray'></MaterialCommunityIcons>
                                <Text style={{ color: 'gray', marginLeft: 5, fontSize: 18, borderBottomWidth: 0.2, borderBottomColor: 'gray' }}>Bệnh Nhân</Text>
                            </View>
                            <View style={{ flex: 2, paddingTop: 4 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Họ Và Tên:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>{fullname}</Text>
                            </View>
                            <View style={{ flex: 2, marginTop: -15 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Số Điện Thoại:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>{phone}</Text>
                            </View>
                            <View style={{ flex: 2, marginTop: -15 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Địa Chỉ:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>{address}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', left: 20}}>
                            <View style={{ flex: 1, marginTop: 10 }}></View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Giới Tính: </Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '4%', bottom: 2 }}>{ Number(gender) ? 'Nam' : 'Nữ' }</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Tuổi:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '4%', bottom: 2 }}>{age}</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Chiều Cao:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '4%', bottom: 2 }}>{height}</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Cân Nặng:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '4%', bottom: 2 }}>{weight}</Text>
                            </View>
                        </View> 
                </View> 

                <View style={{ width: '100%', height: 250, backgroundColor: '#ffffff', bottom: 40, marginTop: 10, zIndex: 100,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
            
                    elevation: 8,
                    borderRadius: 8,
                    width: '95%' }}>
                        <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10, top: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', right: 40}}>
                                <Ionicons name='ios-medkit' size={23} color='gray'></Ionicons>
                                <Text style={{ color: 'gray', marginLeft: 5, fontSize: 18,  borderBottomWidth: 0.2, borderBottomColor: 'gray', }}>Đơn Thuốc</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Đơn Thuốc:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>@{title}</Text>
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Mô Tả:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>{description}</Text>
                            </View>
                            <View style={{ flex: 2, bottom: 35 }}>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Lưu Ý:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%' }}>{descriptionTotal}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", bottom: 20, alignItems: 'flex-end', right: 15 }}>
                                <Text style={{ color: 'gray', fontSize: 12, right: '20%' }}>Tổng Tiền:</Text>
                                <Text style={{ fontWeight: 'bold', paddingLeft: '12%', fontWeight: 'bold', fontSize: 20, color: '#DB1513' }}>{totalPrice} VNĐ</Text>
                            </View>
                        </View>
                </View>      

                <View style={{ width: '100%', height: 100, backgroundColor: '#ffffff', bottom: 40, marginTop: 10, zIndex: 100,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
            
                    elevation: 8,
                    borderRadius: 8,
                    width: '95%',
                        justifyContent: 'center', alignItems: "center"
                    }}>
                    {/* RENDER BUTTON */}
                    { submitting ? this.__renderButtonWithSubmitting() : this.__renderButtonWithSubmitted() }
                </View>      
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        height: 150,
        width: '100%',
        borderWidth: 0.2,
        borderColor: '#DB1513',
        backgroundColor: 'linear-gradient(45deg, rgba(219,21,19,1) 0%, rgba(0,0,0,1) 100%); ',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInfoDoctor: {
        height: 180,
        width: '80%',
        backgroundColor: 'white',
        zIndex: 100,
        top: -80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        borderRadius: 8
    },
    boxInfoDoctor_header: {
        flex: 2,
        flexDirection: 'row',
    },
    boxInfoDoctor_header__left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInfoDoctor_header__right: {
        flex: 2,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 5
    },
    boxInfoDoctor_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: '10%',
        width: '80%'
    },
    boxInfoDoctor_bottom: {
        flex: 1,
        flexDirection: 'row',
        top: 22,
        zIndex: 1000
    },
    boxInfoPatient: {

    },
    boxInfoPatient_top: {

    },
    boxInfoPatient_content: {

    },
    boxInfoPatient_bottom: {

    },
})

export default DetailScan;
