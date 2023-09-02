import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { themeColors } from '../theme/colors';

// type LayoutProps = {
//   children: React.ReactNode;
// };

const Layout = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: themeColors.secondaryColor,
    // paddingVertical: 10,
  },
});