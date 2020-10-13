import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ListaTodoContext } from '../Contexts/ListaTodoContext';
import { ListaTodoContextType } from '../Contexts/ListaTodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('tarefa inválida')
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<ListaTodoContextType>(ListaTodoContext);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = "/";
    }

    //name e title do form tem que ser igual ao da interface --> no caso "title"

    return (
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <h4>Nova Tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova Tarefa" className="uk-input" ref={register} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddTodo;
