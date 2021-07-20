import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
// import {Header, Left, Right, Body, Title, Button} from 'native-base';
import {Badge, Header, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import headerStyles from './header.styles';
import {PRI_COLOR, PRI_COLOR_DARK} from '@theme/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = ({title, type = 'main'}) => {
  const navigation = useNavigation();
  return (
    <Header
      containerStyle={headerStyles.header}
      backgroundColor={PRI_COLOR}
      leftComponent={
        <>
          {type === 'main' ? (
            <Icon
              name="bars"
              type="font-awesome"
              color="#FFF"
              onPress={() => navigation.openDrawer()}
            />
          ) : (
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#f50"
              onPress={() => navigation.goBack()}
            />
          )}
        </>
      }
      centerComponent={<Text style={headerStyles.title}>{title}</Text>}
      rightComponent={
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('NotificationScreen');
          }}>
          <FontAwesomeIcon icon={faBell} size={22} color={'#fff'} />
          <Badge
            value={3}
            badgeStyle={{backgroundColor: PRI_COLOR_DARK, borderWidth: 0}}
            containerStyle={headerStyles.badge}
          />
        </TouchableOpacity>
      }
    />
  );
};

export default HeaderComponent;
