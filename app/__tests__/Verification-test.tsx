import {render} from '@testing-library/react-native';
import Verification from '../src/screens/Verification';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Verification', () => {
  test('Verification component rendered properly', () => {
    const navigation = {navigate: jest.fn(), addListener: jest.fn()};
    const {getByRole, getByTestId, getAllByTestId} = render(
      <Verification navigation={navigation} />,
    );
    const clipboard = getByTestId('clipboard');
    const singleInputBox = getAllByTestId('singleInputBox');
    const inputField = getByTestId('inputField');
    const submitButton = getByRole('button');

    expect(clipboard).toBeDefined();
    expect(singleInputBox.length).toEqual(6);
    expect(inputField).toBeDefined();
    expect(submitButton).toBeDefined();
  });
});
