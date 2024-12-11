import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { DEFAULT_SPACES } from "../../constants/GlobalStyles";

type ScrollableProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_SPACES.DEFAULT_PADDING,
    gap: DEFAULT_SPACES.DEFAULT_GAP * 2,
  },
});