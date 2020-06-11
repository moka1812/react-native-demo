import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, Switch, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 18, color: 'gray', right: 80, marginBottom: 20 }}>Kết Nối Mạng Xã Hội</Text>
        <View style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: "center" }}>
          {/* FACEBOOK */}
          <View style={{ flex: 1, backgroundColor: '#717DAD', flexDirection: 'row', width: '90%', borderRadius: 10 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
              <EvilIcons name='sc-facebook' size={90} color='#EEF2F7'></EvilIcons>
            </View>
            <View style={{ flex: 3, justifyContent: "center", alignItems: 'flex-start' }}>
              <Text style={{fontSize: 19, color: '#EEF2F7'}}>Kết Nối Facebook</Text>
              <Text style={{ fontSize: 12, color: '#EEF2F7' }}>(kết nối chia sẽ qua mạng xã hội facebook)</Text>
            </View>
          </View>
          {/* TWITTER */}
          <View style={{ flex: 1, backgroundColor: '#519DEB', flexDirection: 'row', width: '90%', borderRadius: 10, top: 20 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
              <EvilIcons name='sc-twitter' size={90} color='#EEF2F7'></EvilIcons>
            </View>
            <View style={{ flex: 3, justifyContent: "center", alignItems: 'flex-start' }}>
              <Text style={{fontSize: 19, color: '#EEF2F7'}}>Kết Nối Twitter</Text>
              <Text style={{ fontSize: 12, color: '#EEF2F7' }}>(kết nối chia sẽ qua mạng xã hội twitter)</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 18, color: 'gray', right: 80, marginTop: 30 }}>Cài Đặt Tài Khoản</Text>
        <View style={{ flex: 1.5, width: '80%' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
             <Text style={{ color: 'black', fontWeight: 'bold', paddingRight: 20 }}>Tài Khoản Bí Mật</Text> 
             <Switch 
                value={this.state.switch1}
                onValueChange={value => this.setState({ switch1: value })}
             />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
             <Text style={{ color: 'black', fontWeight: 'bold', paddingRight: 20 }}>Tài Khoản Bí Mật</Text> 
             <Switch 
                value={this.state.switch2}
                onValueChange={value => this.setState({ switch2: value })}
             />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
             <Text style={{ color: 'black', fontWeight: 'bold', paddingRight: 20 }}>Tài Khoản Bí Mật</Text> 
             <Switch 
                value={this.state.switch3}
                onValueChange={value => this.setState({ switch3: value })}
             />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
             <Text style={{ color: 'black', fontWeight: 'bold', paddingRight: 20 }}>Tài Khoản Bí Mật</Text> 
             <Switch 
                value={this.state.switch4}
                onValueChange={value => this.setState({ switch4: value })}
             />
          </View>
        </View>
        <View style={{ flex: 1.2, justifyContent: 'center', alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ paddingHorizontal: 100, paddingVertical: 20, backgroundColor: '#DB1513', borderRadius: 10,
              justifyContent: 'center', alignItems: "center"
            }}
            >
                <Text style={{ color:'#EEF2F7', fontWeight: 'bold' }}>Xác Nhận</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.select({ ios: 10, android: 32 }),
    flex: 1
  }
})

export default Setting;
