import { createContext, useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    // Registrar usuario en supabase
    const signUpUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if(data) {
            return data; //resolve
        } else {
            console.log(error)
            throw error; //reject
        }
    }

    // 
    const signInUser = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if(data) {
            console.log("data: ",data)
            return data; //resolve
        } else {
            console.log(error)
            throw error; //reject
        }
    }

    const closeSession = async () => {
        const { error } = await supabase.auth.signOut();
        // console.log(error);
        if(error){
            throw error; //reject
        }else{
            return "Cierre de sesión exitoso"
        }
    }

    useEffect(() => {
        //escuchar algún cambio en la sesión del usuario
        const { data : { subscription  }} = supabase.auth.onAuthStateChange((event, session) => {
            // console.log("onAuthStateChange", { event, session });
            // console.log(' Session: ', session.user.email),
            setUser(session);
            console.log("session: ", session)
            if (session) {
                setUserEmail(session.user.email)
            } else {
                setUserEmail(null)
            }
        })

        //lo que coloquemos en el return de un useEffect se ejecuta al destruirse el componente, ej, que se oculte, que se cambie de ruta que se cierre la pestaña
        return () => {
            subscription.unsubscribe();
        }
    }, [])

    return  <UserContext.Provider value={{ user, userEmail,  signUpUser, signInUser, closeSession }}>
                {children}
            </UserContext.Provider>
}

export {
  UserContext,
  UserContextProvider
}