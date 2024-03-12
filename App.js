import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ ...styles.container, marginTop: Constants.statusBarHeight }}>
      <View style={styles.view1}>
        <View style={styles.v1c1}>
          <Text>1</Text>
        </View>
        <View style={styles.v1c2}>
          <Text>2</Text>
        </View>
        <View style={styles.v1c3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.v2c1}>
          <Text>4</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.v3c1}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.v4c1}>
          <Text>6</Text>
        </View>
        <View style={styles.v4c2}>
          <Text>7</Text>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    justifyContent: 'flex-start'
  },
  view1: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  v1c1: {
    backgroundColor: 'cyan',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },

  v1c2: {
    backgroundColor: 'pink',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },

  v1c3: {
    backgroundColor: 'yellow',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  view2: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  view3: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  v2c1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  v3c1: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  view4: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8
  },
  v4c1: {
    backgroundColor: 'brown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  v4c2: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
