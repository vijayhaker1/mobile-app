import { Alert, Button, Pressable, Text, View } from 'react-native';

const MyAlert = function () {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 50, gap: 16 }}>
      {/* Pressable component with `Alert` API prompt with custom title */}
      <Pressable
        style={{
          padding: 10,
          borderRadius: 8,
          borderWidth: 1.5,
          borderColor: '#ccc',
          backgroundColor: 'midnightblue',
        }}
        onPressIn={() => {
          // By default the `Alert` API component has one button with text message `OK`
          Alert.alert('Are you sure?');
        }}
      >
        <Text
          style={{
            color: '#fff',
          }}
        >
          Delete
        </Text>
      </Pressable>

      {/* Alert component with title and custom messaage */}
      <Button
        title='Select from Dialogue'
        onPress={() => Alert.alert('Select option', 'Nothing found to select')}
      />

      {/* Alert component with title custom messaage and button[] list */}
      <Button
        title='Select Something'
        onPress={() =>
          Alert.alert('Select option', 'Nothing found to select', [
            {
              text: 'Cancel',
              onPress: () => {
                console.log('Cancel clicked!');
              },
            },
            {
              text: 'Okay',
              onPress: () => {
                console.log('Okay clicked!');
              },
            },
          ])
        }
      />
    </View>
  );
};

export default MyAlert;
