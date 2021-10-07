import React,{useState,useEffect,useContext} from'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
export const AuthContext= React.createContext();

export const AuthProvider =({Children}) => {
    const [user,setUser]=  useState(null);

    return(
        <AuthContext.Provider
        value={{

            user,
            setUser,
            login: async(email,password) => {
                try{
                   await auth().signInWithEmailAndPassword(email,password);
                } catch (e){
                console.log(e);
            }
        },
        register: async(email,password)=>{
            try{
                await auth().createUserWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e);
            }
        },
        logout:async()=>{
            try{
                await auth().signOut();
            }catch(e){
                console.log(e);
            }
        },
    }}
        
        >
            {Children}
        </AuthContext.Provider>
    );
}