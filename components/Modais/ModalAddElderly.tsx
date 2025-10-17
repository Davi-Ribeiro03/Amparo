import { addElderly } from "@/api/addElderly";
import { EditElderly } from "@/api/EditElderly";
import { useElderly } from "@/context/ElderlyContext";
import { COLORS } from "@/styles/constants";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalContainer from "../ModalContainer/ModalContainer";

const ModalAddElderly = () => {
  const {
    id,
    name,
    setName,
    age,
    setAge,
    gender,
    setGender,
    isEdit,
    setIsEdit,
    showElderlyModal,
    setShowElderlyModal,
  } = useElderly();

  const cleanFields = () => {
    setName("");
    setAge(0);
    setGender("");
    setIsEdit(false);
  };

  const renderButton = () => {
    if (isEdit) {
      return (
        <Button
          act={() => {
            EditElderly(id, name, age, gender);
            setShowElderlyModal(false);
            cleanFields();
          }}
        >
          Editar Remédio
        </Button>
      );
    }

    return (
      <Button
        act={() => {
          addElderly(name, age, gender);
          setShowElderlyModal(false);
          cleanFields();
        }}
      >
        Adicionar Remédio
      </Button>
    );
  };

  return (
    <ModalContainer show={showElderlyModal} setShow={setShowElderlyModal}>
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
          placeholder="Digite a idade..."
          value={age.toString()}
          onChangeText={(age) => setAge(parseInt(age))}
        />

        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={{ height: 50, width: "98%", outlineColor: COLORS.bluePrimary }}
        >
          <Picker.Item
            label="Selecione o gênero"
            value=""
            style={{ width: "80%" }}
          />
          <Picker.Item label="Masculino" value="M" style={{ width: "80%" }} />
          <Picker.Item label="Feminino" value="F" style={{ width: "80%" }} />
        </Picker>

        {renderButton()}
      </View>
    </ModalContainer>
  );
};

export default ModalAddElderly;
