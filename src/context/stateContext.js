import { createContext } from 'react'
import { useReducer } from 'react';

export const stateReducer = (state, action) => {
    switch (action.type) {
        case "setVerb": {
            return {
                ...state,
                verb: action.verbInput
            }
        }
        case "B": {}
        default: {}
    }
}

const StateContext = createContext()

export const StateContextProvider = (props) => {
    
  const [universalState, universalStateDispatch] = useReducer(stateReducer, '')

  return (
    <StateContext.Provider value={[universalState, universalStateDispatch]}>
        {props.children}
    </StateContext.Provider>
  )
}

export default StateContext