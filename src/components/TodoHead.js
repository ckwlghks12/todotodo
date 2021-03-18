import React from 'react';
import styled from 'styled-components';
import { useStateContext } from './TodoContext';

const HeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: rgb(52, 58, 64);
    }

    .date {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .counter {
        color: rgb(32, 201, 151);
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useStateContext();
    const taskCount = todos.filter((todo) => !todo.done).length;

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <HeadBlock>
            <h1>{dateString}</h1>
            <div className="date">{dayName}</div>
            <div className="counter">할일 {taskCount}개 남음</div>
        </HeadBlock>
    );
}

export default TodoHead;
