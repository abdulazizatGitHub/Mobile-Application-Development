import * as React from 'react';
import { Avatar, Button, Card, Text, View } from 'react-native-paper';

function AddCategoryScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
      </View>
    );
  }
  export default AddCategoryScreen;