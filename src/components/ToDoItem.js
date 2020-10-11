import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/ToDoItem.css';

class ToDoItem extends Component {
  constructor(props) {
      super(props);
      this.updateStyle = this.updateStyle.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.state = {
        todoCompleted: this.props.todoCompleted,
        todoTitle: this.props.todoTitle
      }
  }
  

  getStyle() {
      return {
          textDecoration: this.state.todoCompleted ? 'line-through' : 'none',
      }
  }

  updateStyle() {
      this.setState({
        todoCompleted: !this.state.todoCompleted
      });
  }

  onInputChange(event) {
      console.log("Hewre");
        this.setState({
            [event.target.name]: event.target.value
        });
  }

  render () {
    return (
        <Container>
            <Row>
                <Col xs={1} md={1}>
                    <input 
                        type="checkbox" 
                        onChange={this.updateStyle} 
                        checked={this.state.todoCompleted}
                    />
                </Col>
                <Col>
                    <input 
                        type="text" 
                        value={this.state.todoTitle}
                        className="todo-item-text"
                        onChange={this.onInputChange}
                        name="todoTitle"
                        style={this.getStyle()}
                        autoFocus
                    />
                </Col>
                <Col xs={1} sm={1} md={1}>
                    <span 
                        className="remove-item"
                        onClick={this.props.removeItem}
                        id={this.props.id}
                    >-</span>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default ToDoItem;
