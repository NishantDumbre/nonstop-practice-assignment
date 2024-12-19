import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../Redux/store/store";
import { candidateListItemProps } from "../Models/candidateListItem";

const CandidateDetailsSection = () => {
  const { id } = useParams<{ id: string }>();
  const candidateList = useSelector(
    (store: RootState) => store.candidates.candidates
  );
  const filteredCandidate = candidateList.filter(
    (item: candidateListItemProps) => item.id === id
  );
  const candidate = filteredCandidate[0]

  return <div>{candidate && candidate.name}</div>;
};

export default CandidateDetailsSection;
