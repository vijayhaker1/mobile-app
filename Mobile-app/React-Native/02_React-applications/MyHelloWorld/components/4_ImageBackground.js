import { View, Text, ImageBackground } from "react-native";

const imgSrc = require('../assets/adaptive-icon.png');

const MyImageBackground = function() {
  return (
    <ImageBackground source={{ uri: 'https://assets.gadgets360cdn.com/img/crypto/dogecoin-og-logo.png' }} style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'plum', opacity: 0.7, paddingTop: 50}}>
        <Text style={{fontWeight: 600, fontSize: 35, textAlign: 'center', color: 'blue'}}>
          Hello Image text
        </Text>
      </View>
    </ImageBackground>
  );
}

export default MyImageBackground;