import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
    width: 512px;
    height: 768px;
    border-radius: 16px;

    margin: 0 auto;
    margin-top: 96px;

    background: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;

    position: relative;
`;

function TodoTemplate({ children }) {
    return <Template>{children}</Template>;
}

export default TodoTemplate;
