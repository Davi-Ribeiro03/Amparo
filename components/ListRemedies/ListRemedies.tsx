import { DeleteRemedy } from "@/api/remedies/DeleteRemedy";
import { searchRemedies } from "@/api/remedies/searchRemedies";
import { useRemedy } from "@/context/RemediesContext";
import { Remedy } from "@/interfaces/Remedy";
import { COLORS } from "@/styles/constants";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ListRemedies = () => {
  const [remedies, setRemedies] = useState<Remedy[]>([]);
  const [loading, setLoading] = useState(true);
  const { setId, setDosage, setName, setType, setIsEdit, setShowRemedyModal } =
    useRemedy();

  useEffect(() => {
    searchRemedies().then((data: Remedy[]) => {
      setLoading(false);
      setRemedies(data);
    });
  }, []);

  if (loading) {
    <ActivityIndicator size="large" color={COLORS.bluePrimary} />;
  }

  const handleEdit = (remedy: Remedy) => {
    setId(remedy.id);
    setName(remedy.name);
    setDosage(remedy.dosage);
    setType(remedy.type);
    setIsEdit(true);
    setShowRemedyModal(true);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        borderRadius: 10,
        width: "80%",
        marginHorizontal: "auto",
      }}
    >
      {remedies?.map((remedy: Remedy) => (
        <>
          <View
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 5 }}
          >
            <Image source={require("../../assets/images/remedy.png")} />
            <View>
              <Text
                style={{ fontSize: 16, color: COLORS.gray, fontWeight: "bold" }}
              >
                {remedy.name}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image source={require("../../assets/images/time.png")} />
                <Text>08:00</Text>
              </View>
            </View>
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
              onPress={() => DeleteRemedy(remedy.id)}
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
              onPress={() => handleEdit(remedy)}
            >
              <Text style={{ fontWeight: "bold" }}>Alterar</Text>
            </TouchableOpacity>
          </View>
        </>
      ))}
    </View>
  );
};

export default ListRemedies;
