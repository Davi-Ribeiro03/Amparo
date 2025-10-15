import axios from "axios";
import { router } from "expo-router";
import { baseUrl } from "./handleLogin";

export async function handleRegister(
  email: string,
  password: string,
  name: string
) {
  if (email === "" || password === "" || name === "") {
    alert("Preencha todos os campos");
    return;
  }
  try {
    const url = baseUrl + "/auth/register";

    const { data } = await axios.post(url, { name, email, password });

    localStorage.setItem("token", data.token);

    alert("Cadastro realizado com sucesso");

    router.replace("/Login");
  } catch (error) {
    alert("Erro ao fazer login");
  }
}
