import { Card } from "react-native-paper";
import { View } from "react-native";
export function CategoryCard() {
    return(
        <View>
            <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>

        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.cardContainer}>
      <ImageBackground style={styles.cardImage} resizeMode='cover' source={require('../../assets/images/electronics.jpg')}>
          <Text style={styles.cardTitle}>Electronics</Text>
        </ImageBackground>
      </Card>
        </View>
    );
};