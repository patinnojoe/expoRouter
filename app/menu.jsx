import { Colors } from '@/constants/Colors';
import { MENU_ITEMS, MenuImages } from '@/constants/MenuItem';
import { Appearance, FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const Menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles = createStyle(theme, colorScheme);
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
  const seperatorComponent = () => {
    return <View style={styles.seperator}></View>;
  };
  const ListHeadComp = () => {
    return <Text>Menu</Text>;
  };
  const ListFootComp = () => {
    return <Text style={{ color: theme.text, textAlign: 'center' }}>End of List</Text>;
  };

  return (
    <Container style={styles.contentContainer}>
      <FlatList
        ItemSeparatorComponent={seperatorComponent}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.contentContainer}
        // ListHeaderComponent={ListHeadComp}
        ListFooterComponent={ListFootComp}
        // ListFooterComponentStyle={styles.footstyle}
        ListEmptyComponent={<Text style={styles.menuItemText}>No items</Text>}
        data={MENU_ITEMS}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={{ uri: MenuImages[item.id - 1] }} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </Container>
  );
};

function createStyle(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingBottom: 20,
      paddingTop: 10,
      paddingHorizontal: 20,
      backgroundColor: theme.background,
      height: '100%',
      flex: 1,
    },
    seperator: {
      backgroundColor: colorScheme === 'dark' ? 'papayawhip' : ' #000',
      height: 1,
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    footstyle: {
      marginVertical: 'auto',
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: 600,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : ' #000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddigRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    menuItemText: {
      color: theme.text,
    },
  });
}
export default Menu;
