import { View, Text, StyleSheet, ImageBackground, Appearance } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.buttonColumn}>
        <Text style={[styles.textStyles, styles.headerText]}>Welcome to Moffi Resturant</Text>
        <Link href="/menu" style={styles.link}>
          <Text style={styles.textStyles}>See menu</Text>
        </Link>
        <Link href="/contact" style={styles.link}>
          <Text style={styles.textStyles}>Contact us</Text>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default App;

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    buttonColumn: {
      gap: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    textStyles: {
      color: theme.text,
    },
    link: {
      backgroundColor: theme.background,
      paddingVertical: 20,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
    headerText: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};
