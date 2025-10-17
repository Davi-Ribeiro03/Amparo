import axios from "axios";
import { baseUrl } from "./handleLogin";

export async function searchElderlies() {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + "/elderly";

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
