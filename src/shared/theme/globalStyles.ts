import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {RF} from './responsive';

const {RED, BLACK, COBALT, GRAY} = COLORS;
export const GST = StyleSheet.create({
  FLEX: {
    flex: 1,
  },
  ERROR: {
    marginTop: RF(1),
    fontSize: RF(10),
    color: RED,
    marginLeft: RF(15),
  },
  SHADOW: {
    shadowColor: GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 5,
  },
  SHADOW_LIGHT: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  SHADOW_HEAVY: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  SHADOW_DARK: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.58,
    shadowRadius: 20.0,
    elevation: 30,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  DIVIDER: {
    borderBottomColor: COBALT,
    borderBottomWidth: 1,
  },
  MAINT_CONTAINER: {
    flex: 1,
    alignSelf: 'center',
    width: '80%',
  },
  CONTENT_CONTAINER: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  FLEX_ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
