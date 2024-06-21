import { useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

const MyLoader = function () {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetching = function () {
    // Just mimiking the server response.(:
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 50, gap: 16 }}>
      <Button title='Refresh' onPress={handleFetching} />

      <ActivityIndicator
        size='large'
        color='midnightblue'
        animating={isLoading}
      />
      
      {isLoading && (
        <Text style={{ fontSize: 22, fontWeight: 600 }}>Fetching data...</Text>
      )}
    </View>
  );
};

export default MyLoader;
