import {StyleSheet} from 'react-native';
import {PRI_COLOR} from '@theme/colors';

const headerStyles = StyleSheet.create({
  header: {
    elevation: 5,
    height: 80,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: '#FFF',
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 18,
  },
  body: {
    marginLeft: 20,
    marginRight: 15,
    alignItems: 'flex-start',
  },
  containerLeft: {flex: 0},
  containerRight: {marginRight: 15, flex: 0},
  profileBtn: {marginRight: 15},
  notificationBtn: {paddingLeft: 7, paddingRight: 7},
  badge: {
    borderWidth: 0,
    width: 30,
    position: 'absolute',
    top: -6,
    right: -15,
  },
});

export default headerStyles;
