import * as React from "react";
import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Divider,
    Avatar,
    Typography,
  } from "@mui/material";
import { candidateListItemProps } from "../Models/candidateListItem";
import { Link } from "react-router-dom";

const CandidateListItem = ({id, image, name, degree, skills}: candidateListItemProps) => {
  return (
    <Link to={`/candidate/${id}`}>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="Image" src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {degree}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.secondary", display: "block" }}
                >
                  {skills}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Link>
  );
};

export default CandidateListItem;
