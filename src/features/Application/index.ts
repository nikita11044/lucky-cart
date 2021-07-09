import * as appSelectors from './selectors'
import {slice as appSlice} from "./application-reducer";

const appReducer = appSlice.reducer

const appActions = {
    ...appSlice.actions
}

export {
    appReducer,
    appActions,
    appSelectors
}