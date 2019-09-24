import React, { Component } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/foodbox.jsx';
import Form from './components/form.jsx';


class App extends Component {

  addFoodForm() {
    this.setState({
      addFoodForm: !this.state.addFoodForm,
    });
  }


 render() {
   return (
     <div className="App">
       <FoodBox foods={foods} />
     </div>
   );
 }
}
export default App;