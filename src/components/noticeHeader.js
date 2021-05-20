import React from "react";
import { Typography, Grid} from '@material-ui/core';

function noticeheader () {
    return (
        <Grid container justify="center" alignItems="center">
        <Typography variant='h1' gutterBottom>
          A reminder to the players/gm: please do not do things to purposefully gain bingo sqaures.
      </Typography>
      </Grid>

    )
}

export default noticeHeader;