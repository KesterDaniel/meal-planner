import React, { Component } from 'react'
import { connect } from "react-redux"
import { addrecipe, removeFromCalender} from "../actions"

class App extends Component {

  render() {
    console.log("Props", this.props)
    return (
     <div>
      Hello World!
     </div>
    )
  }
}

function mapstateToProps(calendar){
  const dayOrder = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  
  return {
    calendar: dayOrder.map((day)=>({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal)=>{
        meals[meal] = calendar[day][meal]? calendar[day][meal]:null
        return meals
      }, {})
    }))
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data)=> dispatch(addrecipe(data)),
    remove: (data)=> dispatch(removeFromCalender(data))
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(App)
