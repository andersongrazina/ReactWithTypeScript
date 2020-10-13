import React from 'react';
import { ListaTodo } from '../Models/ListaTodo';

interface TodoListItemProps { lista: ListaTodo }

const ListaItem = (props: TodoListItemProps) => {

    const handleChange = () => {
        console.log('Mudou');
    }

    const onRemove = (tarefa: ListaTodo) => {
        console.log(tarefa);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={props.lista.done} onChange={handleChange} />
                </label>
            </td>
            <td className="uk-width-expand">{props.lista.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.lista)}></button>
            </td>
        </tr>
    );
}

export default ListaItem;
