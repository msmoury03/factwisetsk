import { createStore } from "redux";

import rootreducer from "./redux/reducer/rootreducer";



const store = createStore(rootreducer)

export default store;