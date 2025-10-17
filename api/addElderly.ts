import axios from "axios";
import { baseUrl } from "./handleLogin";

export async function addElderly(name: string, age: number, gender: string) {
  try {
    const token = localStorage.getItem("token");
    const url = baseUrl + "/elderly/register";

    const { data } = await axios.post(
      url,
      { name, age, gender },
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
