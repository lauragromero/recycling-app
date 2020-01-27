import React from 'react';
import '../stylesheets/App.css';
import {getData} from '../services/getData'
import SearchFilter from './SearchFilter';
import ObjectFilter from './ObjectFilter';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import ItemDetail from './ItemDetail'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      objects:[],
      searchValue: ''
    }
    this.getInputValue= this.getInputValue.bind(this)
    this.renderRouterDetail= this.renderRouterDetail.bind(this)
  }

  componentDidMount(){
    getData()
    .then(data=>{
      this.setState({
        objects: data.results
      })
    }
    )
    
  }

  getInputValue(value){
    console.log(value)
    this.setState({
      searchValue: value
    })
  }
  renderRouterDetail(props){
    const routerId = props.match.params.id;
    return <ItemDetail objectDetail ={routerId}
                      object={this.state.objects}
                      />
  }

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route exact path="/home">
          <SearchFilter
          getInputValue={this.getInputValue}
          value={this.state.searchValue}/>
          <ObjectFilter
          dataObjects={this.state.objects}
          searchValue={this.state.searchValue}/>
        </Route>

        <Route path="/detail/:id" render={this.renderRouterDetail}>
        </Route>
      
      </Switch>
        
      </div>
    );
  }
}

export default App;
