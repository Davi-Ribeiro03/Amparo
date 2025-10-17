import axios from "axios";
import { Alert } from "react-native";
import { baseUrl } from "../handleLogin";

export async function EditRemedy(
  id: string,
  name: string,
  dosage: string,
  type: string,
  elderlyId: string = "e270417e-7454-4204-80b5-b3cff269dfb9"
) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + `/remedies`;

    await axios.put(
      url,
      { id, name, dosage, type, elderlyId },
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
