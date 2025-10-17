import axios from "axios";
import { Alert } from "react-native";
import { baseUrl } from "./handleLogin";

export async function EditElderly(
  id: string,
  name: string,
  age: number,
  gender: string
) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + `/elderly`;

    await axios.put(
      url,
      { id, name, age, gender },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Alert.alert("Sucesso", "Idoso deletado com sucesso!");
  } catch (error) {
    alert("Erro ao buscar idosos");
  }
}
