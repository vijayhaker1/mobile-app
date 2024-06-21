import { View, Image, Text, ScrollView } from 'react-native';

const imgSrc = require('../assets/adaptive-icon.png');

const MyScrollableView = function() {
  return (
    <View
      style={{
        width: '100%',
        // height: '100%',
        backgroundColor: 'plum',
        paddingTop: 40,
        paddingBottom: 2,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <ScrollView>
      {/* Wrapping entire view inside `ScrollView` component costs to overlapping the contents on the status-bar, to fix this issue we can nest this `ScrollView` component inside the `View` component. This way it can take entire available spaces from its parent component. */}
      <Image source={imgSrc} style={{ width: '100%', height: 300}}/>
      <Text style={{fontSize: 25, fontWeight: 600,}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed maxime esse eaque laborum optio doloremque, delectus accusantium mollitia neque placeat quo omnis earum officia tempore unde sapiente excepturi voluptates.
        Est voluptas excepturi autem, rem maiores quo laborum neque vel architecto delectus culpa velit sapiente corporis enim porro libero quas. Numquam, quod! Eos reprehenderit minus incidunt facilis inventore consequatur a!
        Veritatis aspernatur laudantium, neque consequatur expedita provident tenetur nisi, quas tempora pariatur dolore blanditiis. Veritatis eos cupiditate repellat placeat amet ratione, ipsam odio aliquid quae eaque quos nisi unde sed!
      </Text>
      <Image source={imgSrc} style={{ width: '100%', height: 300}}/>
      </ScrollView>
    </View>
  );
}

export default MyScrollableView;