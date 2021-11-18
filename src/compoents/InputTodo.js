// import React from "react";
// import '../App.css'
// const todoList = () => {
//     return(
//     <div className="todoList">
//         <h1>This is TodoList</h1>
//     </div>
//     )
// }


import React, { useState} from "react"

const InputTodo = props => {
    const [title,setTitle] = useState("")


    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSumbit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("")
        }else {
            alert("Please write item")
        }
    }


    return (
        <form onSubmit={handleSumbit} className="frpm-conteiner">
            <input
              type="text"
              className="input-text"
              placeholder="Add todo..."
              value={title}
              name="title"
              onChange={onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
    }

 export default InputTodo