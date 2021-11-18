import { Route,Switch} from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import NavBar from "../pages/Navbar"



     
        



// const InputTodo = () => {
//     console.log(useState("hello"))
//     return <div></div>
// }
// ReactDOM.render(
//     <React>strictMode>
//         <BrowserRouter>
//         <TodoConteiner>



// export default InputTodo

// class TodoConteiner extends React.Component {

// state = {
//     todos:[],
// };

// componentDidMount() {
//     const temp = localStorage.getItem('todos');
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//         this.setState({
//             todos: loadedTodos,
//         });
//     }
// }


// componentDidUpdate(prevProps, prevState) {
//     if(prevState.todos !== this.state.todos) {
//         const temp = JSON.stringify(this.state.todos)
//         localStorage.setItem("todos", temp)
//     }
// }
      


//  handleChange = id => {
//      this.setState({
//      todos: this.state.todos.map(todo => {
//          if (todo.id === id) {
//              todo.completed = !todo.completed;
//                              }
//  return todo;
//                            })
//                         });
//                 };

    // delTodo = id => {
    //     this.setState({
    //         todos: [
    //             ...this.state.todos.filter(todo => {
    //                 return todo.id !== id;
    //             })
    //         ]
    //     });
    // };

    


        
    render () {
        return (
              <Route exact path="/">
              <div className="todoConteiner">
                 <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} >
               deleteTodoProps={this.delTodo}
               setUpdate={this.setUpdate}
                
               </div>
              </Route>
        )
    }


export default TodoConteiner