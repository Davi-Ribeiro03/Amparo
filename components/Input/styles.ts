import { COLORS, FONT_SIZES } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 10,
    height: 60,
    width: "100%",
    fontSize: FONT_SIZES.small,
    outlineColor: COLORS.bluePrimary,
  },
});
