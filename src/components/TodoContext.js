import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialList = [
    {
        id: 1,
        text: '할 일 1',
        done: true,
    },
    {
        id: 2,
        text: '할 일 2',
        done: false,
    },
    {
        id: 3,
        text: '할 일 3',
        done: true,
    },
];

function TodoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'CLICK':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'DELETE':
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoGetId = createContext();

export function Providers({ children }) {
    const [state, dispatch] = useReducer(TodoReducer, initialList);
    const nextId = useRef(4);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoGetId.Provider value={nextId}>
                    {children}
                </TodoGetId.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useStateContext() {
    const Context = useContext(TodoStateContext);
    if (!Context) {
        throw new Error('컨텍스트없음');
    }
    return Context;
}

export function useDispatchContext() {
    const Context = useContext(TodoDispatchContext);
    if (!Context) {
        throw new Error('컨텍스트없음');
    }
    return Context;
}

export function useNextId() {
    const Context = useContext(TodoGetId);
    if (!Context) {
        throw new Error('컨텍스트없음');
    }
    return Context;
}
