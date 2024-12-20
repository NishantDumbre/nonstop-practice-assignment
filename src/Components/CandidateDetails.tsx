import {
  Avatar,
  Typography,
  Card,
  CardContent,
  CardHeader,
  List,
} from "@mui/material";
import { CandidateDetailsProps } from "../Models/candidateDetailsTypes";
import SkillsListItem from "./SkillsListItem";
import ExperienceListItem from "./ExperienceListItem";
import EducationListItem from "./EducationListItem";

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
  console.log(skills);
  console.log(Array.isArray(experience));
  console.log(education);

  // return <UserProfile />

  return (
    <div className="h-full overflow-y-auto">
      <Card className="w-full mx-auto flex flex-col justify-center items-left p-5 mb-5">
        <CardHeader title={<Avatar alt={name} src={profile_picture} />} />
        <Typography variant="h5" className="mt-5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle2" className="mt-5" gutterBottom>
          Address: {address}
        </Typography>
        <Typography variant="subtitle2" className="mt-5" gutterBottom>
          Phone: {phone}
        </Typography>
        <Typography variant="subtitle2" className="mt-5" gutterBottom>
          Email: {email}
        </Typography>
        <Typography variant="subtitle2" className="mt-5" gutterBottom>
          Gender: {gender}
        </Typography>
      </Card>
      <Card className="mb-5">
        <CardHeader title="Skills" />
        <List>
          {skills &&
            skills.map((skill, index) => (
              <SkillsListItem
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            ))}
        </List>
      </Card>
      <Card className="mb-5">
        <CardHeader title="Experience" />
        <List>
          {experience &&
            experience.map((exp, index) => (
              <ExperienceListItem
                key={index}
                company={exp.company}
                project={exp.project}
                role={exp.role}
                team_size={exp.team_size}
                from={exp.duration_from}
                to={exp.duration_to}
              />
            ))}
        </List>
      </Card>
      <Card className="mb-5">
        <CardHeader title="Education" />
        <List>
          {education &&
            education.map((edu, index) => (
              <EducationListItem
                key={index}
                institute={edu.institute}
                degree={edu.degree}
                percentage={edu.percentage}
                pass_out_year={edu.passout_year}
              />
            ))}
        </List>
      </Card>
    </div>
  );
};

export default CandidateDetails;
