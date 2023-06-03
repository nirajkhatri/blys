import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import COLOR from '../constants/COLOR';
import TextBox from './TextInput';

interface ButtonProps {
  onPress: () => void;
  btnText: string;
}

const Button = ({onPress, btnText}: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={styles.btnStyle}>
      <TextBox variant="white">{btnText}</TextBox>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLOR.primary,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
});
