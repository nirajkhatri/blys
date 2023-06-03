import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextInput';

const Success = ({navigation}: {navigation: any}) => {
  return (
    <View testID="success-wrapper" style={styles.wrapper}>
      <TextBox variant="success">Verification Success</TextBox>
      <Button onPress={() => navigation.goBack()} btnText={'Go Back'} />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
