import {fireEvent, render, screen} from '@testing-library/react-native';

import Button from '../src/components/Button';

describe('Button Component', () => {
  test('Button component rendered properly', () => {
    const onPress = jest.fn();
    const {getByRole} = render(<Button onPress={onPress} btnText="TEST" />);
    expect(getByRole('button')).toBeDefined();
    expect(screen.getByText('TEST')).toBeDefined();

    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
