import { Image, View } from "react-native";

// We have to import the image file into a variable to store its reference in the memory, because our source attribute of Image element only accepts number, and the require function stores reference by create a object
const imgSrc = require('../assets/adaptive-icon.png');
const MyImage  = function() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'plum'}}>
      {/* Just like in <img /> tag we had `src` attribute to pass image location similarly in react-native Image component we have `source` attribute for that */}

      {/* We cannot directly pass image path for static files we have to import it first. */}
      <Image
        source={imgSrc}
        // When using local static image file it is not necessary to define width and height, since react-native's Image element will automatically infers the diamensions from the file data.
        style={{width: 300, height: 300}}
      />

      {/* To display external image file we have to pass the image `uri` in an object */}
      {/* When using external image url it is important to specify the width and the height of the image, else it won't work */}
      <Image
        source={{ uri: 'https://assets.gadgets360cdn.com/img/crypto/dogecoin-og-logo.png' }}
        style={{width: 300, height: 300}}
      />
    </View>
  );
}

export default MyImage;