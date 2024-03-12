import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [list, setList] = useState([
    { value: 'Item 1' }
  ]);
  const [otherList, setOtherList] = useState([
    {
      title: 'Title 1',
      data: ['Item 1 - 1']
    },
    {
      title: 'Title 2',
      data: ['Item 2 - 1', 'Item 2 - 2', 'Item 2 - 3']
    }
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, { value: `Item ${list.length + 1}` }]);
    setOtherList([...otherList, {
      title: `Title ${otherList.length + 1}`,
      data: [
        `Item ${otherList.length + 1} - 1`,
        `Item ${otherList.length + 1} - 2`,
      ]
    }])
    setRefreshing(false);
  }

  return (

    /* <ScrollView horizontal={false} refreshControl={
    <RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}
    />
  } style={{ ...styles.container, marginTop: Constants.statusBarHeight }}>
    {
      list.map((element, index) => {
        return (
          <View key={index} style={styles.element}>
            <Text style={styles.text}>{element.value}</Text>
          </View>
        )
      })
    }
    <StatusBar style='auto' />
  </ScrollView> */
    /* < FlatList
      keyExtractor={(item, index) => index.toString()}
      data={list}
      numColumns={5}
      style={{ ...styles.container, marginTop: Constants.statusBarHeight }}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
      renderItem={
        ({ item }) => (
          <View style={styles.element}>
            <Text style={styles.text}>{item.value}</Text>
          </View>
        )
      }
    /> */
    <SectionList
      style={{ ...styles.container, marginTop: Constants.statusBarHeight }}
      keyExtractor={(item, index) => index.toString()}
      sections={otherList}
      renderItem={({ item }) => (
        <View style={styles.semiElement}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.element}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  element: {
    backgroundColor: 'cyan',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  semiElement: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderTopWidth: 1
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10
  }
});
