import React from 'react';
import styled from "styled-components";
import { CardComponent } from './card';

const CardsBlock = styled.div`
    max-width: 1120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`

export const Cards = () => {
    return (
        <CardsBlock>
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </CardsBlock>
    )
}