import axios from "axios";
import { router } from "expo-router";

export const baseUrl = "http://localhost:8080";

export async function handleLogin(email: string, password: string) {
  if (email === "" || password === "") {
    alert("Preencha todos os campos");
    return;
  }
  try {
    const url = baseUrl + "/auth/login";

    const { data } = await axios.post(url, { email, password });

    localStorage.setItem("token", data.token);

    alert("Login realizado com sucesso");

    router.replace("/(tabs)/Home");
  } catch (error) {
    alert("Erro ao fazer login");
  }
}
