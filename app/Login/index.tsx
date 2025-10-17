
import { handleLogin } from '@/api/handleLogin'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import Logo from '@/components/Logo/Logo'
import * as Google from "expo-auth-session/providers/google"
import { useRouter } from 'expo-router'
import * as WebBrowser from "expo-web-browser"
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './_styles'

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "418664020019-67knvnimmof0hegciqcd86nlshmi9f4f.apps.googleusercontent.com",
    iosClientId: "418664020019-usscgvobd77chi6j63dv7a5cp8nkfnel.apps.googleusercontent.com",
    androidClientId: "418664020019-7s8fj21ih4q6sadf2fkc5lk8js84m9h7.apps.googleusercontent.com",
  });
  const router = useRouter();

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Token Google:", authentication?.accessToken);
    }
  }, [response]);

  return (
    <Container>
      <Logo/>
      <Text style={styles.loginText}>Login</Text>

      <View style={styles.inputs}>
        <Input  placeholder='Digite seu email...' value={email} onChangeText={setEmail}/>
        <Input placeholder='Digite sua senha...' value={password} onChangeText={setPassword} secureTextEntry/>
      </View>

      <Button act={() => handleLogin(email,password)}>Login</Button>
      <TouchableOpacity style={{flexDirection: 'row', gap: 2, justifyContent: 'center', marginTop: 10}} onPress={() => router.push('/Register')}>
        <Text >Não possui uma conta?</Text>
        <Text style={{color: 'blue'}}>Cadastre-se</Text>
      </TouchableOpacity>
      {/* <Button act={() => promptAsync()}>Login com google</Button> */}
    </Container>
  )
}

export default Login