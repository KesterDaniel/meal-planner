import React, { Component } from 'react'
import { connect } from "react-redux"
import { addrecipe, removeFromCalender} from "../actions"
import {capitalize} from "../utils/helpers"
import { FaCalendar } from 'react-icons/fa';

class App extends Component {

  render() {
    const { calendar, remove} = this.props
    const mealOrder = ["breakfast", "lunch", "dinner"]

    return (
     <div className='container'>
      <ul className='meal-types'>
        {mealOrder.map((mealType)=>(
          <li key={mealType} className="subheader">{capitalize(mealType)}</li>
        ))}
      </ul>
      <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                          <FaCalendar size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
     </div>
     
    )
  }
}

function mapstateToProps({calendar, food}){
  const dayOrder = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  
  return {
    calendar: dayOrder.map((day)=>({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal)=>{
        meals[meal] = calendar[day][meal]? food[calendar[day][meal]]:null
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
