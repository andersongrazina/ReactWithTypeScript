import { ListaTodo } from "../Models/ListaTodo";

const TODO_STORE = 'todos';

export const get = (): ListaTodo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';

    try {
        const result = JSON.parse(data) as ListaTodo[];
        return result;
    } catch {
        return [];
    }
}

export const save = (data: ListaTodo[]) => {
    if (data?.length >= 1)
        localStorage.setItem(TODO_STORE, JSON.stringify(data));
}
