import React from 'react';
import styled from "styled-components";
import CatImg from '../../image/Cat.png'

const Card = styled.div`
    position: relative;
    max-width: 320px;
    width: 100%;
    background: transparent;
    padding: 21px 61px 305px 48px;
    z-index: 100;
    color: black;
    border-right: 4px solid #1698D9;
    overflow: hidden;
    &:after {
        position: absolute;
        content: '';
        width: calc(100% - 4px);
        right: 0px;
        z-index: -1;
        height: calc(90% - 4px);
        bottom: 0px;
        border: 4px solid #1698D9;
        border-width: 0px 0px 4px 4px;
        background: #F2F2F2 url(${CatImg}) no-repeat bottom;
    }
    &:before {
        position: absolute;
        content: '';
        width: 100%;
        right: 0px;
        z-index: -1;
        height: 10%;
        top: 0px;
        border: 4px solid #1698D9;
        border-width: 4px 0px 0px 6px;
        transform: skew(-45deg);
        transform-origin: right bottom;
        background: #F2F2F2;
    }
`
const CardSubHeader = styled.h3`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #666666;
    margin-bottom: 5px;
`
const CardHeader = styled.h2`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
`
const CardSubTitle = styled.h3`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 15px;
`
const CardInfoCount = styled.p`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
`
const CardPresent = styled.strong`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
`
const CardWeight = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 80px;
    height: 80px;
    background: #1698D9;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const WeightCount = styled.strong`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    color: #FFFFFF;
`
const WeightUnits = styled.span`
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
`

export const CardComponent = () => {
    return (
        <Card>
            <CardSubHeader>Сказочное заморское яство</CardSubHeader>
            <CardHeader>Нямушка</CardHeader>
            <CardSubTitle>с фуа-гра</CardSubTitle>
            <CardInfoCount>10 порций</CardInfoCount>
            <CardPresent>мышь в подарок</CardPresent>
            <CardWeight>
                <WeightCount>0,5</WeightCount>
                <WeightUnits>КГ</WeightUnits>
            </CardWeight>
        </Card>
    )
}