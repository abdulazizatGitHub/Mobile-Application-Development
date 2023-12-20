import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/navigations/bottomTab';
import StackNavigation from './src/navigations/stackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
