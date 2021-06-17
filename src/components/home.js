import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function home(){
    return(
        <div>
            <center style={{paddingTop:"10px"}}>
                <h1>Pick the campaign to generate a bingo card for</h1>
                Campaigns that do not have a bingo card are disabled (non-current campagins can still be played using the VODs once they have a card)
            </center>
            <Button varriant="link" className="btn btn-primary btn-lg btn-block"><Link to ={`/nat19bingo/vestige`}>Vestige of Ophiuchus</Link></Button>
            <Button varriant="link" className="btn btn-primary btn-lg btn-block"><Link to ={`/nat19bingo/dms`}>Devils Might Surrender</Link></Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Fate/Solar Shadow</Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Digimon Emblem Story</Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Tomb of Annihilation</Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Forgotten Realms: Curse of Strahd</Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Forgotten Realms: Waterdeep Dragon Heist</Button>
            <Button className="btn btn-primary btn-lg btn-block" disabled>Forgotten Realms: Princes of the Apocalypse</Button>
            
        </div>
    )
}
export default home;