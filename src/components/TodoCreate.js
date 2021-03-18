import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useDispatchContext, useNextId } from './TodoContext';

const Button = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;

    font-size: 75px;
    color: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.275s all ease-in;
    ${(props) =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(130deg);
        `}
`;

const TodoInsertFormCon = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const dispatch = useDispatchContext();
    const nextId = useNextId();

    const onChange = (e) => setInput(e.target.value);
    const onCreate = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: { id: nextId.current, text: input, done: false },
        });
        nextId.current += 1;
        setInput('');
    };
    const onToggle = () => setOpen(!open);
    return (
        <>
            {open && (
                <TodoInsertFormCon>
                    <InsertForm onSubmit={onCreate}>
                        <Input
                            value={input}
                            onChange={onChange}
                            autoFocus
                            placeholder="할 일 입력 후 엔터"
                        />
                    </InsertForm>
                </TodoInsertFormCon>
            )}
            <Button onClick={onToggle} open={open}>
                <MdAdd />
            </Button>
        </>
    );
}

export default TodoCreate;
