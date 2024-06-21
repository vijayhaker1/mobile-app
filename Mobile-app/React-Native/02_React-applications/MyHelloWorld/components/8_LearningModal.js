import { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';

const MyModal = function () {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 50,
      }}
    >
      <Button
        title='Open Modal'
        onPress={() => setOpen(!open)}
        color='midnightblue'
      />

      <Modal
        // This prop accepts a boolen value to control the visibility of the modal component.
        visible={open}

        // This callback prop is recommended when making a `Model` because it let the user to close the modal when they press back button from their devices.
        onRequestClose={() => setOpen(false)}

        // By default the `animationType` prop is set to `none`, but there is two prop: `fade`, `slide`.
        // `slide` animation opens the modal from bottom to top.
        // `fade` animation opens the modal fadein.
        animationType='slide'

        // The presentationStyle prop is only work in iOS devices, this prop define how the modal should be presented on the screen, by default it set to `fullscreen`
        presentationStyle='fullScreen'
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightblue',
            paddingHorizontal: 20,
            paddingTop: 10,
            gap: 8
          }}
        >
          <Text style={{fontSize: 20}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            explicabo debitis id voluptas adipisci quis ad sapiente quia
            laudantium a provident, unde expedita? Itaque laborum blanditiis
            quisquam provident minima ratione. Repellat, nulla blanditiis sed
            consequatur iure cum alias, tenetur rerum in nobis quasi animi. Quam
            nihil, a officia nobis, repellendus quibusdam omnis ducimus
            veritatis quisquam enim fugit rem reiciendis porro.
          </Text>
          
          <Button
            title='Close Modal'
            onPress={() => setOpen(!open)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;
