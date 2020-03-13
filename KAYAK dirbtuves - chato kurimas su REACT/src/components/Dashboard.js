import React from "react";
import Typography from "@material-ui/core/Typography";
import DashboardScore from "./DashboardScore";
import "./Dashboard.css";

export default function Dashboard({
  score = { likeCount: 0, dislikeCount: 0 }
}) {
  return (
    <div className="dashboard">
      <div className="dashboard__event-title">
        <Typography component="h2" variant="h4" align="center">
          MyLiveEvent
        </Typography>
      </div>
      <div className="dashboard__event-description">
        <Typography color="textSecondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <DashboardScore
        likes={score && score.likeCount}
        dislikes={score && score.dislikeCount}
      />
    </div>
  );
}
