import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  verb: "",
  declensionObject: {},
  displayPresent: false,
  displayActiveVoice: false,
  displayIndicativeMood: false,
  error: true,
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case "setVerb": {
      return {
        ...state,
        verb: action.verbInput,
      };
    }
    case "setDeclensionObject": {
      return {
        ...state,
        declensioObject: action.declensionObject,
      };
    }
    case "displayPresent": {
      return {
        ...state,
        displayPresent: action.displayPresent,
      };
    }
    case "displayImperfect": {
      return {
        ...state,
        displayImperfect: action.displayImperfect,
      };
    }
    case "displayFuture": {
      return {
        ...state,
        displayFuture: action.displayFuture,
      };
    }
    case "displayAorist": {
      return {
        ...state,
        displayAorist: action.displayAorist,
      };
    }
    case "displayPerfect": {
      return {
        ...state,
        displayPerfect: action.displayPerfect,
      };
    }
    case "displayPluperfect": {
      return {
        ...state,
        displayPluperfect: action.displayPluperfect,
      };
    }
    case "displayActiveVoice": {
      return {
        ...state,
        displayActiveVoice: action.displayActiveVoice,
      };
    }
    case "displayMiddleVoice": {
      return {
        ...state,
        displayMiddleVoice: action.displayMiddleVoice,
      };
    }
    case "displayPassiveVoice": {
      return {
        ...state,
        displayPassiveVoice: action.displayPassiveVoice,
      };
    }
    case "displayIndicativeMood": {
      return {
        ...state,
        displayIndicativeMood: action.displayIndicativeMood,
      };
    }
    case "displaySubjunctiveMood": {
      return {
        ...state,
        displaySubjunctiveMood: action.displaySubjunctiveMood,
      };
    }
    case "displayOptativeMood": {
      return {
        ...state,
        displayOptativeMood: action.displayOptativeMood,
      };
    }
    case "displayImperativeMood": {
      return {
        ...state,
        displayImperativeMood: action.displayImperativeMood,
      };
    }
    case "isTenseChecked": {
      return {
        ...state,
        isTenseChecked: action.isTenseChecked,
      };
    }
    case "isVoiceChecked": {
      return {
        ...state,
        isVoiceChecked: action.isVoiceChecked,
      };
    }
    case "isMoodChecked": {
      return {
        ...state,
        isMoodChecked: action.isMoodChecked,
      };
    }
    case "isErrorTrue": {
      return {
        ...state,
        isErrorTrue: action.isErrorTrue,
      };
    }
    default: {
    }
  }
};

const StateContext = createContext();

export const StateContextProvider = (props) => {
  const [universalState, universalStateDispatch] = useReducer(
    stateReducer,
    initialState
  );

  return (
    <StateContext.Provider value={[universalState, universalStateDispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
