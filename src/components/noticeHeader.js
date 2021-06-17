import React from "react";
import { Typography, Grid} from '@material-ui/core';

function noticeHeader () {
    return (

        <Grid container justify="center" alignItems="center">
        <Typography gutterBottom>

        Players/DM/Chat please let bingo squares be organically occuring. 
        <p>
      Do not force or attempt to cause players to match them.
      </p>
      <p>
      DMs intervention: If players are not present in a stream, you may check up off to three squares related to those player's characters.
      </p>
      <a href="https://forms.gle/2aCqzeRURZsamgvRA">Use this form to suggest new squares</a>
      </Typography>
      </Grid>
    )
}

export default noticeHeader;