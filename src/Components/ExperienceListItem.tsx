import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { CandidateExperience } from "../Models/candidateReduxTypes";

const ExperienceListItem: React.FC<CandidateExperience> = ({
  company,
  project,
  role,
  team_size,
  duration_from,
  duration_to,
}) => {
  return (
    <ListItem>
      <ListItemText primary={company} secondary={
        <>
        <span>Role: {role}</span><br />
        <span>Project: {project}</span><br />
        <span>Team Size: {team_size}</span><br />
        <span>From: {duration_from}</span><br />
        <span>To: {duration_to}</span>
        </>
      } />
      <ListItemText />
    </ListItem>
  );
};

export default ExperienceListItem;
