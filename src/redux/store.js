import { createStore } from "redux";

import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// store bao gồm các reducer và các middleware(redux thunk,redux saga,...)
