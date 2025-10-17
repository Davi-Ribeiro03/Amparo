import React, { createContext, useContext, useState } from "react";

type RemedyContext = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  dosage: string;
  setDosage: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  showRemedyModal: boolean;
  setShowRemedyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RemedyContext = createContext<RemedyContext | undefined>(undefined);

export const RemedyProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [showRemedyModal, setShowRemedyModal] = useState(false);

  return (
    <RemedyContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        dosage,
        setDosage,
        type,
        setType,
        isEdit,
        setIsEdit,
        showRemedyModal,
        setShowRemedyModal,
      }}
    >
      {children}
    </RemedyContext.Provider>
  );
};

export const useRemedy = () => {
  const context = useContext(RemedyContext);

  if (!context) {
    throw new Error("useElderly deve ser usado dentro de um ElderlyProvider");
  }

  return context;
};
