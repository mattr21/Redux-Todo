import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

// create an initial state to use below
const initialState = {
    todos: [
        // {task: 'test', completed: true, id: 242}
    ]
}

// create a switch for each action case. Don't forget to import each action
// you export default here which means this is what rootreducer is in src/index.js
const reducer = (state = initialState, action) => { 
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
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        
        default: 
        return state;
    }
}

export default reducer;