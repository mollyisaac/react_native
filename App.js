import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function MyComponent({ title, onIncrement }) {
  return <Button title={title} onPress={onIncrement} />
}



export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <MyComponent
      title={`Click here to increment: ${count}`}
      onIncrement={() => setCount(count + 1)}

    />
  )
}

/*export default function App() {
  return (

    <Text>
      Counter
    </Text>

    /*<View>

      <MyComponent title="Press Me" color="#1ACDA5" />
      <MyComponent title="No, press me!" color="rgb(59, 108, 212)" />
    </View>
    // <View style={styles.container}>
    // <Text>Hey there!</Text>
    //<StatusBar style="auto" />
    //</View>
  )
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
