import {updateLogoutPrompt} from '@store/action/app-action';
import {Box} from '@utils/Theme';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Key from './Key';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

interface keyboardProps {
  forgot?: boolean;
  onTyp: (number: string) => void;
  onBack: () => void;
}

export default ({forgot, onTyp, onBack}: keyboardProps) => {
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  return (
    <Box
      width="100%"
      style={{marginBottom: bottom}}
      flexDirection="row"
      alignItems="center"
      flexWrap="wrap"
      backgroundColor="secondary"
      borderTopRightRadius="l"
      borderTopLeftRadius="l">
      {numbers.map((number, i) => (
        <Key {...{number, i, onTyp}} key={i.toString()} />
      ))}
      <Key
        number={forgot ? 'Forgot?' : ''}
        i={0}
        onTyp={() => {
          if (forgot) {
            dispatch(updateLogoutPrompt(true, 'Forgot'));
          }
        }}
      />
      <Key number="0" i={1} onTyp={onTyp} />
      <Key number="X" i={2} onTyp={onBack} />
    </Box>
  );
};
