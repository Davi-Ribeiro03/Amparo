import { addRemedy } from "@/api/remedies/addRemedy";
import { EditRemedy } from "@/api/remedies/EditRemedy";
import { useRemedy } from "@/context/RemediesContext";
import { COLORS } from "@/styles/constants";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalContainer from "../ModalContainer/ModalContainer";

const ModalAddRemedy = ({
  show,
  setShowModal,
}: {
  show: boolean;
  setShowModal: Function;
}) => {
  const { id, name, setName, dosage, setDosage, type, setType, isEdit } =
    useRemedy();

  const renderButton = () => {
    if (isEdit) {
      return (
        <Button
          act={() => {
            EditRemedy(id, name, dosage, type);
            setShowModal(false);
          }}
        >
          Editar Remédio
        </Button>
      );
    }

    return (
      <Button
        act={() => {
          addRemedy(name, dosage, type);
          setShowModal(false);
        }}
      >
        Adicionar Remédio
      </Button>
    );
  };
  return (
    <ModalContainer show={show} setShow={setShowModal}>
      <View
        style={{
          width: 300,
          height: 400,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.gray,
          }}
        >
          Cadastrar idoso
        </Text>

        <Input
          bgColor={COLORS.inputGray}
          placeholder="Digite o nome..."
          value={name}
          onChangeText={setName}
        />
        <Input
          bgColor={COLORS.inputGray}
          placeholder="Digite a dosagem"
          value={dosage}
          onChangeText={setDosage}
        />

        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={{ height: 50, width: "98%", outlineColor: COLORS.bluePrimary }}
        >
          <Picker.Item
            label="Selecione o gênero"
            value=""
            style={{ width: "80%" }}
          />
          <Picker.Item label="Unidade" value="U" style={{ width: "80%" }} />
          <Picker.Item label="Miligramas" value="MG" style={{ width: "80%" }} />
        </Picker>

        {renderButton()}
      </View>
    </ModalContainer>
  );
};

export default ModalAddRemedy;
