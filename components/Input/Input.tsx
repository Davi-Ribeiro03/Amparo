import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

interface InputProps extends React.ComponentProps<typeof TextInput> {
}

const Input = (props:InputProps) => {
  return (
    <TextInput 
        style={styles.input}
        {...props}
    />
  )
}

export default Input