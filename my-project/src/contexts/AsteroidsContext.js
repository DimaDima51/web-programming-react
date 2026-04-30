import { createContext, useReducer } from "react";

export const AsteroidContext = createContext(null);

const initialState = {
    asteroids: [],
    destroyment: []
};

function reducer(state, action) {
    switch (action.type) {

        case "SET_ASTEROIDS":
            return {
                ...state,
                asteroids: action.payload
            };

        case "ADD_DESTROYMENT":
            return {
                ...state,
                destroyment: [...state.destroyment, action.payload]
            };

        default:
            return state;
    }
}

export const AsteroidProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(reducer, initialState);

    return (
        <AsteroidContext.Provider value={{ appState, dispatch }}>
            {children}
        </AsteroidContext.Provider>
    );
};