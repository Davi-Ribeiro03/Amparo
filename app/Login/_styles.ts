import { COLORS, FONT_SIZES } from "@/styles/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginText: {
    fontSize: FONT_SIZES.large,
    color: COLORS.gray,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    marginBottom: 20,
  },
  inputs: {
    flexDirection: "column",
    gap: 20,
    width: "90%",
    marginHorizontal: "auto",
  },
});

export default styles;
