import React, { Component } from 'react'
import { addrecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount(){
   const { store } = this.props

   store.subscribe(()=>{
    this.setState(()=>({
      calendar: store.getState()
    }))
   })
  }

  submitfood = ()=>{
    const { store } = this.props
    store.dispatch(addrecipe({
      day: "monday",
      meal: "breakfast",
      recipe:{
        label: this.input.value
      }
    }))
    this.input.value = ""
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref = {(input)=> this.input = input}
          placeholder="Mondays Breakfast"
        />
        <button onClick={this.submitfood}>Submit</button>

        <pre>
          Mondays breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default App
