import React from 'react';
import './ggbingo.css';
import { Typography, Card, Grid, CardContent, Box, Container, CardMedia} from '@material-ui/core';
import { positions } from '@material-ui/system';
import ggCommon from '../ggBingoCommon.json'
import ggUncommon from '../ggBingoUncommon.json'
import ggRare from '../ggBingoRare.json'
import { styled } from '@material-ui/core/styles';
import BingoHeader from './bingoHeader';
import NoticeHeader from './noticeHeader';
import GgFooter from './ggFooter';
import ggLogo from './Background images/GilligansGraveLogo full height.png';



let SIZE={rows:5,columns:5}
let SQUARES=[];
let CONTEXT=null;

var itemList=[]
const BingoItem = styled(Card)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: "150px",
  height: "150px",
  background: 'linear-gradient(135deg, #330665 40%, #D00117 90%)',
  color: 'white',
  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
})
const bingobackground={
  backgroundImage: `url(${ggLogo})`,
}

const CompletedItem = styled(Card)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: "150px",
  height: "150px",
  //background: 'rgba(52, 52, 52, 0.0)',
  //backgroundImage: `url(${ggLogo})`,
  color: 'white',
  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
})


function initializeSquares(){
  SQUARES=[];
  for (let i=0;i<SIZE.rows;i++){
    for(let j=0;j<SIZE.columns;j++){
      SQUARES.push(new Square(i,j));
    }
  }
}


class Square{
  constructor(rowIndex,colIndex){
    this.rowIndex=rowIndex;
    this.colIndex=colIndex;
  }
  draw(context){
    context.beginPath();
    context.rect(this.x,this.y,this.width,this.height)
  }
}

class GGBingo extends React.Component {
  
  constructor(props) {
    super(props);
    this.generateBingo();
  }
  
  generateBingo(){
    const url=window.location.href
    
    this.bingoSetupNew(ggCommon,ggUncommon,ggRare,"URBriar")
    
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false,
      24: false
    };
  }
  
  markComplete = e => {
    const id = e.target.id;
    this.setState({[id]: true})
    
  }
  
  bingoSetup(bingoItems){
    let bingoItemsList=bingoItems;
    let itemIndex;
    for (var i=0;i<25;i++){
      // console.log(i+" is i")
      if(i===12){
        // console.log("huh")
        itemList.push(
          {"id": 0,
            "item": "Free Space"
          })
        }
        else{
          itemIndex=Math.floor(Math.random()*bingoItemsList.length);
          itemList.push(bingoItemsList[itemIndex]);
          bingoItemsList.splice(itemIndex,1);
        }
      }
      console.log(itemList)
    }
    
    bingoSetupNew(commonItems,uncommonItems,rareItems, special){
      const commonItemsList=commonItems;
      const uncommonItemsList=uncommonItems;
      const rareItemsList=rareItems;
      let itemIndex;
      let listPick;
      const setupList=[];
      for (var i=0;i<24;i++){
        if(special==="URBriar" && i===0){
          let briarRoll=Math.random()*1000;
          if(briarRoll===1){
            setupList.push(
              {"id": 105,
                "item": "UR Square \n Briar shows up"
              })
              special="";
              continue;
            }
            
          }
          if(special==="finale" && i===0){
            setupList.push(
              {"id": 106,
                "item": "Second free square for finale"
              })
              special="";
              continue;
            }
            listPick=Math.floor(Math.random()*48);
            if((listPick<36 && commonItemsList.length>0) || (listPick>35 && listPick<46 && uncommonItemsList.length===0)){
              itemIndex=Math.floor(Math.random()*commonItemsList.length);
              setupList.push(commonItemsList[itemIndex]);
              commonItemsList.splice(itemIndex,1);
            }
            else if((listPick>35 && listPick<46) || (listPick<36 && commonItemsList.length===0)){
              itemIndex=Math.floor(Math.random()*uncommonItemsList.length);
              setupList.push(uncommonItemsList[itemIndex]);
              uncommonItemsList.splice(itemIndex,1);
            }
            else{
              if (rareItemsList.length>0){
                itemIndex=Math.floor(Math.random()*rareItemsList.length);
                setupList.push(rareItemsList[itemIndex]);
                rareItemsList.splice(itemIndex,1);
              }
              else{
                i--;
              }
            }
          }
          for (i=0;i<25;i++){
            // console.log(i+" is i")
            if(i===12){
              // console.log("huh")
              itemList.push(
                {"id": 0,
                  "item": "Free Space"
                });
              }
              else{
                
                itemIndex=Math.floor(Math.random()*setupList.length);
                /* console.log("list length: " + bingoItemsList.length)
                console.log("item index: " + itemIndex)
                console.log(itemIndex) */
                itemList.push(setupList[itemIndex]);
                setupList.splice(itemIndex,1);
              }
            }
            console.log(itemList)
          }
          
          markUnComplete = e => {
            const id = e.target.id;
            this.setState({[id]: false})
            
          }
          
          bingoRow(row) {
            let renderRow=itemList.slice((row-1)*5,row*5);
            return (
              <Grid container justify="center" alignItems="center" alignContent="center" spacing={0} >
              {renderRow.map(item => {
                const id = item.id;
                if (this.state[id] === true) {
                  return (
                    <Grid item key={item.id}>
                    <CompletedItem id={id} onClick={this.markUnComplete}>
                    <CardContent id={item.id}>
                    <Typography id={item.id} gutterBottom>
                    {item.item}</Typography>
                    </CardContent>
                    </CompletedItem>
                    </Grid>
                  )
                }
                else {
                  return (
                    <Grid item key={item.id}>
                    <BingoItem  id={item.id} onClick={this.markComplete}> 
                    <CardContent id={item.id}>
                    <Typography  id={item.id} gutterBottom>
                    {item.item}</Typography>
                    </CardContent>
                    </BingoItem>
                    </Grid> 
                  )
                }
              })
            }
            </Grid>
          )
        }
        
        render() {
         
          
          return (
            
            <Container>
            
            <BingoHeader/>
            <NoticeHeader/>
            
            <Box display="flex" justifyContent="center" sx={{height: 250, width: 250,}}>
            <Box
            component="img"
            sx={{
              height: 250,
              width: 250,
              position: "Relative"
            }}
            
            src={ggLogo}
            />
            {this.bingoRow(1)}
            {this.bingoRow(2)}
            {this.bingoRow(3)}
            {this.bingoRow(4)}
            {this.bingoRow(5)} 
            </Box>
            
            <GgFooter/>
            
            </Container>
          )};
        }
        
        
        export default GGBingo;
        
        
        