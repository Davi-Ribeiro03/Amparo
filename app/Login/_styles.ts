import { COLORS, FONT_SIZES } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginText: {
    fontSize: FONT_SIZES.large,
    color: COLORS.gray,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    marginBottom: 20,
  },
});
