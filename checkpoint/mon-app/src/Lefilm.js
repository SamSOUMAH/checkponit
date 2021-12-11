
import './App.css'
import React,{ useSelector, useDispatch} from 'react-redux'
import { ADD_TODO } from './redux/constants'
import {addTodo} from './redux/actions/action-type'
import { editTodo } from './redux/actions/action-type'
import {useRef} from 'react';
import {AddEdit} from './redux/reducers/TodoReducer'


/*const mapStateToProps=(state)=>{
    return{ count : state.count }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }

}*/

const Lefilm=()=>{

    const tache = useRef();
    const pic = useRef();
    const vide=useRef();

 const dispatch = useDispatch()
 const list = useSelector(state => state.todos)





    return(
        <>
        <div className="Ajouter">
            <div>
                <input type="text" placeholder="Search..."></input>
                <button onClick={()=>dispatch(editTodo())}>Rechercher</button>
            </div>
            
        <div className="users">
        {list.map((user) => ([
          <p >{user.id}</p>,
          <p>{user.task}</p>,
          <img src={user.image} alt="" width='310px' height='490px'></img>,
          <iframe src={user.video} alt="" width="310px" height="490px"></iframe> 
         ]
          ))}
        </div>
        
        Nom:<input ref={tache} ></input>
        Photo: <input ref={pic}></input>
        Video: <input ref={vide}/>
        <button onClick = {() => dispatch(addTodo(tache.current.value, pic.current.value, vide.current.value))}>Add Todo</button>
    
        </div>
       
        
      

        </>
    )
}
export default Lefilm;