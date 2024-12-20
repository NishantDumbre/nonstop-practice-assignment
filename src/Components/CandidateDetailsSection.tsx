import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../Redux/store/store";
import { candidateListItemProps } from "../Models/candidateListItem";
import CandidateDetails from "./CandidateDetails";

const CandidateDetailsSection = () => {
  const { id } = useParams<{ id: string }>();
  const candidateList = useSelector(
    (store: RootState) => store.candidates.candidates
  );
  const filteredCandidate = candidateList.filter(
    (item: candidateListItemProps) => item.id === id
  );
  
  if(!filteredCandidate.length){
    return <h1>Loading</h1>
  }
  
  return <CandidateDetails candidate = {filteredCandidate[0]} />
};

export default CandidateDetailsSection;
