import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import './home.css';

function home(){
    return(
        <div>
            <center style={{paddingTop:"10px"}}>
                <h1>Pick the campaign to generate a bingo card for</h1>
                Campaigns that do not have a bingo card are disabled (non-current campagins can still be played using the VODs once they have a card)
            
            <div class="d-grid gap-2">
            <Link to ={`/nat19bingo/vestige`}className="btn btn-primary"><button className="btn btn-lg"><strong>Vestige of Ophiuchus</strong></button></Link>

            <Link to ={`/nat19bingo/dms`}className="btn btn-primary"><button className="btn btn-lg"><strong>Devils Might Surrender</strong></button></Link>
            <button className="btn btn-secondary btn-lg" disabled>Fate/Solar Shadow</button>
            <button className="btn btn-secondary btn-lg btn-block" disabled>Digimon Emblem Story</button>
            <button className="btn btn-secondary btn-lg btn-block" disabled>Tomb of Annihilation</button>
            <button className="btn btn-secondary btn-lg btn-block" disabled>Forgotten Realms: Curse of Strahd</button>
            <button className="btn btn-secondary btn-lg btn-block" disabled>Forgotten Realms: Waterdeep Dragon Heist</button>
            <button className="btn btn-secondary btn-lg" disabled>Forgotten Realms: Princes of the Apocalypse</button>
            <button className="btn btn-secondary btn-lg" disabled>Let Them Play Games Streams</button>
            </div>
            </center>
        </div>
    )
}
export default home;