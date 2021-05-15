import React from 'react';
import './App.css';
import { Typography, Card, Grid, CardContent} from '@material-ui/core';
import bingoItems from './bingoItems.json';
import { styled } from '@material-ui/core/styles';
import BingoHeader from './components/bingoHeader';


var itemList=[]
const BingoItem = styled(Card)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: "150px",
  height: "150px",
  background: 'linear-gradient(135deg, #330665 40%, #D00117 90%)',
  color: 'white'
})



const CompletedItem = styled(Card)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: "150px",
  height: "150px",
  background: 'linear-gradient(45deg, #1e824c 30%, #4ecdc4 90%)',
  color: 'white'
})

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.bingoSetup()
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

  bingoSetup(){
    let bingoItemsList=bingoItems;
    let itemIndex;
    for (var i=0;i<25;i++){
      // console.log(i+" is i")
      if(i===12){
        // console.log("huh")
        itemList.push(
          {"id": 0,
          "item": "PENIS \n (Free Space)"
        })
      }
      else{
  
        itemIndex=Math.floor(Math.random()*bingoItemsList.length);
        /* console.log("list length: " + bingoItemsList.length)
        console.log("item index: " + itemIndex)
        console.log(itemIndex) */
        itemList.push(bingoItemsList[itemIndex]);
        bingoItemsList.splice(itemIndex,1);
      }
    }
    console.log(itemList)
  }
  
  markUnComplete = e => {
    const id = e.target.id;
    this.setState({[id]: false})
    
  }
  
  bingoRow(row) {
    let rowOne = itemList.slice(0, 5);
    let rowTwo = itemList.slice(5, 10);
    let rowThree = itemList.slice(10, 15);
    let rowFour = itemList.slice(15, 20);
    let rowFive = itemList.slice(20,25);
    let renderRow;
    switch (row) {
      case 1:
      renderRow = rowOne;
      break;
      case 2:
      renderRow = rowTwo;
      break;
      case 3:
      renderRow = rowThree;
      break;
      case 4:
      renderRow = rowFour;
      break;
      case 5:
      renderRow = rowFive;
      break;
      default:
      renderRow = rowOne;
    }
    return (
      <Grid container justify="center" alignItems="center" alignContent="center" spacing={0}>
      {renderRow.map(item => {
        const id = item.id;
        if (this.state[id] === true) {
          return (
            <Grid item xs={0} key={item.id}>
            <CompletedItem id={id}>
            <CardContent id={item.id} onClick={this.markUnComplete}>
            <Typography id={item.id} onClick={this.markUnComplete} gutterBottom>
            {item.item}</Typography>
            </CardContent>
            </CompletedItem>
            </Grid>
            )
          }
          else {
            return (
              <Grid item xs={0} key={item.id}>
              <BingoItem > 
              <CardContent id={item.id} onClick={this.markComplete}>
              <Typography  id={item.id} onClick={this.markComplete} gutterBottom>
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
          <>
          <BingoHeader />
          {this.bingoRow(1)}
          {this.bingoRow(2)}
          {this.bingoRow(3)}
          {this.bingoRow(4)}
          {this.bingoRow(5)}
          </>
          )};
        }
        
        export default App;
        