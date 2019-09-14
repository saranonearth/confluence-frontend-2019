import {combineReducers} from 'redux'
import { gallery,  IsFetchingGallery } from './gallery'
import { events, isFetchingEvents } from './events'
import auth from './user'

const rootReducer = combineReducers(
    gallery,
    events,
    isFetchingEvents,
    IsFetchingGallery,
    auth
)

export default rootReducer
