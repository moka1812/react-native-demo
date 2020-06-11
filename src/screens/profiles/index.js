import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={profiles.container}>
        <View style={profiles.top}>
          <View style={profiles.blockTop}></View>
        </View>
        <View style={profiles.bottom}></View>
      </View>
    );
  }
}

const profiles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // middle
    alignItems: 'center', //center,
  },
  top: {
    flex: 2,
    backgroundColor: '#DB1513',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15
  }, 
  blockTop: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    height: 200,
    width: '80%',
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 10,
    top: 150
  },
  bottom: {
    flex: 3,
    zIndex: -1
  }
})

export default Profile;
