import { List } from "@mui/material";
import { AppDispatch, RootState } from "../Redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCandidates } from "../Redux/actions/candidateActions";
import { useEffect } from "react";
import { CandidateReducerInitialState } from "../Models/candidateReduxTypes";
import CandidateListItem from "./CandidateListItem";

const CandidateList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const candidates = useSelector((store:RootState)=>store.candidates.candidates) as CandidateReducerInitialState[]

  useEffect(() => {
    dispatch(fetchAllCandidates());
  }, [dispatch]);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {candidates.length > 0 && candidates.map((item)=>{
        const degree = item.education[item.education.length-1].degree
        const skillNames = item.skills.map((skill)=>skill.name).join(", ")
        return(
          <CandidateListItem key={item.id} id={item.id} image={item.profile_picture} name={item.name} degree={degree} skills={skillNames} />
        )
      })}
    </List>
  );
};

export default CandidateList;
