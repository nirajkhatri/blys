import {fireEvent, render, screen} from '@testing-library/react-native';
import Success from '../src/screens/Success';

describe('Success Component', () => {
  test('Success component rendered properly', () => {
    const navigation = {goBack: () => {}};

    const {getByTestId, getByRole} = render(
      <Success navigation={navigation} />,
    );
    expect(getByTestId('success-wrapper')).toBeDefined();
    expect(screen.getByText('Verification Success')).toBeDefined();
    expect(getByRole('button')).toBeDefined();
  });
});
