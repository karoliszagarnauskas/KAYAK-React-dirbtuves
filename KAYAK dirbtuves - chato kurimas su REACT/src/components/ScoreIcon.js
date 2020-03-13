import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export default function ScoreIcon({ score }) {
  if (!score) {
    return null;
  }
  return (
    <Avatar
      variant="rounded"
      style={{ backgroundColor: score > 0 ? "#a5d6a7" : "#ef9a9a" }}
    >
      {score > 0 ? <ThumbUpIcon /> : <ThumbDownIcon />}
    </Avatar>
  );
}
