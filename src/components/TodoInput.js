import React,{useState} from 'react';
import {useDispatch} from 'react-redux'; 
import{addTodoAction} from '../redux/redux';


export function TodoInput(){

    const [todo,setTodo]=useState('');

    const onChange=event=>{
        setTodo(event.target.value);
    }

    const onSubmit= event => {
        event.preventDefault();
        if(todo.trim()===''){
            return
        }
        console.log(todo);
        addTodo({
            id:3,
            name:todo,
            complete:false
        });
        console.log();
    }

    const dispatch = useDispatch();

    const addTodo = (todo) => dispatch(addTodoAction(todo))


    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <input type="text" 
                    name="todo"
                    placeholder="add a todo"
                    value={todo}
                    onChange={onChange}/>
                    <button type="submit">submit</button>
                </div>
            </div>
        </form>
    );
}
