import { Text, View } from 'react-native';

const MyView = function() {
  return (
    <View style={{
      // By default just like div tag the `view` element also don't take any spaces by itself, there must either a child element inside of it or it should have a specified width, and it will take height automatically if we use flex-box

      // There is one more important thing to note that, when using `View` component inside a custom component it is necessary to define a specific `width` and `height` for the `View` component using `flex: 1` will not working, this flex property will only work if it is directly used in the App component's `View`

      width: '100%',
      height: '100%',
      
      // Remove below flex property if we are defining a specific width and the height, else it won't work.
      // For now I've just commantted out.
      // flex: 1,
      backgroundColor: 'plum',
    }}>
      {/* We cannot directly put any text or string content inside the view element. */}
      {/* Hello World */}
      
      <Text style={{ paddingVertical: 50 }}>Hello World</Text>

      {/* Nested View compoent */}
      <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}></View>
    </View>
  );
}

export default MyView;