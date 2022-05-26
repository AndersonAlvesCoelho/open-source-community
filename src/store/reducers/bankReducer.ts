import { ActionType } from "../constants/index";
import { Action } from "../action/types";

interface InitialState {
  loading: boolean;
  count: number;
  message: string;
}

const initialState = {
  loading: false,
  count: 0,
  message: "",
};

export default function bankReducer(
  state: InitialState = initialState,
  action: Action
): InitialState {

  switch (action.type) {
    case ActionType.DEPOSIT:
      return { ...state, loading: true, count: state.count + action.payload };
    case ActionType.WITHDRAW:
      return { ...state, loading: true, count: state.count - action.payload };
    case ActionType.BANKRUPT:
      return { ...state, loading: true, count: 0 };
    default:
      return state;
  }
}
