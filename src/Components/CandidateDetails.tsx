import { CandidateDetailsProps } from "../Models/candidateDetailsTypes";

const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate }) => {
    const {
        name,
        address,
        phone,
        email,
        gender,
        hobbies,
        education,
        skills,
        experience,
        profile_picture,
      } = candidate;

  return(
    <div>
        
    </div>
  );
};

export default CandidateDetails;
