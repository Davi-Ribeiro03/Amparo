import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

interface InputProps extends React.ComponentProps<typeof TextInput> {
  bgColor?: string;
}

const Input = (props:InputProps) => {
  return (
    <TextInput 
        style={{...styles.input, backgroundColor: props.bgColor || "#FFF"}}
        {...props}
    />
  )
}

export default Input