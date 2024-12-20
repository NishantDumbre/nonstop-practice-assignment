import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { SkillListItemType } from "../Models/SkillListItemTypes";

const SkillsListItem:React.FC<SkillListItemType> = ({ name, experience }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={`Experience: ${experience}`} />
    </ListItem>
  );
};

export default SkillsListItem;
