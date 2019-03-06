import { ADD_TODO } from '../actions';

// create an initial state to use below
const initialState = {
    todos: [
        {task: 'test',  completed: false, id: Date.now()}
    ]
}

// create a switch for each action case. Don't forget to import each action
// you export default here which means this is what rootreducer is in src/index.js
const reducer = (state = initialState, action) => { 
    console.log(action, "action")
    switch (action.type) {
        // what happens when ADD_TODO is used
        case ADD_TODO:
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false,
            }
            // return an array that has the current state + a new todo object 
            return {
                ...state,
                todos: [...state.todos, newTask]
            }
        
            // what happens when TOGGLE_TODO is used 
            // case TOGGLE_TODO:
            //     // map through each todo and check if the id matches ???????. 
            //     // If it matches, spread in the todo's info and change the completed flag to the opposite of what it is. 
            //     // If it doesn't match, leave the todo alone 
            //     return state.map(todo =>
            //         todo.id == action.payload ? 
            //         { ...todo, completed: !todo.completed } : 
            //         todo
            //     )
        
        default: 
        return state;
    }
}

export default reducer;