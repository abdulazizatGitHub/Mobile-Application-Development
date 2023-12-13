import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/navigations/bottomTab';

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
