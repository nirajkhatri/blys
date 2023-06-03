import {ToastAndroid} from 'react-native';

export const Toast = (message: string) =>
  ToastAndroid.showWithGravityAndOffset(message, 500, ToastAndroid.TOP, 0, 100);
