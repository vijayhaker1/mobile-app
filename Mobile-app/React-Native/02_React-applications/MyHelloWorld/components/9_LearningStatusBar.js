import { useState } from 'react';
import { View, StatusBar, Button } from 'react-native';

const MyStatusBar = function() {
  const [hideStaus, setHideStaus] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 50 }}>
      <StatusBar
        // The backgroundColor prop effects can only been seen in the Android plaform not in iOS.
        // This prop specific to android.
        backgroundColor={'white'}

        // We can only set icons color in the status bar which are already pre-define in the barStyle props, those are `default`, which will automatically picks the color based on the platform, and `light-content`, and `dark-content`.
        barStyle='dark-content'
        
        // This prop will hide the status bar and it accepts a boolean value, it will be helpful when making some sort of `video player` app. we can toggle the hidden with the help of a state variable.
        hidden={hideStaus}
      />

      <Button
        title={
          hideStaus ? 'Show status bar' : 'Hide status bar'
        }
        color='midnightblue'
        onPress={() => setHideStaus(!hideStaus)}
      />
    </View>
  );
}

export default MyStatusBar;