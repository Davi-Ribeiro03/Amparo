
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import Logo from '@/components/Logo/Logo'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { styles } from './_styles'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Container>
      <Logo/>
      <Text style={styles.loginText}>Login</Text>
      <Input  placeholder='Digite seu email...' value={email} onChangeText={setEmail}/>
      <Input placeholder='Digite sua senha...' value={password} onChangeText={setPassword} secureTextEntry/>

      <Button act={() => alert('Funcionalidade em desenvolvimento!')}>Login</Button>
    </Container>
  )
}

export default Login