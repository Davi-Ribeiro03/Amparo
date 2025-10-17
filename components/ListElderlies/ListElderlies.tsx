import { handleDelete } from "@/api/DeleteElderly";
import { useElderly } from "@/context/ElderlyContext";
import { Elderly } from "@/interfaces/Elderly";
import { COLORS } from "@/styles/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ListElderlies = ({ elderlies }: { elderlies: Elderly[] }) => {
  const {setName, setAge, setGender, setIsEdit, setShowElderlyModal, setId} = useElderly();


  const handleEdit = (elderly: Elderly) => {
    setId(elderly.id);
    setName(elderly.name);
    setAge(elderly.age);
    setGender(elderly.gender);
    setIsEdit(true);
    setShowElderlyModal(true);
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "80%",
        marginHorizontal: "auto",
      }}
    >
      
      {elderlies?.map((elderly) => (
        <>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.lightBlue,
                borderRadius: "100%",
              }}
            >
              <Image source={require("../../assets/images/addElderly.png")} />
            </View>
            <Text
              style={{ fontSize: 16, color: COLORS.gray, fontWeight: "bold" }}
            >
              {elderly.name}
            </Text>
          </View>
          <View
            style={{ height: 1, backgroundColor: "#E5E5E5", width: "80%" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FF6969",
                width: "40%",
                padding: 5,
                borderRadius: 5,
                alignItems: "center",
              }}
              onPress={() => handleDelete(elderly.id)}
            >
              <Text style={{ fontWeight: "bold" }}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.bluePrimary,
                width: "40%",
                padding: 5,
                borderRadius: 5,
                alignItems: "center",
              }}
              onPress={() => handleEdit(elderly)}
            >
              <Text style={{ fontWeight: "bold" }}>Alterar</Text>
            </TouchableOpacity>
          </View>
        </>
      ))}
    </View>
  );
};

export default ListElderlies;
