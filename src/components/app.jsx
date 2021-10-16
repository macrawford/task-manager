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
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        var sliced = [...this.state.todos]
        sliced.push({text: this.state.input, completed: false})
        this.setState({
            todos: sliced,
            input: ''
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
                                {todo.completed ? <div>{todo.text}</div> : <div>{todo.text}</div>}
                                <button onClick={() => this.toggleCompleted(index)}>Mark completed</button>
                                <button>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;