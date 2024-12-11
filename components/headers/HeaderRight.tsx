import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import useAuth from "@/firebase/hooks/useAuth";
import StyledButton from "../shared/StyledButton";

export default function HeaderRight() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <View>
      <StyledButton
        onPress={async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error: any) {
            Alert.alert("Logout error", error.toString());
          }
        }}
        title={"Logout"}
        style={{ width: "auto", marginLeft: 12 }}
      />
    </View>
  );
}
