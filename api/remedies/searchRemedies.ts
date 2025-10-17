import axios from "axios";
import { baseUrl } from "../handleLogin";

export async function searchRemedies() {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + "/remedies";

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    alert("Erro ao buscar idosos");
  }
}
