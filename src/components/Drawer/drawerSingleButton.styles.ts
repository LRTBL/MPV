import {StyleSheet} from 'react-native';
import {PRI_COLOR} from '@theme/colors';

const drawerContentStyles = StyleSheet.create({
  accordion: {
    paddingLeft: 40,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 8,
  },
  singleContainer: {
    height: 45,
    marginTop: 8,
  },
  titleAccordion: {
    marginLeft: 20,
    fontSize: 14,
    color: '#616161',
    fontFamily: 'AktivGroteskCorp-Light',
  },
  itemAccordion: {
    backgroundColor: '#fff',
    paddingTop: 6,
    paddingBottom: 5,
    justifyContent: 'flex-start',
    paddingLeft: 94,
  },
  itemAccordionTitle: {
    color: '#000',
    fontWeight: '100',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 14,
    textAlign: 'left',
  },
  singleButton: {
    backgroundColor: PRI_COLOR,
    justifyContent: 'flex-start',
    paddingLeft: 40,
  },
  singleTitle: {
    color: '#FFF',
    fontWeight: '100',
    fontFamily: 'AktivGroteskCorp-Regular',
    fontSize: 14,
    marginLeft: 30,
  },
});

export default drawerContentStyles;
