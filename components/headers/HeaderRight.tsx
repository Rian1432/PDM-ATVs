import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useAuth from "@/firebase/hooks/useAuth";
import { THEME_COLORS } from "@/constants/GlobalStyles";

export default function HeaderRight() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <View>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error: any) {
            Alert.alert("Logout error", error.toString());
          }
        }}
      >
        <Text>Sair</Text>
        <Ionicons name="exit-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});