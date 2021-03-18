import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDeleteForever } from 'react-icons/md';
import { useDispatchContext } from './TodoContext';

const Delete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(73, 80, 87);
    cursor: pointer;
    font-size: 22px;

    &:hover {
        color: red;
    }
    display: none;
`;
const Circle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 20px;
    border: 1px solid #e9ecef;
    cursor: pointer;
    margin-right: 20px;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.done &&
        css`
            border: 1px solid rgb(32, 201, 151);
            color: rgb(32, 201, 151);
        `}
`;

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;

    padding-top: 12px;
    padding-bottom: 12px;

    &:hover {
        ${Delete} {
            display: initial;
        }
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: rgb(73, 80, 87);

    ${(props) =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;

function TodoItem({ id, text, done }) {
    const dispatch = useDispatchContext();

    const onToggle = () =>
        dispatch({
            type: 'CLICK',
            id,
        });
    const onDelete = () =>
        dispatch({
            type: 'DELETE',
            id,
        });

    return (
        <TodoItemContainer onClick={onToggle}>
            <Circle done={done}>{done && <MdDone />}</Circle>
            <Text done={done}>{text}</Text>
            <Delete onClick={onDelete}>
                <MdDeleteForever />
            </Delete>
        </TodoItemContainer>
    );
}

export default TodoItem;
