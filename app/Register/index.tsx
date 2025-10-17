import { handleRegister } from '@/api/handleRegister'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import Logo from '@/components/Logo/Logo'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './_styles'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const router = useRouter();

  return (
    <Container>
      <Logo/>
      <Text style={styles.RegisterText}>Cadastro</Text>

      <View style={styles.inputs}>

      <Input  placeholder='Digite seu nome...' value={name} onChangeText={setName}/>
      <Input  placeholder='Digite seu email...' value={email} onChangeText={setEmail}/>
      <Input placeholder='Digite sua senha...' value={password} onChangeText={setPassword} secureTextEntry/>
      <Input placeholder='Digite sua senha novamente...' value={repeatPassword} onChangeText={setRepeatPassword} secureTextEntry/>
      </View>

      <Button act={() => handleRegister(name,email,password)}>Cadastrar</Button>
      <TouchableOpacity style={{flexDirection: 'row', gap: 2, justifyContent: 'center', marginTop: 10}} onPress={() => router.push('/Login')}>
        <Text >Já possui uma conta?</Text>
        <Text style={{color: 'blue'}}>Fazer Login</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Register