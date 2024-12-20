import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { EducationListItemTypes } from "../Models/EducationListItemTypes";

const EducationListItem:React.FC<EducationListItemTypes> = ({institute, degree, percentage, pass_out_year}) => {
  return (
    <ListItem>
      <ListItemText primary={institute} secondary={
        <>
        <span>Degree: {degree}</span><br />
        <span>Percentage: {percentage}</span><br />
        <span>Passed out year: {pass_out_year}</span>
        </>} />
    </ListItem>
  );
};

export default EducationListItem;
