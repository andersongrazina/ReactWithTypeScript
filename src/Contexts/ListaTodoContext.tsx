import React, { createContext, useEffect, useState } from 'react';
import { ListaTodo } from '../Models/ListaTodo';
import { get, save } from '../Services/TodoService';
import { ListaTodoContextType } from './ListaTodoContextType';

export const ListaTodoContext = createContext<ListaTodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }
});

const TodoProvider = (props: any) => {

    const [todos, setTodos] = useState<ListaTodo[]>(get);

    //Use Effect utilizado para sempre salvar a lista no contexto depois de qualquer alteração que ela sofrer (para nao precisar dar save em todo método)
    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: ListaTodo = { id: todos.length + 1, title: title, done: false };
        setTodos([...todos, todo]); // Express Operator --> Criar um let pra colocar o todos, adicionar um todo na lista e retornar essa lista
    }

    const removeTodo = (todo: ListaTodo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index)); // pegar todos os itens menos o index of do selecionado pra ele entender que se trata de um remove
    }

    const toggle = (todo: ListaTodo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done; //Tudo que é true vira false e vice versa
        setTodos([...todos]);
    }

    return (
        <ListaTodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </ListaTodoContext.Provider>
    );
}

export default TodoProvider;
