import {StyleSheet} from 'react-native';
import {SEC_COLOR, PRI_COLOR, PRI_COLOR_DARK} from '@theme/colors';

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRI_COLOR,
  },
  versionText: {
    textAlign: 'right',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: '#FFF',
    marginBottom: 20,
    fontSize: 12,
    marginRight: 30,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 160,
    borderBottomColor: PRI_COLOR_DARK,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    backgroundColor: SEC_COLOR,
    marginLeft: 35,
  },
  avatarTitle: {
    color: '#FFF',
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 25,
  },
  userNameContainer: {
    marginLeft: 20,
    width: '60%',
  },
  userName: {
    color: '#FFF',
    fontFamily: 'AktivGroteskCorp-Regular',
    textTransform: 'uppercase',
    fontSize: 15,
  },

  drawerItem: {
    marginLeft: 40,
  },
  containerButtons: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  logoutButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingLeft: 50,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFF',
    fontFamily: 'AktivGroteskCorp-Regular',
    marginLeft: 30,
  },
  overlayContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 18,
    fontFamily: 'AktivGroteskCorp-Light',
  },
});

export default drawerStyles;
