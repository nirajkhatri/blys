import {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import useVerify from '../hook/useVerify';
import VerificationInput from '../components/VerificationInput';
import SingleInputBox from '../components/SingleInputBox';
import TextBox from '../components/TextInput';
import Clipboard from '@react-native-clipboard/clipboard';

const Verification = ({navigation}: {navigation: any}) => {
  const inputBoxes = new Array(6).fill(0);

  const {mutate} = useVerify(navigation);

  const [verificationCode, setVerificationCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const inputRef = useRef<TextInput>();

  useEffect(() => {
    const unSubscribeNavigation = navigation.addListener('focus', () => {
      setVerificationCode('');
    });
    return unSubscribeNavigation;
  }, [navigation]);

  const handleSubmitOtp = async () => {
    if (verificationCode && verificationCode.length == 6)
      return mutate(verificationCode);

    setError('Enter valid verification code');
    setIsInputFocused(true);
    inputRef?.current?.focus();
  };

  const handleSelectInput = () => {
    setIsInputFocused(true);
    inputRef?.current?.focus();
  };

  const handleBlur = () => setIsInputFocused(false);

  const triggerValidation = () => {
    setVerificationCode(prev => verificationCode.substring(0, prev.length - 1));
    setError('Only numbers are allowed');
  };

  const fetchClipBoardText = async () => {
    const text = await Clipboard.getString();

    if (text == '') return setError('No data on clipboard');
    if (text.length != 6) return setError('Invalid data on clipboard');
    let newOtp = '';
    for (let i = 0; i < text.length; i++) {
      if (!/^\d+$/.test(text[i])) {
        newOtp = '';
        break;
      }
      newOtp += text[i];
    }
    if (newOtp.length != 6) return setError('Invalid data on clipboard');

    setVerificationCode(newOtp);
    setError('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          setError('');
        }}
        style={styles.wrapper}>
        <View testID="clipboard" style={styles.clipboardWrapper}>
          <TouchableOpacity onPress={() => Clipboard.setString('123456')}>
            <TextBox style={{fontSize: 14}}>
              Click here to copy 123456 to Clipboard
            </TextBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Clipboard.setString('123AB6')}>
            <TextBox style={{fontSize: 14}}>
              Click here to copy 123AB6 to Clipboard
            </TextBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Clipboard.setString('184767')}>
            <TextBox style={{fontSize: 14}}>
              Click here to copy 184767 to Clipboard
            </TextBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchClipBoardText}>
            <TextBox style={{fontSize: 14}}> Paste clipboard text</TextBox>
          </TouchableOpacity>
        </View>

        <TextBox>Veification code</TextBox>
        <Pressable onPress={handleSelectInput} style={styles.singleBoxWrapper}>
          {inputBoxes.map((el, index) => (
            <SingleInputBox
              key={index}
              verification_code={verificationCode}
              index={index}
              isInputFocused={isInputFocused}
              error={error}
              triggerValidation={triggerValidation}
            />
          ))}
        </Pressable>
        <TextBox style={{marginBottom: 20}} variant="error">
          {error}
        </TextBox>
        <VerificationInput
          ref={inputRef}
          value={verificationCode}
          onSubmitEditing={handleSubmitOtp}
          onChangeText={text => {
            setError('');
            setVerificationCode(text);
          }}
          onBlur={handleBlur}
        />
        <Button onPress={handleSubmitOtp} btnText={'Submit'} />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleBoxWrapper: {flexDirection: 'row', gap: 5, marginVertical: 20},
  clipboardWrapper: {
    marginVertical: 20,
    alignItems: 'center',
    gap: 10,
  },
});
