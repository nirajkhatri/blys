import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import TextBox from './TextInput';
import COLOR from '../constants/COLOR';

interface SingleInputBoxProps {
  verification_code: string;
  index: number;
  isInputFocused: boolean;
  error: string;
  triggerValidation: () => void;
}

const SingleInputBox = ({
  verification_code,
  index,
  isInputFocused,
  error,
  triggerValidation,
}: SingleInputBoxProps) => {
  const emptyInput = '';
  const digit = verification_code[index] || emptyInput;
  const isCurrentValue = index === verification_code.length;
  const isLastValue = index === 6 - 1;
  const isCodeComplete = verification_code.length === 6;

  const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

  let isFocused: Object =
    isValueFocused && isInputFocused && error
      ? styles.validationErrorBox
      : isValueFocused && isInputFocused
      ? styles.focusedBox
      : styles.normalBox;

  useEffect(() => {
    if (!/^\d+$/.test(digit) && digit !== '') {
      triggerValidation();
    }
  }, [digit]);

  return (
    <View testID="singleInputBox" key={'dummy-' + index} style={isFocused}>
      <TextBox>{digit}</TextBox>
    </View>
  );
};

export default SingleInputBox;

const styles = StyleSheet.create({
  focusedBox: {
    borderWidth: 2,
    backgroundColor: COLOR.grey,
    borderColor: COLOR.primary,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalBox: {
    backgroundColor: COLOR.grey,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationErrorBox: {
    borderWidth: 2,
    borderColor: COLOR.error,
    backgroundColor: COLOR.grey,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
  },
});
