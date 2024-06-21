// What is View component in React-Native?
/*
  A `View` component in RN is similar to `div` element which means it is like a block level element which can contain other elements/tags in itself.

  A `View` component is a small rectangular shape element on the mobile screen that can use to display text, images, or respond to user input.

  Now what we mean by `View` is a rectangular element?
  It simply means when we use `View` it takes the entire availabel space on the mobile screen and, usually a mobile screen is in rectangular shape.
  
  In Android app development `Views` are written either in Kotlin or Java.
  In iOS app development `Views` are written either in Swift or Objective-C.

  In React-Native this process of making views become simpler we can create these views using JavaScript through React components.

  At runtime, React-Native generates the corresponding Android and iSO views for these components.

  React-Native offers a collection of essential pre-build components known as `Core Components`, which are readily/easily available for building our app's user interface.
*/


// Here are React-Native's `Core Components` and its equivalent Components in Android, iOS and Web
/*
  ---------------------------------------------------------------------------------------
  React-Native           |         Android     |    iOS        |   Web Analog   |
  ---------------------------------------------------------------------------------------
  <View> </View>                  <ViewGroup>   <UIViewGroup>     A non-scrolling <div>

  <Text> </Text>                  <TextView>    <UIVTextView>     <p> </p>

  <Image /> & <BackgroundImage>   <ImageView>   <UIImageView>     <img />
  
  <ScrollView> </ScrollView>      <ScollView>   <UIScollView>     <div>

  <TextInput />                   <EditText>    <UIEditText>      <input type="text" />
  ----------------------------------------------------------------------------------------
*/