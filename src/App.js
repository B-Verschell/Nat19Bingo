import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Bingo from'./components/bingo'


class App extends Component{
    render(){
        return(
            <Router>
                <Route exact path='/nat19bingo' component={Home}></Route>
                <Route path='/nat19bingo/:game' component={Bingo}></Route>
            </Router>
        )
    }
}

export default App;