import React, { useState, useEffect, useCallback } from "react";
import { View, TextInput, Animated, Text, StyleSheet, TouchableOpacity } from "react-native";

interface AnimatedTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  showForgotPassword?: boolean; 
  error?: string;
  secureTextEntry?: boolean
}

const AnimatedTextInput: React.FC<AnimatedTextInputProps> = ({
  placeholder,
  value = "",
  onChangeText,
  showForgotPassword,
  error,
  secureTextEntry
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useState(new Animated.Value(value ? 1 : 0))[0];

  const startAnimation = useCallback(() => {
    Animated.timing(animatedIsFocused, {
      useNativeDriver: false,
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
    }).start();
  }, [animatedIsFocused, isFocused, value]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: "#aaa",
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>
        {placeholder}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, placeholder === "Password" && styles.passwordInput]}
        onBlur={onBlur}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
      />
      {placeholder === "Password" && showForgotPassword && (
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    marginVertical: 10,
    position: 'relative',
  },
  input: {
    height: 26,
    fontSize: 16,
    color: "#000",
  },
  passwordInput: {
    paddingRight: 100,
  },
  forgotPasswordContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 5,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    position: 'absolute',
    bottom: -18, // Position the error text below the input
  },
});

export default AnimatedTextInput;
