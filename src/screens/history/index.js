import React, { Component } from 'react';
import { View, Text, SafeAreaView, Platform, StyleSheet, 
  FlatList, Image, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem } from 'react-native-elements';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataFakeFlatlist: [],
    };
  }

  componentDidMount() {
    let arrData = [
      {
        _id: 1,
        title: 'Đau Dạ Dày',
        location: 'Buồn 3, Lầu 2, Khoa Nội',
        image: 'https://cdn.pixabay.com/photo/2017/05/16/01/57/stomach-icon-2316627_960_720.png'
      },
      {
        _id: 2,
        title: 'Đau Đầu',
        location: 'Phòng 302, Khoa Ngoại',
        image: 'https://images.vexels.com/media/users/3/149861/isolated/preview/5a2ac8828568f40a50a25c7f2a36f6c0-headache-sickness-symptom-icon-by-vexels.png'
      },  
      {
        _id: 6,
        title: 'Xuyễn, Chóng Mặt',
        location: 'Phòng 309, Khoa Ngoại',
        image: 'https://images.vexels.com/media/users/3/149724/isolated/thumb/4c4674feac0e63c45be6c3ed0fbfebcc-dizziness-sickness-symptom-icon-by-vexels.png'
      },
      {
        _id: 4,
        title: 'Ho Đờm',
        location: 'Phòng 102, Khoa Nội',
        image: 'https://images.vexels.com/media/users/3/149717/isolated/preview/ff32443ec304380f7ddf26dedd3b1d68-cough-sickness-symptom-icon-by-vexels.png'
      },
      {
        _id: 3,
        title: 'Phẩu Thuật Nối Ghép Gân Tay',
        location: 'Phòng 301, Khoa Chấn Thương Chỉnh Hình',
        image: 'https://static1.squarespace.com/static/5a9700d331d4dfa358975a87/t/5c4ba0c3bba22374afa33ad5/1548460233135/OAR+0118-003+Website+Icon+-+Hand+and+Wrist+-+Blue.png'
      },
      {
        _id: 5,
        title: 'Tiển Phẩu Mắt Dính 302',
        location: 'Phòng 109, Khoa Chấn Ngoại',
        image: 'https://icons-for-free.com/iconfiles/png/512/vision+icon-1320087274610269934.png'
      }
    ]

    this.setState({
      dataFakeFlatlist: arrData
    })
  }

  __renderItemFlatlist({ item }) {
      return <ListItem
        key={item._id}
        title={item.title}
        subtitle={item.location}
        containerStyle={{ borderBottomWidth: 0 }}
        leftAvatar={{
          source: {
            uri: item.image
          }
        }}
        rightIcon={
          <Ionicons name='ios-arrow-forward' size={17} color='gray' style={{ right: 10 }}></Ionicons>
        }
      />
  }

  __renderSeparator() {
      return (
        <View
          style={{
            height: 1,
            width: '86%',
            backgroundColor: '#f1f1f1',
            marginLeft: '10%'
          }}  
        />
      )
  }

  __handleLoadmore() {
    // this.setState({ isLoading: true });
    // TODO LỖI KHÔNG LẤY ĐC STATE
    let fakeDataAppend = [
      {
        _id: 11,
        title: 'Đau Dạ Dày',
        location: 'Buồn 3, Lầu 2, Khoa Nội',
        image: 'https://cdn.pixabay.com/photo/2017/05/16/01/57/stomach-icon-2316627_960_720.png'
      },
      {
        _id: 22,
        title: 'Đau Đầu',
        location: 'Phòng 302, Khoa Ngoại',
        image: 'https://images.vexels.com/media/users/3/149861/isolated/preview/5a2ac8828568f40a50a25c7f2a36f6c0-headache-sickness-symptom-icon-by-vexels.png'
      },  
      {
        _id: 62,
        title: 'Xuyễn, Chóng Mặt',
        location: 'Phòng 309, Khoa Ngoại',
        image: 'https://images.vexels.com/media/users/3/149724/isolated/thumb/4c4674feac0e63c45be6c3ed0fbfebcc-dizziness-sickness-symptom-icon-by-vexels.png'
      },
      {
        _id: 42,
        title: 'Ho Đờm',
        location: 'Phòng 102, Khoa Nội',
        image: 'https://images.vexels.com/media/users/3/149717/isolated/preview/ff32443ec304380f7ddf26dedd3b1d68-cough-sickness-symptom-icon-by-vexels.png'
      },
      {
        _id: 32,
        title: 'Phẩu Thuật Nối Ghép Gân Tay',
        location: 'Phòng 301, Khoa Chấn Thương Chỉnh Hình',
        image: 'https://static1.squarespace.com/static/5a9700d331d4dfa358975a87/t/5c4ba0c3bba22374afa33ad5/1548460233135/OAR+0118-003+Website+Icon+-+Hand+and+Wrist+-+Blue.png'
      },
      {
        _id: 52,
        title: 'Tiển Phẩu Mắt Dính 302',
        location: 'Phòng 109, Khoa Chấn Ngoại',
        image: 'https://icons-for-free.com/iconfiles/png/512/vision+icon-1320087274610269934.png'
      }
    ];
    // setTimeout(() => {
    //   this.setState({
    //     dataFakeFlatlist: [...dataFakeFlatlist, ...fakeDataAppend],
    //     isLoading: true
    //   })
    // }, 2000);
  }

  __renderFooter() {
    if (!this.state.isLoading) return null;
    return <ActivityIndicator animating size='small' color='gray'></ActivityIndicator>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Image source={require('../../../assets/hospital.jpg')} resizeMode='center'></Image>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottom_top}>
              <View style={[{flex: 2}, styles.bottom_top_top ]}>
                <Image source={require('../../../assets/patient.gif')} resizeMode='contain' style={{ width: '100%', height: '100%' }}></Image>
              </View>
              <View style={[{flex: 2}, styles.bottom_top_conent]}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#DB1513' }}>Lê Duy Khánh</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>Project Manager tại KoF</Text>
              </View>
              <View style={[{flex: 2, flexDirection: "row"}, styles.bottom_top_bottom]}>
                <View style={[{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center"}]}>
                  <View style={{flex: 1, justifyContent: "center", alignItems: 'center', right: 10,
                    shadowColor: "#000",
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
                    width: 30, height: 40, borderRadius: 40}}>
                    <Ionicons name='ios-bed' size={22} color='#DB1513'></Ionicons>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#DB1513', left: 10 }}>12</Text>
                    <Text style={{ fontSize: 13, color: 'gray' }}>Lần Nhập</Text>
                  </View>
                </View>

                <View style={[{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center"}]}>
                  <View style={{flex: 1, justifyContent: "center", alignItems: 'center', right: 10,
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
                  width: 30, height: 40, borderRadius: 40
                }}>
                    <Ionicons name='ios-alert' size={22} color='#DB1513'></Ionicons>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#DB1513', left: 10 }}>4.7</Text>
                    <Text style={{ fontSize: 13, color: 'gray' }}>Hồi Phục</Text>
                  </View>
                </View>
              </View>
          </View>
          <View style={styles.bottom_bottom}>
              <View style={styles.bottom_bottom__top}>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center", right: 20 }}>
                  <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 25}}>Lịch Sử Khám</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 30 }}>..</Text>
                </View>
              </View>
              <FlatList 
                  style={styles.bottom_bottom__bottom}
                  data={this.state.dataFakeFlatlist}
                  renderItem={this.__renderItemFlatlist}
                  keyExtractor={item => `${item._id}`}
                  ItemSeparatorComponent={this.__renderSeparator}

                  // ListFooterComponent={this.__renderFooter}
                  onEndReached={this.__handleLoadmore}
                  onEndReachedThreshold={100}
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: Platform.select({ ios: '30', android: 25 }),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  top: {
    height: 250, 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_top: {
    height: 200,
    width: '88%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    borderWidth: 0.2,
    borderColor: '#f1f1f1',
    bottom: 80,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  bottom_top_top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_top_conent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_top_bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: '10%'
  },
  bottom_bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: -50
  },
  bottom_bottom__top: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },
  bottom_bottom__bottom: {
    flex: 1,
    top: 10,
    width: '100%',
  },
});
export default History;
