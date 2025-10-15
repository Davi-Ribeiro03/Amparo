import { COLORS, FONT_SIZES } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  text: {
    fontSize: FONT_SIZES.xlarge,
    color: COLORS.bluePrimary,
    fontWeight: "bold",
  },
});
