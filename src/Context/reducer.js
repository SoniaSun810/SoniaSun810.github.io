import {
    DISPLAY_COMPLETION,
    DISPLAY_COVERRLETTER,
} from './action';

import { initialState } from './appContext';

const reducer = (state, action) => {
    switch (action.type) {
        case DISPLAY_COVERRLETTER:
            return {
                ...state,
                displayCoverLetter: true,
                displayCompletion: false,
            };
        case DISPLAY_COMPLETION:
            return {
                ...state,
                displayCoverLetter: false,
                displayCompletion: true,
            };
        default:
            return state;
    }
}