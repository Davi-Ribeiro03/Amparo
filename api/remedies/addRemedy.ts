import axios from "axios";
import { baseUrl } from "../handleLogin";

export async function addRemedy(
  name: string,
  dosage: string,
  type: string,
  elderlyId: string = "e270417e-7454-4204-80b5-b3cff269dfb9"
) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + "/remedies/register";

    const { data } = await axios.post(
      url,
      { name, dosage, type, elderlyId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    alert("Erro ao buscar idosos");
  }
}
