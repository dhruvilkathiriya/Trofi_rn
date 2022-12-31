import {ROUTE} from '@config/routes';
import {BOTTOM_TAB} from '@helpers/Dimensions';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers} from '@react-navigation/core';
import {ParamListBase, TabNavigationState} from '@react-navigation/routers';
import {getTRSymbolsAction} from '@store/action/transaction-action';
import {IconTypes} from '@typings/IconTypes';
import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import TrofiSelector from './TrofiSelector.';

interface bottomTabProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
}

export default React.memo(
  ({insets, state: {index, routes}, navigation}: bottomTabProps) => {
    const [trofi, setTrofi] = useState(false);
    const dispatch = useDispatch();
    return (
      <>
        <Box
          height={BOTTOM_TAB + insets.bottom}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          flexDirection="row"
          style={{paddingBottom: insets.bottom}}
          shadowColor="black"
          shadowOffset={{width: 1, height: 1}}
          shadowOpacity={0.2}
          shadowRadius={2}
          elevation={3}>
          {routes.map(({name, key}, i) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: key,
                  canPreventDefault: true,
                });
                if (index !== i && !event.defaultPrevented) {
                  if (name === 'Trofi') {
                    setTrofi(!trofi);
                    dispatch(getTRSymbolsAction());
                  } else {
                    setTrofi(false);
                    navigation.navigate(name);
                  }
                } else if (index === 2) {
                  setTrofi(!trofi);
                }
              }}>
              {name === ROUTE.TROFI ? (
                <Box
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                  paddingBottom="xxxl">
                  <Box width="100%" alignItems="center" justifyContent="center">
                    <TrofiSelector
                      visible={trofi}
                      marginBottom={BOTTOM_TAB - 5}
                      onPress={() => {
                        setTrofi(false);
                      }}
                    />
                    <IconBold
                      name={
                        `${name.toLowerCase().replace(' ', '')}` as IconTypes
                      }
                      height={name === ROUTE.TROFI ? 72 : 25}
                      width={name === ROUTE.TROFI ? 72 : 25}
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                  marginBottom={name === ROUTE.TROFI ? 'l' : undefined}>
                  <IconBold
                    name={
                      (index === i
                        ? name === ROUTE.TROFI
                          ? `${name.toLowerCase().replace(' ', '')}`
                          : `${name.toLowerCase().replace(' ', '')}Active`
                        : `${name.toLowerCase().replace(' ', '')}`) as IconTypes
                    }
                    height={name === ROUTE.TROFI ? 72 : 25}
                    width={name === ROUTE.TROFI ? 72 : 25}
                  />
                  {name !== ROUTE.TROFI && (
                    <Text
                      variant="label1"
                      color={index === i ? 'textPrimary' : 'textGray'}
                      letterSpacing={0.5}>
                      {name}
                    </Text>
                  )}
                </Box>
              )}
            </TouchableWithoutFeedback>
          ))}
        </Box>
      </>
    );
  },
);
