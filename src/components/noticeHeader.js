import React from "react";
import { Typography, Grid} from '@material-ui/core';

function noticeHeader () {
    return (
        <Grid container justify="center" alignItems="center">
        <Typography gutterBottom>
          A reminder to the players/gm: please do not do things to purposefully gain bingo sqaures.
      </Typography>
      <P/>
      <Typography gutterBottom>
          Also chat, please do not ask the players/gm to do things for bingo squares.
      </Typography>
      </Grid>

    )
}

export default noticeHeader;