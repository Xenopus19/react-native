import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#000000',
    textSecondary: '#ffffff',
    primary: '#323c99',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  border: {
    borderWidth: 2,
    borderRadius: 7
  }
};

export default theme;