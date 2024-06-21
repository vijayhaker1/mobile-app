import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import tw from 'tailwind-rn';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate input fields
    if (!username || !password) {
      Alert.alert('Error', 'Please enter username and password');
      return;
    }

    // Perform login logic here
    // For demonstration purposes, just logging the values
    Alert.alert(`Welcome ${username}`);
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear input fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <View style={tw`flex flex-1 justify-center items-center`}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
