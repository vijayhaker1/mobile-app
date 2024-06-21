import { ScrollView, View, Text, Image, Pressable } from 'react-native';

const imgSrc = require('../../assets/adaptive-icon.png');

const MyOnPressInCom = function() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        paddingHorizontal: 20,
        paddingTop: 41,
        paddingEnd: 16,
      }}
    >
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Pressable onPressOut={() => console.log('Run immediatly when finger released from the component')}>
          <Image
            source={imgSrc}
            style={{
              width: '100%',
              height: 300
            }}
          />
        </Pressable>

        <Pressable onPressIn={() => console.log('Run immediatly when pressed happens')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              lineHeight: 28 // This would only take values in px not in `rem` or `em` and don't need to pass `px` as suffix. else will not work and throw error.
            }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quam ipsum vero libero? Nihil rem magnam consequatur libero tenetur veritatis deleniti vitae aliquid amet nisi aut earum, eius, harum quam?
            Officia natus dolorum ipsa aperiam saepe aspernatur aliquid, laudantium molestias veniam ab! Quas, repellendus exercitationem! Porro voluptas consectetur veniam nam illo libero iste nihil? Eaque distinctio sunt voluptate hic consequuntur.
            Exercitationem aperiam, vitae voluptate quo voluptas facilis facere officiis voluptatibus explicabo, quis maiores, saepe iure et delectus quibusdam ea. Est quibusdam beatae quas, facilis praesentium sapiente cumque! Commodi, ut sunt?
            Quibusdam aut nisi suscipit, ducimus modi corporis error quo molestias vel vitae odio nesciunt possimus voluptas eos porro minima at quis, ex recusandae molestiae numquam. Commodi, sunt. Laborum, expedita tempore!
            Deleniti neque reiciendis earum autem at facilis, nulla vitae inventore corrupti dolor fuga perspiciatis quasi nam eaque temporibus culpa esse voluptates non optio distinctio exercitationem assumenda amet. Et, ullam nulla!
          </Text>
        </Pressable>

        <Pressable onLongPress={() => console.log('Run after 5 miliseconds')}>
          <Image
            source={imgSrc}
            style={{
              width: '100%',
              height: 300
            }}
          />
        </Pressable>

      </ScrollView>
    </View>
  );
}

export default MyOnPressInCom;