import { COLORS, FONT_SIZES } from "@/styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.bluePrimary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 30,
    height: 60,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
  },
});
