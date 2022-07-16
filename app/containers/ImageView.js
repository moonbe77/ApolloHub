import React from 'react'
import { Text, View, Image } from 'react-native'

const ImageView = props => {
  console.log('ImageView props', props)
  const { title, body, image } = props.route.params
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  )
}

export default ImageView
