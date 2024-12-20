import API_CLIENT from "../../Apis/candidateApis";
import { CandidateReducerInitialState } from "../../Models/candidateReduxTypes";
import { Dispatch } from "redux";

const setAllCandidates = (candidates: CandidateReducerInitialState[]) => ({
  type: "GET_ALL_CANDIDATES",
  payload: candidates,
});


export const fetchAllCandidates = () => async (dispatch: Dispatch) => {
  try {
    const candidates = await API_CLIENT.get("/candidate");
    console.log(candidates);
    dispatch(setAllCandidates(candidates.data));
  } catch (error: any) {
    console.log(error.message);
  }
};
