import {WEB_ROUTE} from '@config/serviceConstants';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import {Linking, TouchableWithoutFeedback} from 'react-native';

interface policyProps {
  error: string;
  active: boolean;
  onChange: () => void;
}

export default ({error, active, onChange}: policyProps) => (
  <>
    <Box paddingVertical="s" flexDirection="row" alignItems="flex-start">
      <TouchableBox paddingRight="m" paddingBottom="m" onPress={onChange}>
        <Box
          height={18}
          width={18}
          backgroundColor="gray1"
          borderRadius="s"
          overflow="hidden"
          marginRight="s">
          {active ? (
            <IconBold name="tickbox" size={18} />
          ) : (
            <Box
              flexDirection="row"
              alignItems="center"
              padding="l"
              borderWidth={1}
              borderColor="secondary"
              borderRadius="s"
              overflow="hidden"
              shadowColor="gray2"
              shadowRadius={3}
              shadowOpacity={0.6}
              shadowOffset={{height: 0.5, width: 0}}
              elevation={5}
            />
          )}
        </Box>
      </TouchableBox>
      <Text variant="content3" paddingRight="xxl">
        I have read and accepted{' '}
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL(`${WEB_ROUTE}terms-of-service`)}>
          <Text color="blue1">Terms of Service</Text>
        </TouchableWithoutFeedback>{' '}
        and{' '}
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL(`${WEB_ROUTE}privacy-policy`)}>
          <Text color="blue1">Privacy Policy</Text>
        </TouchableWithoutFeedback>
      </Text>
    </Box>
    <Text variant="input1" color="red" marginLeft="s" marginTop="-">
      {error}
    </Text>
  </>
);
