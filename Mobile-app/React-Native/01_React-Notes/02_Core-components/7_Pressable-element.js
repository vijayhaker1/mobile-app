// What is Passable component?
/*
  The `Pressable` component is used to create components that respond to touch interactions, such as taps or presses on its children components like `Text`, `Image` or even the `View` component.

  The `Pressable` component is a block-level/wrapper element which means it do have closing tag.

  The `Pressable` component has several touch events just like we have click events in the web-development side.
  Like, `onPress` is work similar to `onClick`, `onPressIn` is work similar to `onMouseDown`, 'onPressOut', is work similar to `onMouseUp` and the `onLongPress` event we can use this as `onContextMenu (mouse right click)`
  
  However, there are subtle/serious differences in behavior between `onPress` and `onClick`. For example, `onPress` may have a delay before -
  firing to distinguish between a tap and a long press, whereas `onClick` typically fires immediately when a mouse click occurs.

  When should we use this `Pressable` component when we already have the native `Button` component?

  We can use this `Pressable` component to create our own custom button components that will support advanced touch events, because the native `Button` component is a simple and platform-specific component that only supports `onPress` event.
*/