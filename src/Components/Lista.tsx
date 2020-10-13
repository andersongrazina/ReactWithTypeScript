import { title } from 'process';
import React, { useContext } from 'react'
import { ListaTodoContext } from '../Contexts/ListaTodoContext';
import { ListaTodoContextType } from '../Contexts/ListaTodoContextType';
import ListaItem from './ListaItem';

const Lista = () => {
    const { todos } = useContext<ListaTodoContextType>(ListaTodoContext);

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
                    todos?.map(
                        listaTodo => (<ListaItem key={listaTodo.id} lista={listaTodo}></ListaItem>)
                    )
                }
            </tbody>
        </table >
    );
}

export default Lista;
