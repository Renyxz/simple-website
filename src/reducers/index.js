import { combineReducers } from 'redux';
import ContentReducer from './reducer_content';


const rootReducer = combineReducers({
    content: ContentReducer
});

export default rootReducer;