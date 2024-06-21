import { Text, View } from "react-native";

const MyText = function() {
  return (
    <View style={{
      paddingVertical: 50,
    }}>
      {/* Let's try to display Hello in different color */}
      <Text>
        <Text style={{color: 'lightgreen'}}>Hello</Text> World
      </Text>
    </View>
  );
}

export default MyText;