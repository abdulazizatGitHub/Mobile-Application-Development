import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/navigations/bottomTab';
import StackNavigation from './src/navigations/stackNavigation';
import AppProvider from './src/common/context';

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
      <StackNavigation />
    </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
