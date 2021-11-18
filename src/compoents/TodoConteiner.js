import { Route,Switch} from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import NavBar from "../pages/Navbar"



     
        





    


        
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