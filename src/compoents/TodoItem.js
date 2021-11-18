import React from "react";

class TodoItem extends React.Component {
    state={
        editing:false
    }
    handleEditing =() => {
        this.setState({
            editing: true,
        });
    };
    handleupdateDone =(event) => {
        if (event.key === 'Enter') {
            this.setState({ editing:false });
    }
};

componentWillUnmount() {
    console.log('Cleaning up...')
}

    render() {
        let viewMode ={};
        let editMode ={};

        if (this.state.editing) {
            viewMode.display ='none';
        } else {
            editMode.display = 'none';
        }
        return
        <li className="test">
            <div onDoubleClick={this.handleEditing}>
            <input type="checkbox" 
            checked={this.props.todo.completed}
             onChange={() => this.props.handleChangeProps(this.props.todo.id)}
              /> 

              <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                  Delete</button>
              {this.props.todo.title}

              <input type="text"
               style={test}
               value={this.props.todo.title}
               className="test2"/>
               onChange={(e) =>{
                   this.props.setUpdate(e.target.value, this.props.todo.id);
               }}
               onKeyDown={this.handleEditing}
            
              </div>
        </li>
            
    }
}

    

export default TodoItem