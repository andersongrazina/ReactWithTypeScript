import React, { useContext } from 'react';
import { ListaTodoContext } from '../Contexts/ListaTodoContext';
import { ListaTodoContextType } from '../Contexts/ListaTodoContextType';
import { ListaTodo } from '../Models/ListaTodo';


interface TodoListItemProps { lista: ListaTodo }

const ListaItem = (props: TodoListItemProps) => {

    const { removeTodo, toggle } = useContext<ListaTodoContextType>(ListaTodoContext);

    const handleChange = () => {
        toggle(props.lista);
    }

    const onRemove = (tarefa: ListaTodo) => {
        removeTodo(tarefa);
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
