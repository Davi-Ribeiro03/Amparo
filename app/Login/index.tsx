
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import Logo from '@/components/Logo/Logo'
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { styles } from './_styles'

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "418664020019-67knvnimmof0hegciqcd86nlshmi9f4f.apps.googleusercontent.com",
    iosClientId: "418664020019-usscgvobd77chi6j63dv7a5cp8nkfnel.apps.googleusercontent.com",
    androidClientId: "418664020019-7s8fj21ih4q6sadf2fkc5lk8js84m9h7.apps.googleusercontent.com",
  });

  useEffect(() => {
    console.log(response);
    console.log(request);
    
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Token Google:", authentication?.accessToken);
    }
  }, [response]);


  return (
    <Container>
      <Logo/>
      <Text style={styles.loginText}>Login</Text>
      <Input  placeholder='Digite seu email...' value={email} onChangeText={setEmail}/>
      <Input placeholder='Digite sua senha...' value={password} onChangeText={setPassword} secureTextEntry/>

      <Button act={() => alert('Funcionalidade em desenvolvimento!')}>Login</Button>
      <Button act={() => promptAsync()}>Login com google</Button>
    </Container>
  )
}

export default Login