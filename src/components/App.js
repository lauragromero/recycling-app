import React from 'react';
import '../stylesheets/App.css';
import {getData} from '../services/getData'
import SearchFilter from './SearchFilter';
import ObjectFilter from './ObjectFilter';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      objects:[],
      searchValue: ''
    }
    this.getInputValue= this.getInputValue.bind(this)
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

  render() {
    return (
      <div className="App">
        <SearchFilter
        getInputValue={this.getInputValue}
        value={this.state.searchValue}/>
        <ObjectFilter
        dataObjects={this.state.objects}
        searchValue={this.state.searchValue}/>
        
      </div>
    );
  }
}

export default App;
