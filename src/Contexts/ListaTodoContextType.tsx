import React from 'react';
import { ListaTodo } from '../Models/ListaTodo';

export interface ListaTodoContextType {
    todos: ListaTodo[];
    addTodo(title: string): void;
    removeTodo(todo: ListaTodo): void;
    toggle(todo: ListaTodo): void;
}
