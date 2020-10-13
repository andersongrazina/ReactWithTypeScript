import { title } from 'process';
import React from 'react'
import { ListaTodo } from '../Models/ListaTodo';
import ListaItem from './ListaItem';

const Lista = () => {
    const listaTodo: ListaTodo[] = [
        { id: 1, title: 'Ir ao supermercado', done: true },
        { id: 2, title: 'Ir a academia', done: false }
    ];

    return (
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    listaTodo?.map(
                        listaTodo => (<ListaItem key={listaTodo.id} lista={listaTodo}></ListaItem>)
                    )
                }
            </tbody>
        </table >
    );
}

export default Lista;
