import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef} from 'react';

interface VerificationInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur: () => void;
}

const VerificationInput = forwardRef(function VerificationInput(
  {
    value,
    onChangeText,
    onSubmitEditing = () => {},
    onBlur = () => {},
  }: VerificationInputProps,
  ref,
) {
  return (
    <TextInput
      testID="inputField"
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      style={styles.textInputStyle}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
      maxLength={6}
    />
  );
});

export default VerificationInput;

const styles = StyleSheet.create({
  textInputStyle: {
    opacity: 0,
    position: 'absolute',
  },
});
