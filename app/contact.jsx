import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet, Image, Appearance } from 'react-native';

const Contact = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  return (
    <View style={styles.parentCOntainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      <Text style={[styles.textStyles, styles.header]}>Contact us</Text>
      <View>
        <Text style={[styles.textStyles, styles.contactText]}> 60, Nkpolu Street, Port Harcourt, Nigeria</Text>
        <Text style={[styles.textStyles, styles.phone, styles.contactText]}>+234567890</Text>
        <Text style={[styles.textStyles, styles.phone, styles.contactText]}>newresturant@gmail.com</Text>
      </View>
    </View>
  );
};

export default Contact;

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    textStyles: {
      color: theme.text,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    parentCOntainer: {
      flex: 1,
      backgroundColor: theme.background,
    },
    image: {
      width: '100%',
      overflow: 'hidden',
      height: '100%',
      maxHeight: 300,
    },
    contactText: {
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    phone: {
      textDecorationLine: 'underline',
    },
  });
};
