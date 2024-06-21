// What is Image component?
/*
  The Image component is use to display any sort of images on the screen, including: Static images, network images and the images from the local disk, such as the camera roll.

  React-Native seamlessly translates the `Image` component to platform-specific counterparts such as:
  <UIImageView> for iOS, <ImageView> for Android-OS and <img /> tag for the web.

  For starters let's render a staick image file on the screen.

  The Image's element attribute `source` is only accepts reference of the image not the actually path string.
  
  Everything in javascript is object based such functions arrays objects. and in javascript object stores in memory addresses.

  How we can set an image as background image?.
  To set an image as background react-native offers `ImageBackground` component to do that it has same source attribute to give image file path. don't pass path `url` or `uri`as string pass an reference.

  Keep in mind one more thing that `BackgroundImage` is a block level element which means it can hold other elements inside of it. Or in other words elements nesting is possible with `BackgroundImage` component.

  We have 2 different custom components for demonstrating `Image` and `BackgroundImage` components.

  After finishing the basics of React-Native with expo-app learn how to use expo `'expo-image-picker'` and `'expo-permissions'` to render local images from the device CameraRoll basically learn about the `CameraRoll` expo API.
*/