import { CandidateReducerInitialState } from "../../Models/candidateReduxTypes";

const initialState = {
  candidates: [] as CandidateReducerInitialState[] | [],
};

export const candidateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ALL_CANDIDATES":
      return {
        ...state,
        candidates: action.payload,
      };

    case "ADD_CANDIDATE":
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
      };

    default:
        return state
  }
};
