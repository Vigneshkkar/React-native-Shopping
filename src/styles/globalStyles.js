import {fullHeight, fullWidth} from '../util';
import Theme from './theme';

const {font, colors} = Theme;

const globalStyles = {
  title: {
    fontFamily: font.bold,
    fontSize: 36,
    color: colors.primary,
  },
  subTitle: {
    fontFamily: font.bold,
    fontSize: 24,
    color: colors.primary,
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 15,
    height: fullHeight,
  },
  buttonText: {
    fontFamily: font.bold,
    fontSize: 17,
    color: colors.primary,
  },
  input: {
    width: 240,
    fontFamily: font.regular,
  },
  modalBottomContainer: {
    width: fullWidth,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modalRightButton: {
    backgroundColor: colors.primary,
    width: fullWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  closeButton: {
    backgroundColor: colors.secondary,
  },
  modalRightText: {
    color: colors.background,
    fontSize: 27,
  },
};

export default globalStyles;
