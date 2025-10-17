import React, { createContext, useContext, useState } from "react"

type ElderlyContext = {
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    age: number,
    setAge: React.Dispatch<React.SetStateAction<number>>,
    gender: string,
    setGender: React.Dispatch<React.SetStateAction<string>>,
    isEdit: boolean,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    showElderlyModal: boolean,
    setShowElderlyModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const ElderlyContext = createContext<ElderlyContext | undefined>(undefined)

export const ElderlyProvider = ({children}: {children:React.ReactNode}) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [showElderlyModal, setShowElderlyModal] = useState(false)


    return <ElderlyContext.Provider value={{id, setId, name, setName,age,setAge,gender, setGender, isEdit, setIsEdit, showElderlyModal, setShowElderlyModal}} >
        {children}
    </ElderlyContext.Provider>
}

export const useElderly = () => {
    const context = useContext(ElderlyContext);

    if(!context){
        throw new Error('useElderly deve ser usado dentro de um ElderlyProvider');
    }

    return context
}