import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import COLOR from '../constants/COLOR';

interface TextBoxProps {
  children: string | React.ReactNode;
  variant?: string;
  style?: TextStyle;
}

const getStyle = (variant?: string) => {
  switch (variant) {
    case 'error':
      return {fontSize: 16, color: COLOR.error};
    case 'white':
      return {fontSize: 18, color: COLOR.white};
    case 'success':
      return {fontSize: 20, color: COLOR.success};
    default:
      return {fontSize: 20, color: COLOR.black};
  }
};

const TextBox = ({children, variant, style}: TextBoxProps) => {
  return <Text style={[getStyle(variant), style]}>{children}</Text>;
};

export default TextBox;
