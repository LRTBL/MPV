import React from 'react';
import {
  faHome,
  faUser,
  faScroll,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {SEC_LIGHT_COLOR} from '@theme/colors';

const drawerOptions = {
  home: {
    title: 'Inicio',
    toNavigate: 'Home',
    icon: (size: number) => (
      <FontAwesomeIcon icon={faHome} size={size} color={SEC_LIGHT_COLOR} />
    ),
  },
  personalData: {
    title: 'Datos personales',
    toNavigate: 'PersonalData',
    icon: (size: number) => (
      <FontAwesomeIcon icon={faUser} size={size} color={SEC_LIGHT_COLOR} />
    ),
  },
  NewPaperWork: {
    title: 'Nuevo tramite',
    toNavigate: 'NewPaperWork',
    icon: (size: number) => (
      <FontAwesomeIcon icon={faScroll} size={size} color={SEC_LIGHT_COLOR} />
    ),
  },
  tracing: {
    title: 'Seguimiento',
    toNavigate: 'Tracing',
    icon: (size: number) => (
      <FontAwesomeIcon
        icon={faShoePrints}
        size={size}
        color={SEC_LIGHT_COLOR}
      />
    ),
  },
};

export default drawerOptions;
