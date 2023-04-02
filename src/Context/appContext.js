import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import axios from "axios";

import {
  DISPLAY_COVERRLETTER,
  DISPLAY_COMPLETION,
  SEND_PROMPT_BEGIN,
} from "./action";

const initialState = {
  isLoading: false,
  displayPrompt: true,
  displayCompletion: false,
  completion: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayCoverLetter = () => {
    dispatch({ type: DISPLAY_COVERRLETTER });
  };

  const displayCompletion = async (promptData) => {
    dispatch({ type: SEND_PROMPT_BEGIN })
    
    const DAVINCINLP_API = process.env.REACT_APP_DAVINCINLP_API;

    try {
      const { data } = await axios.post(`${DAVINCINLP_API}`, promptData);
      const { completion } = data;

      console.log(completion);
      dispatch({
        type: DISPLAY_COMPLETION,
        payload: completion,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayCoverLetter,
        displayCompletion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, useAppContext, AppProvider };
