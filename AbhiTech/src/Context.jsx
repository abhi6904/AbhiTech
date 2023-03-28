// create a context(like awerehouse)
// provider(get data)
// consumer(provide to consmer) /usecontext
import React, {useEffect }from "react";
import { useReducer } from "react";
import { useContext } from "react";
import reducer from "./reducer"


const AppContext = React.createContext();

const API = "http://localhost:5000/users";

const initialState = {
    name: "",
    image: "",
    services: [],
};




const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Abhi Technical",
      image: "https://ouch-cdn2.icons8.com/Km4RGGsEmhal7eo6i5lDA4hYpIBm3CCjZ6z3aGXqNPQ/rs:fit:386:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTc4/LzY0OWQ3MzY3LWVk/ZDktNDM0MC04MGNk/LTAyZTFiMTM2MWVi/My5wbmc.png"
                }
            }
        )
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "Abhishek Yadav",
                    image: "https://img.freepik.com/premium-vector/freelancer-young-boy-sitting-chair-working-with-laptop-home-flat-illustration-vector_726768-18.jpg?w=2000"
                }
            }
        )
    }

        // to get the api data
        const getServices = async (url)=>{
            try{
                const res = await fetch(url);
                const data = await res.json();
                dispatch({type:"GET_SERVICES", payload: data});
            } catch (error) {
                console.log(error);
            }
        }
    
        //to call the api
        useEffect(() => {getServices(API);
        }, [])


    return <AppContext.Provider value={{ ...state,updateHomePage, updateAboutPage }}>
        {children}
    </AppContext.Provider>
}

// global custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

