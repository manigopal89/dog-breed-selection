import { combineReducers } from 'redux';

import { reducer as dog } from './dog/reducer'
import { reducer as breed } from './breed/reducer'

export const rootReducer = combineReducers({
    dog,
    breed
})