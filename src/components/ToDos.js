import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { Container, Row } from 'react-bootstrap';

export default class Todos extends Component {
  constructor(){
      super();
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.state = {
        currentId: 4,
        currentAdd: "",
        todos: [
          {
              id: 1,
              title: "Here",
              completed: false
          },
          {
              id: 2,
              title: "How are you?",
              completed: false
          },
          {
              id: 3,
              title: "How are you Archit?",
              completed: true
          }
        ]
    }
  }

  removeItem(event) {
    var todos = this.state.todos;
    for(var i = 0; i < todos.length; i++) {
        if (todos[i]["id"] === Number(event.target.id)) {
            todos.splice(i, 1);
            break;
        }
    }
    this.setState({
        todos: todos
    });
  }


  addItem(event) {
    const todos = this.state.todos;
    const currentId = this.state.currentId;
    
    const newObject = {
        id: currentId,
        title: event.target.value,
        completed: false
    }
    todos.push(newObject);
    this.setState({
        todos: todos,
        currentId: currentId+1
    });
  }
  
  render () {
    return (
        <Container className="my-3" fluid>
            <Row>
                {this.state.todos.map((todo) => (
                    <ToDoItem 
                        todoTitle={todo.title} 
                        key={todo.id.toString()} 
                        todoCompleted={todo.completed}
                        removeItem={this.removeItem}
                        id={todo.id.toString()}
                    />
                ))}
            </Row>
            <Row>
               <input 
                    type="text"
                    placeholder="Add Todo Item"
                    className="todo-item-text ml-5 pl-2 mt-3"
                    onChange={this.addItem}
                    value={this.state.currentAdd}
               />
            </Row>
        </Container>
    );
  }
}
