import React from 'react'
import { Stack } from 'expo-router'

import { THEME_COLORS } from '@/constants/GlobalStyles';
import HeaderRight from '@/components/headers/HeaderRight';

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME_COLORS.DARK_GRAY_COLOR,
        },
        headerTintColor: THEME_COLORS.TEXT_COLOR,
        headerTitleStyle: {
          color: THEME_COLORS.TEXT_COLOR,
        },
        headerRight: () => <HeaderRight />,
      }}
    />
  );
}
