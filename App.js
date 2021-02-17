import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//Counter
/*function MyComponent({ title, onIncrement }) {
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
}*/

//Conditional
/*const Card = ({ loading, error, title }) => {
  let content
  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  }
  else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
  }
  else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }
  return <View style={{ padding: 24 }}>{content}</View>
}

export default function App() {
  return (
    <View>
      <Card error={true} />
      <Card loading={true} />
      <Card loading={false} title="Title" />
    </View>
  )
}*/

//useState hook
export default function App() {
  const [text, setText] = useState('')
  return (
    <View>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Typehere..."
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {'\n'}You entered: {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
