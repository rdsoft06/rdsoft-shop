import { LOCALE_CHANGE } from './localeActionTypes';


const initialState = 'en';

export default function localeReducer(state = initialState, action) {
    if (action.type === LOCALE_CHANGE) {
        return action.locale;
    }

    return state;
}
