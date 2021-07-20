import React from 'react';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar} from 'react-native-elements';
import DrawerSingleButton from './DrawerSingleButton';
// import {ModalStepper} from '../components';
import {logOutUser} from '@actions/authAction';
import {useAuth} from '@context/authContext';
import ModalStepper from '@components/Modal';
import drawerStyles from './drawer.styles';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import drawerOptions from '@data/drawerOptions';

const user = {
  c5xvtAUiPGZ1bxRVuzxGiQ9L2kD3: {
    name: 'Fernando Chullo Mamani',
    icon: 'FC',
  },
  nv5QD6DrauXFVS4lKnIhBit6HXy1: {
    name: 'Super Admin',
    icon: 'SA',
  },
  '31YM2e49vTMti4RjpRjriBEveDt1': {
    name: 'Admin',
    icon: 'S',
  },
  jc3y67q67qVHkd2ixKv2wHEctdG3: {
    name: 'Secretaria',
    icon: 'S',
  },
};

const DrawerScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const {state, dispatch} = useAuth();
  console.log(state);
  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleLogOut = async () => {
    toggleModal();
    logOutUser(dispatch);
  };

  return (
    <SafeAreaView style={drawerStyles.container}>
      <ScrollView>
        <View style={drawerStyles.header}>
          <Avatar
            size={50}
            containerStyle={drawerStyles.avatarContainer}
            titleStyle={drawerStyles.avatarTitle}
            rounded
            title={user[state.uid].icon}
          />
          <View style={drawerStyles.userNameContainer}>
            <Text style={drawerStyles.userName}>{user[state.uid].name}</Text>
          </View>
        </View>
        <View style={drawerStyles.containerButtons}>
          {Object.values(drawerOptions).map(
            ({title, toNavigate, icon}, key) => (
              <DrawerSingleButton
                key={key}
                title={title}
                toNavigate={toNavigate}
                navigation={navigation}
                icon={icon}
              />
            ),
          )}
        </View>
        <TouchableOpacity
          style={drawerStyles.logoutButtonContainer}
          onPress={() => {
            navigation.closeDrawer();
            toggleModal();
          }}>
          <FontAwesomeIcon icon={faSignOutAlt} size={25} color={'#000'} />
          <Text style={drawerStyles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
      <Text style={drawerStyles.versionText}>
        Versión{Platform.OS === 'ios' ? ' 1.0.0' : ' 1.0.1'}
      </Text>
      <ModalStepper
        visible={visible}
        toggleModal={toggleModal}
        handleConfirm={handleLogOut}>
        <View style={drawerStyles.overlayContainer}>
          <Text style={drawerStyles.overlayText}>¿Desea desconectarse?</Text>
        </View>
      </ModalStepper>
    </SafeAreaView>
  );
};

export default DrawerScreen;
