import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import {profileFixture} from '../fixtures/users';

import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeModules,
  InteractionManager,
  ActivityIndicatorIOS,
} from 'react-native';

class UserProfile extends React.Component{
  render(){
    let titleConfig = {title: 'Profile', tintColor: 'white'}
    let {currentUser} = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          tintColor={Colors.brandPrimary}
          title={titleConfig}
        />
        <ScrollView
          style={styles.container}>
          <View style={styles.topProfileContainer}>
            <TouchableOpacity
              onPress={()=>{
                this.props.navigator.push({
                  name: 'UserAvatar'
                })
              }}
              style={styles.avatarContainer}>
              <Image source={{uri: currentUser.avatarUrl}} style={styles.avatar}/>
            </TouchableOpacity>
            <View style={styles.topProfileInfo}>
              <Text style={styles.name}>{currentUser.firstName} {currentUser.lastName}</Text>
              <Text style={styles.location}>{currentUser.location.city}, {currentUser.location.state}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigator.push({
                name: 'UserTechnologies',
              })
            }}
            style={styles.formField}>
            <Text style={styles.formName}>My Technologies</Text>
            <View>
              <Icon name="ios-arrow-forward" size={30} color='#ccc' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> {
              this.props.navigator.push({
                name: 'UserSettings'
              })
            }}
            style={styles.formField}>
            <Text style={styles.formName}>Settings</Text>
            <View>
              <Icon name="ios-arrow-forward" size={30} color='#ccc' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              this.props.logout();
            }}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.inactive,
  },
  topProfileContainer:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  avatar:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#777',
  },
  topProfileInfo:{
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '500',
  },
  location:{
    fontSize: 20,
    fontWeight: '300',
  },
  formField:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  forwardButton:{

  },
  formName:{
    fontWeight: '300',
    fontSize: 20,
  },
  logoutButton: {
    position: 'absolute',
    left: 20,
  },
  logoutText:{
    fontSize: 20,
    color: 'red',
  },
}

module.exports = UserProfile;
