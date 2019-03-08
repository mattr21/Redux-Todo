import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/actions'

class TodoList extends React.Component { 
    state = {
        newTask: '',
    }

    handleChanges = e => {
        this.setState({ newTask: e.target.value })
    }

    addTodo = e => {
        e.preventDefault()
        this.props.addTodo(this.state.newTask)
        this.setState({ newTask: '' })
    } 

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    render () {
        return (
            <>
                <div>
                    {this.props.todos.map(todo => (
                        <h4 key={todo.id} onClick={() => this.toggleTodo(todo.id)} style={todo.completed ? { textDecoration: 'line-through' } : null}>
                            {todo.task}
                        </h4>
                    ))}
                </div>
                <input 
                    type="text"
                    name="newTask"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    placeholder="Add new task"
                />
                <button onClick={this.addTodo}>Add Task</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList)

