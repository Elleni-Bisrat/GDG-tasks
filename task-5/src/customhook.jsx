import { useState, useEffect, useCallback, useReducer } from "react";

const char_limit = 200;

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TEXT":
            return action.payload.length <= char_limit ? action.payload : state;
        case "RESET":
            return "";
        default:
            return state;
    }
};

const useCharacterCount = () => {
    const [text, dispatch] = useReducer(reducer, "");
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        setCharCount(text.length);
    }, [text]);

    const updateText = useCallback((newText) => {
        dispatch({ type: "UPDATE_TEXT", payload: newText });
    }, []);

    const resetText = useCallback(() => {
        dispatch({ type: "RESET" });
    }, []);

    return { text, charCount, updateText, resetText, char_limit };
};

export default useCharacterCount;