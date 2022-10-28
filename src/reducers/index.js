import { ADD_RECIPE, REMOVE_FROM_CALENDER } from "../actions"

const initialCalenderState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null
    }
}

function calendar(state=initialCalenderState, action){
    const { day, meal, recipe} = action
    if(action.type = ADD_RECIPE){
        return{
            ...state,
            [day]:{
                ...state[day],
                [meal]: recipe.label
            }
        }
    }else if(action.type = REMOVE_FROM_CALENDER){
        return{
            ...state,
            [day]: {
                ...state[day],
                [meal]: null
            }
        }
    }else{
        return state
    }
}

export default calendar