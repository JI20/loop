import { createContext, useState, useContext, useMemo } from "react";
// Useful Resource: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

const authContext = createContext<{
  userName: string;
  userAge: number;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserAge: React.Dispatch<React.SetStateAction<number>>;
}>({
  userName: "admin",
  userAge: 0,
  setUserName: () => {},
  setUserAge: () => {},
});

const AuthProvider = ({ children }: any): JSX.Element => {
  const [userName, setUserName] = useState<string>("Jonas");
  const [userAge, setUserAge] = useState<number>(20);

  /** Performance optimisation:
   * Prevents unnecessary rerenders of child components
   * if ViewportProivder is forced to rerender by a parent component,
   * but neither width nor height change */
  const contextValue = useMemo(
    () => ({
      userName,
      userAge,
      setUserName,
      setUserAge,
    }),
    [userName, userAge, setUserName, setUserAge]
  );

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

const useAuth = (): {
  userName: string;
  userAge: number;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserAge: React.Dispatch<React.SetStateAction<number>>;
} => {
  const context: {
    userName: string;
    userAge: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setUserAge: React.Dispatch<React.SetStateAction<number>>;
  } = useContext<{
    userName: string;
    userAge: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setUserAge: React.Dispatch<React.SetStateAction<number>>;
  }>(authContext);
  if (!context) {
    throw new Error(`useAuth must be used inside a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
