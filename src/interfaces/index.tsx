import { Action } from "redux";

export interface ProductProps {
  name: string;
  image: string;
}

export interface cartReducerAction extends Action {
  type: string;
  payload?: any;
}
