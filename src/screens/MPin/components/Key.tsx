import {WIDTH} from '@helpers/Dimensions';
import {IconBold} from '@utils/iconRegular';
import {Text, TouchableBox} from '@utils/Theme';
import React from 'react';

interface keyProps {
  onTyp: (number: string) => void;
  number: string;
  i: number;
}

export default ({number, i, onTyp}: keyProps) => (
  <TouchableBox
    width={WIDTH / 3}
    height={55}
    alignItems="center"
    justifyContent="center"
    borderBottomWidth={0.5}
    borderLeftWidth={i % 3 !== 0 ? 0.5 : 0}
    borderColor="gray1"
    onPress={() => onTyp(number)}>
    {number === 'X' ? (
      <IconBold name="backSpace" size={22} />
    ) : (
      <Text variant="title1" fontSize={number === 'Forgot?' ? 18 : 25}>
        {number}
      </Text>
    )}
  </TouchableBox>
);
