import { Button, View } from "react-native";

const MyButton = function() {
  const handleTouch = function(e) {
    console.log(e);
    alert('You touched me!');
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        paddingTop: 40,
        paddingBottom: 2,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <Button onPress={handleTouch} title="Click me" color={'midnightblue'} />
    </View>
  );
}

export default MyButton;