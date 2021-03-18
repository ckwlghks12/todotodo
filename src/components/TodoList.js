import React from 'react';
import styled from 'styled-components';
import { useStateContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const state = useStateContext();

    return (
        <TodoListBlock>
            {state.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                ></TodoItem>
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
