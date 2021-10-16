import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        event.target.reset()
        var sliced = [...this.state.todos]
        sliced.push({text: this.state.input, completed: false})
        this.setState({
            input: '',
            todos: sliced
        })
    }
    toggleCompleted(index) {
        console.log('this.state.todos: ', this.state.todos)
        var sliced = [...this.state.todos];
        sliced[index].completed = !sliced[index].completed;
        this.setState({
            todos: sliced
        })
    }
    deleteTodo(index) {
        var sliced = [...this.state.todos];
        sliced.splice(index, 1);
        this.setState({
            todos: sliced
        })
    }
    // Goals
    // Be able to mark completed or not
        // completed has a slash thru it
    // Be able to delete from list
    render() {
        return(
            <div>
                <div>
                    To-Do List:
                </div>
                <form>
                    <input onChange={this.handleChange}>
                    </input>
                    <button onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
                <div>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <div key={index}>
                                {todo.completed ? <div>{todo.text}Completed</div> : <div>{todo.text}</div>}
                                <button onClick={() => this.toggleCompleted(index)}>Mark completed</button>
                                <button onClick={() => this.deleteTodo(index)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;