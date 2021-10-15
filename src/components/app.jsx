import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            todos: [
                {text: 'Change oil'}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        console.log('e.target.value: ', e.target.value)
        console.log('this.state.input: ', this.state.input)
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        var sliced = [...this.state.todos]
        sliced.push({text: this.state.input})
        console.log('sliced: ', sliced)
        this.setState({
            todos: sliced
        })
    }
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
                            <div>
                                {todo.text}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;