import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ScoreIcon from "./ScoreIcon";

import "./FeedbackList.css";

export default function FeedbackList({ feedbackList = [] }) {
  return (
    <List>
      {feedbackList.map(feedback => {
        return (
          <ListItem key={feedback.key}>
            <ListItemAvatar>
              <ScoreIcon score={feedback.score} />
            </ListItemAvatar>
            <ListItemText
              primary="Vardas"
              secondary="informacinis tekstas"
              primary={feedback.name}
              secondary={
                <>
                  {" "}
                  {feedback.datetime} / {feedback.text}
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
