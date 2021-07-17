import React from "react";
import styled, { keyframes } from "styled-components";

const ColorShuffle = () => {
    const reactArray = "colorShuffle".split("");
    return (
        <Wrapper>
            {reactArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </Wrapper>
    );
};

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
    25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    100% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
`;
const Wrapper = styled.span`
    display: inline-block;
    color: var(--theme-primary) !important;
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        &:nth-child(1) {
            animation-delay: 0.1s;
        }
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.3s;
        }
        &:nth-child(4) {
            animation-delay: 0.4s;
        }
        &:nth-child(5) {
            animation-delay: 0.5s;
        }
        &:nth-child(6) {
            animation-delay: 0.6s;
        }
        &:nth-child(7) {
            animation-delay: 0.7s;
        }
        &:nth-child(8) {
            animation-delay: 0.8s;
        }
        &:nth-child(9) {
            animation-delay: 0.9s;
        }
        &:nth-child(10) {
            animation-delay: 1s;
        }
        &:nth-child(11) {
            animation-delay: 1.1s;
        }
        &:nth-child(12) {
            animation-delay: 1.2s;
        }
    }
`;
export default ColorShuffle;
