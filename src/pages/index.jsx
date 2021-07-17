import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Art from "../assets/icons/art.svg";
import ColorShuffle from "../Components/TextAnimation/index";

const Home = () => (
    <main>
        <Header>
            <div className="container container--xxl container--fluid">
                <div className="homepage_hero_text">
                    <article>
                        <h1>
                            The irresistible
                            <ColorShuffle className="color" />
                            gradients!
                        </h1>
                        <p>
                            Generate and Create you desired gradients & palettes
                            or get inspired.
                        </p>
                        <div className="hero_text_btns">
                            <Link
                                className="btn btn-colorShuffle mr-md-3 mr-2"
                                to="/generate"
                            >
                                Start Generating
                            </Link>
                            <Link
                                className="btn btn-outline-colorShuffle"
                                to="/explore"
                            >
                                Explore Gradients
                            </Link>
                        </div>
                    </article>
                </div>
                <div className="homepage_hero_image">
                    <img src={Art} alt="art" />
                </div>
                {/* {state[6] && (
                        <Card
                            data={
                                state[6] || {
                                    name: "1234",
                                    color: "linear-gradient(2deg, rgb(255,255,255,0.4) 3%, rgb(255,255,255,0.8) 30%)",
                                }
                            }
                            type="large"
                        />
                    )} */}
            </div>
        </Header>
    </main>
);

const Header = styled.header`
    position: relative;
    background: #ffffff;
    align-items: center;
    justify-content: left;
    text-align: center;
    display: flex;
    width: 100%;
    min-height: calc(100% - 529px - 56px);
    padding: 60px 0;
    flex-direction: column;
    @media print, screen and (min-width: 48em) {
        padding: 100px 0;
    }
    .container--fluid.container--xxl {
        max-width: 1500px !important;
    }
    .container {
        margin: 0 !important;
        width: 100%;
        padding: 0 24px;
        position: relative;
        display: flex;
        text-align: left;
        @media (min-width: 1200px) {
            padding: 0 42px;
        }
        @media (min-width: 992px) {
            padding: 0 42px;
        }
        @media (min-width: 768px) {
            padding: 0 35px;
        }
        @media (min-width: 576px) {
            padding: 0 24px;
        }
    }
    .homepage_hero_text {
        display: flex;
        position: relative;
        justify-content: left;
        z-index: 2;
        @media (min-width: 1300px) {
            width: calc(100% - 900px + 160px);
        }
        @media (min-width: 1200px) {
            width: calc(100% - 900px + 250px);
        }
        @media (min-width: 1100px) {
            width: calc(100% - 760px + 180px);
        }
        @media (min-width: 992px) {
            width: calc(100% - 760px + 260px);
        }
        @media (min-width: 900px) {
            width: calc(100% - 760px + 300px);
        }
        @media (min-width: 768px) {
            width: calc(100% - 760px + 110px);
            margin-top: 0 !important;
        }
        & > article {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 30px;
            & h1 {
                font-weight: 800;
                color: var(--black);
                letter-spacing: -1.3px;
                line-height: 66px;
                letter-spacing: -2.1px;
                max-width: 400px;
                margin-bottom: 20px;
                @media print, screen and (min-width: 75em) {
                    font-size: var(--font-x-lg);
                    max-width: 400px;
                }
            }
            & p {
                font-size: calc(var(--font-sm) + 5.1px);
                font-weight: 400;
                max-width: 400px;
                color: #7d7c83;
                line-height: 1.4em;
                margin-left: auto;
                margin-bottom: 2px;
            }
        }
    }
    .hero_text_btns {
        width: 260px;
        display: inline-block;
    }
    a.btn {
        padding: 12px 40px;
        border: none;
        font-size: var(--font-sm);
        font-weight: 500;
        margin-top: 2rem;
        @media (max-width: 990px) {
            font-size: calc(var(--font-sm) - 1px);
        }
    }
    .homepage_hero_image {
        margin-top: 60px;
        margin: 0;
        position: absolute;
        left: 40%;
        display: block;
        width: 50%;
        transition: ease;
        &:hover {
            transform: rotateY(-20deg) rotateX(20deg);
            transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
            transform-style: flat;
            box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
            perspective: 5000px;
            perspective-origin: left bottom;
        }
    }
`;

export default Home;
