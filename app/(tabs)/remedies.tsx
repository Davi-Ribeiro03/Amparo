import Button from "@/components/Button/Button";
import ListRemedies from "@/components/ListRemedies/ListRemedies";
import ModalAddRemedy from "@/components/Modais/ModalAddRemedy";
import { useRemedy } from "@/context/RemediesContext";
import { COLORS } from "@/styles/constants";
import React from "react";
import { Text, View } from "react-native";

const Remedies = () => {
  const { showRemedyModal, setShowRemedyModal } = useRemedy();

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: COLORS.gray,
          marginVertical: 40,
          marginHorizontal: "auto",
        }}
      >
        Remedies de hoje
      </Text>

      <ListRemedies />

      <Button act={() => setShowRemedyModal(true)}>Adicionar Remédio</Button>

      <ModalAddRemedy
        show={showRemedyModal}
        setShowModal={setShowRemedyModal}
      />
    </View>
  );
};

export default Remedies;
