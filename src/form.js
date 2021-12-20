import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import React, { useState } from 'react'


function FormPage() {
  const [url, setUrl] = useState('broker.hivemq.com')
  const [password, setPassword] = useState('')
  const [ml, setMl] = useState('')
  const [wait, setWait] = useState(false)

  //wait Button
  const Button = () => {
    if (wait) {
      return (
        <Button
          icon={
            <Icon
              name="send"
              size={15}
              color="white"
            />
          }
          title="  Feed"
          loading
        />
      )
    }
    else {
      return (
        <Button
          icon={
            <Icon
              name="send"
              size={15}
              color="white"
            />
          }
          title="  Feed"

        />)
    }
  }
  return (
    <View style={{
      alignItems: 'center'
    }}>
      <Image
        style={{
          marginTop: 5,
          width: 150,
          height: 150,
          borderRadius: 100
        }}
        source={{ uri: 'data:image/png;base64,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' }}
      />
      <View style={{
        marginTop: 20,

      }}>
        <Input
          value={password}
          placeholder='Password'
          leftIcon={{ type: 'ionicon', name: 'key-outline' }}
          style={{
            padding: 10,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}
          onChangeText={e => setPassword(e)}

        />
        <Input
          value={url}
          placeholder='URL'
          leftIcon={{ type: 'ionicon', name: 'globe-outline' }}
          style={{
            padding: 10,
            fontStyle: 'italic',
            fontWeight: 'bold',

          }}
          onChangeText={e => setUrl(e)}
        /><Input
          value={ml}
          placeholder='ปริมาณ (กรัม)'
          leftIcon={{ type: 'ionicon', name: 'cafe-outline' }}
          style={{
            padding: 10,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}
          onChangeText={e => setMl(e)}
        />
      </View>
      {Button()}

    </View>
  )
}
export default FormPage
