import {
    DISPLAY_COMPLETION,
    DISPLAY_COVERRLETTER,
    SEND_PROMPT_BEGIN
} from './action';

const reducer = (state, action) => {
    switch (action.type) {
        case DISPLAY_COVERRLETTER:
            return {
                ...state,
                isLoading: false,
                displayPrompt: true,
                displayCompletion: false,
                completion: "",
            };
        case DISPLAY_COMPLETION:
            return {
                ...state,
                isLoading: false,
                displayPrompt: false,
                displayCompletion: true,
                completion: action.payload,
            };
        case SEND_PROMPT_BEGIN:
            return{
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}

export default reducer;