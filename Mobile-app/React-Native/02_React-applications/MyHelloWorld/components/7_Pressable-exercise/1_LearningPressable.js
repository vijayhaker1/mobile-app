import { Pressable, View, Image, Text } from 'react-native';

const imgSrc = require('../../assets/adaptive-icon.png');

const MyPressable = function () {
  return (
    <Pressable
      style={{
        flex: 1,
      }}
      onPress={() => console.log('On Pressing of anywhere in the View')}
    >
      <View
        style={{
          backgroundColor: 'plum',
          paddingTop: 41,
          paddingEnd: 5,
          paddingHorizontal: 20,
        }}
      >
        <Pressable onPress={() => console.log('Image pressed')}>
          <Image source={imgsrc} style={{ width: '100%', height: 300 }} />
        </Pressable>

        <Pressable onPress={() => console.log('Text pressed')}>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iure harum omnis fuga, doloremque dolor consequatur sequi nisi iste,
            consequuntur vel ea officiis quibusdam quo! Unde officiis sint
            voluptas dolores! Illo, officia ex. Nulla cupiditate eos quisquam
            delectus reiciendis voluptatem vero enim quia, nihil perspiciatis
            eaque ut obcaecati ratione saepe necessitatibus est qui velit iste.
            Quaerat cumque a fuga et? Quis laboriosam fugiat, numquam ipsum,
            veritatis perspiciatis officiis voluptas ex explicabo obcaecati itaque
            quia earum aperiam quos quod sunt ut assumenda suscipit velit sed quae
            dolorem. Ipsum quae rem blanditiis. Laborum provident aliquid ad,
            earum, est nam, saepe neque qui eligendi ipsam explicabo! Cum eligendi
            iste iure possimus sequi vel praesentium earum omnis ea nemo dicta at
            ut, ex necessitatibus! Praesentium sapiente a eveniet quos, esse
            reprehenderit earum. Soluta est possimus ullam, odio exercitationem,
            facilis adipisci voluptates explicabo facere, suscipit consequuntur
            nemo dolor. Eos quas saepe ea dicta aliquam atque!
          </Text>
        </Pressable>

      </View>
    </Pressable>
  );
};

export default MyPressable;
