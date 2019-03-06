import { ADD_TODO, TOGGLE_TODO } from './actions';

// create an initial state to use below
const initialState = {
    todos: [
        {
            id: 1,
            text: 'complete project',
            completed: false
        }
    ]
}

// create a switch for each action case. Don't forget to import each action
// you export default here which means this is what rootreducer is in src/index.js
export default (state = initialState, action) => { 
    switch (action.type) {
        // what happens when ADD_TODO is used
        case ADD_TODO: 
            // return an array that has the current state + a new todo object 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        
            // what happens when TOGGLE_TODO is used 
            case TOGGLE_TODO:
                // map through each todo and check if the id matches ???????. 
                // If it matches, spread in the todo's info and change the completed flag to the opposite of what it is. 
                // If it doesn't match, leave the todo alone 
                return state.map(todo =>
                    todo.id == action.id ? 
                    { ...todo, completed: !todo.completed } : 
                    todo
                )
        
        default: 
        return state;
    }
}