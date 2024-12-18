import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

import globalStyles from "../../constants/GlobalStyles";

type StyledButtonProps = {
  title: string;
} & TouchableHighlightProps;

export default function StyledButton({ title, ...props }: StyledButtonProps) {
  return (
    <TouchableHighlight {...props} style={[globalStyles.button, props.style]} disabled={props.disabled}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}
