import axios from "axios";
import { Alert } from "react-native";
import { baseUrl } from "../handleLogin";

export async function DeleteRemedy(id: string) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + `/remedies/${id}`;

    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Alert.alert("Sucesso", "Idoso deletado com sucesso!");
  } catch (error) {
    alert("Erro ao buscar idosos");
  }
}
