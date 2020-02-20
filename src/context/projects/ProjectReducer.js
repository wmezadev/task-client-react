import { PROJECT_FORM } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form : !state.form
            }
        default:
            return state;
    }
}