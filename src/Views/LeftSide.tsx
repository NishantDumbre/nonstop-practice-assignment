import { Link } from "react-router-dom";
import CandidateList from "../Components/CandidateList";

export default function LeftSide() {
  return (
    <div className="h-full w-full overflow-y-auto">
      <Link to="/candidate/new">
        <button
          className="py-2 px-3 bg-white rounded-md mb-5 hover:bg-blue-100 active:bg-green-100"
          type="button"
        >
          Add new Candidate
        </button>
      </Link>
      <CandidateList />
    </div>
  );
}
