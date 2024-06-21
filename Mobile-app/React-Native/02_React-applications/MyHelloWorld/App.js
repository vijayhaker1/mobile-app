import React from 'react';
import { Text, View } from 'react-native';
import MyView from './components/1_LearingView';
import MyText from './components/2_LearningText';
import MyImage from './components/3_LearningImage';
import MyImageBackground from './components/4_ImageBackground';
import MyScrollableView from './components/5_LearningScrollView';
import MyButton from './components/6_LearningButton';
import MyPressable from './components/7_Pressable-exercise/1_LearningPressable';
import MyOnPressInCom from './components/7_Pressable-exercise/2_Pressable_onPressIn_exe';
import MyModal from './components/8_LearningModal';
import MyStatusBar from './components/9_LearningStatusBar';
import MyLoader from './components/10_LearningActivityIndicator';
import MyAlert from './components/11_LearningAlert';

const App = function() {
  return (
    <View style={{flex: 1}}>
      {/* Everything we've learn so far is in this `MyView` custom component */}
      {/* <MyView /> */}

      {/* Everything we've learn so far is in this `MyText` custom component */}
      {/* <MyText /> */}

      {/* Everything we've learn so far is in this `MyImage` custom component */}
      {/* <MyImage /> */}

      {/* Everything we've learn so far is in this `MyImageBackground` custom component */}
      {/* <MyImageBackground /> */}

      {/* Everything we've learn so far is in this `MyScrollableView` custom component */}
      {/* <MyScrollableView /> */}

      {/* Everything we've learn so far is in this `MyButton` custom component */}
      {/* <MyButton /> */}

      {/* Everything we've learn so far is in this `MyPressable` custom component */}
      {/* <MyPressable /> */}

      {/* Everything we've learn so far is in this `MyOnPressInCom` custom component */}
      {/* <MyOnPressInCom /> */}

      {/* Everything we've learn so far is in this `MyModal` custom component */}
      {/* <MyModal /> */}

      {/* Everything we've learn so far is in this `MyStatusBar` custom component */}
      {/* <MyStatusBar /> */}

      {/* Everything we've learn so far is in this `MyLoader` custom component */}
      {/* <MyLoader /> */}

      <MyAlert />
    </View>
  );
}


export default App;