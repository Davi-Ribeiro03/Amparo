import axios from "axios";
import { Alert } from "react-native";
import { baseUrl } from "./handleLogin";

export async function handleDelete(id: string) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + `/elderly/${id}`;

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
