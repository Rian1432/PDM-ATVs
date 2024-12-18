export enum THEME_COLORS {
    BASE_COLOR = '#272834',
    TEXT_COLOR = '#F4FAFF',
    GRAY_COLOR = '#B4BEC9',
    DARK_GRAY_COLOR = '#3D404B',
    PRIMARY_COLOR = '#197BD1',
    SECONDARY_COLOR = '#002333',
    ERROR_COLOR = '#e8593c',
}

export enum DEFAULT_SPACES {
    DEFAULT_PADDING = 20,
    DEFAULT_GAP = 5,
}

export enum THEME_FONTS {
    PAGE_TITLE_SIZE = 20,
}

import { StyleSheet } from "react-native";

const theme = {
  primaryColor: "darkblue",
  defaultRadius: 4,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  pageContainer: {
    flex: 1,
    padding: DEFAULT_SPACES.DEFAULT_PADDING,
    backgroundColor: THEME_COLORS.BASE_COLOR,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: THEME_COLORS.GRAY_COLOR,
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 4,
    borderColor: "darkblue",
    borderRadius: theme.defaultRadius,
    width: "100%",
    marginTop: 12,
  },
  button: {
    height: 32,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: THEME_COLORS.PRIMARY_COLOR,
    borderRadius: theme.defaultRadius,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default globalStyles;
