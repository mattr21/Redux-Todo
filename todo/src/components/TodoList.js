import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

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

    render () {
        // console.log(this.props, "TodoList")
        return (
            <>
                <div>
                    {this.props.todos.map(todo => (
                        <h4 key={todo.id}>
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

export default connect(mapStateToProps, { addTodo })(TodoList)

