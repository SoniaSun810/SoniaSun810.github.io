import React, {useReducer, useContex} from "react";
import {reducer, initialState} from "./reducer";
import axios from "axios";

import {DISPLAY_COVERRLETTER,
    DISPLAY_COMPLETION,} from "./action";

const initialState = {
    coverLetter: false,
    completion: false,
}

const AppContext = React.createContext();
const apiKey = process.env.OPENAI_API_KEY;

// Axios
const client = axios.create({
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const displayCoverLetter = () => {
        dispatch({type: DISPLAY_COVERRLETTER});
    };

    const displayCompletion = (prompt) => {
        const params = {
            prompt: prompt,
            model: "gpt-3.5-turbo",
            max_tokens: 300,
            temperature: 0.9,
        }

        client.post("https://api.openai.com/v1/chat/completions", params)
        .then((res) => {
            console.log(res.data.choices[0].text);
        }).catch((err) => {
            console.log(err);
        });
        dispatch({type: DISPLAY_COMPLETION});
    };

    return (
        <AppContext.Provider value={{
            ...state,
            displayCoverLetter,
            displayCompletion,
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, initialState,  AppProvider, useGlobalContext};
