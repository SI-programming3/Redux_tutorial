import { combineReducers } from "redux";
import todos from "./todo_re";

const todoApp = combineReducers({ todos });

export default todoApp;
