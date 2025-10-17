import { searchElderlies } from "@/api/searchElderlies";
import CardAddElderly from "@/components/CardAddElderly/CardAddElderly";
import ListElderlies from "@/components/ListElderlies/ListElderlies";
import ModalAddElderly from "@/components/Modais/ModalAddElderly";
import { useElderly } from "@/context/ElderlyContext";
import { Elderly } from "@/interfaces/Elderly";
import { COLORS } from "@/styles/constants";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const [elderlies, setElderlies] = useState<Elderly[]>([]);
  const [loading, setLoading] = useState(true);
  const { setShowElderlyModal } = useElderly();

  useEffect(() => {
    searchElderlies().then((data: Elderly[]) => {
      setLoading(false);
      setElderlies(data);
    });
  }, []);

  if (loading) {
    <ActivityIndicator size="large" color={COLORS.bluePrimary} />;
  }

  return (
    <View>
      <Text>profile</Text>

      <ModalAddElderly />

      <TouchableOpacity onPress={() => setShowElderlyModal(true)}>
        <CardAddElderly />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: COLORS.gray,
          marginVertical: 40,
          marginHorizontal: "auto",
        }}
      >
        Pacientes cadastrados
      </Text>

      <ListElderlies elderlies={elderlies} />
    </View>
  );
};

export default Profile;
