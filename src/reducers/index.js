import {
    reducer as formReducer,
} from 'redux-form';
import {
    combineReducers,
} from 'redux';
import ArtsReducer from './ArtsReducer';

const rootReducer = combineReducers({
    arts: ArtsReducer,
    form: formReducer,
});

export default rootReducer;