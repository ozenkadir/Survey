import React, { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextType {
  userName: string;
  total: number;
  timeTaken: number;
  currentQuestionIndex: number; // Eklenen kısım
  updateUserName: (name: string) => void;
  updateTotal: (score: number) => void;
  updateTimeTaken: (time: number) => void;
  updateCurrentQuestionIndex: (index: number) => void; // Eklenen kısım

}

const UserContext = createContext<UserContextType>({
  userName: '',
  total: 0,
  timeTaken: 0,
  currentQuestionIndex: 0,
  updateUserName: () => {},
  updateTotal: () => {},
  updateTimeTaken: () => {},
  updateCurrentQuestionIndex: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userName, setUserName] = useState('');
  const [total, setTotal] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Eklenen kısım


  const updateUserName = (name: string) => {
    setUserName(name);
  };

  const updateTotal = (newScore: number) => {
    setTotal(newScore);
  };

  const updateTimeTaken = (time: number) => {
    setTimeTaken(time);
  };

  const updateCurrentQuestionIndex = (index: number) => { // Eklenen kısım
    setCurrentQuestionIndex(index);
  };

  

  return (
    <UserContext.Provider
      value={{
        userName,
        total,
        timeTaken,
        currentQuestionIndex, // Eklenen kısım
        updateUserName,
        updateTotal,
        updateTimeTaken,
        updateCurrentQuestionIndex // Eklenen kısım
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
