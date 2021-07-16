import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => (
    <Hero>
        <main className="wrapper">
            <Header>
                <div className="container container-xxl container-fluid">
                    <div className="pos-rel homepage_hero">
                        <div className="col-md-7 homepage_hero_text">
                            <article>
                                <h1>
                                    The irresistible colorShuffle gradients
                                    generator!
                                </h1>
                                <p>
                                    Generate and Create you desired gradients &
                                    palettes or get inspired.
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
                </div>
            </Header>
            <Section>
                <div className="container">
                    {/* <GradientLayout
                        header="Explore gradients."
                        state={state.slice(0, -1)}
                        noRefresh
                        mode="see-more"
                    /> */}

                    <div className="m-auto text-center more__cards">
                        <p>Need more gradients?</p>
                        <Link className="btn btn-piggment" to="/explore">
                            See All Gradients
                        </Link>
                    </div>
                </div>
            </Section>
            <SectionMore>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h3>Create the perfect gradient palettes.</h3>
                            <p>
                                Create the perfect gradient palette and get
                                inspired to make something beautiful.
                            </p>
                            <Link
                                className="btn btn-piggment mr-3"
                                to="/generate-palette"
                            >
                                Start Generating
                            </Link>
                            <Link
                                className="btn btn-outline-piggment"
                                to="/palette"
                            >
                                Explore Palettes
                            </Link>
                        </div>
                        <div className="col-md-7 d-none d-md-block">
                            {/* <img src={Banner} alt="Banner" /> */}
                        </div>
                    </div>
                </div>
            </SectionMore>
            <SectionTrusted>
                <div>
                    <p>We are super fast and inspiring and open sourced.</p>
                    <h2>Trusted by smart expert creators.</h2>
                    <br />
                    <a
                        href="https://www.producthunt.com/posts/piggment?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-piggment"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=204989&theme=light"
                            alt="Piggment - Gradients and colors for the next smart creator | Product Hunt Embed"
                            width="250px"
                            height="54px"
                        />
                    </a>
                </div>
            </SectionTrusted>
        </main>
    </Hero>
);
const Hero = styled.main`
    .wrapper {
        display: flex;
        min-height: calc(100% - 529px - 56px);
        padding: 60px 0;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        @media print, screen and (min-width: 48em) {
            padding: 100px 0;
        }
    }
`;
const Header = styled.header`
    background: #ffffff;
    min-height: 42em;
    align-items: center;
    /* background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px); */
    justify-content: center;
    text-align: center;
    display: flex;

    h1 {
        font-weight: 800;
        color: var(--black);
        letter-spacing: -1.3px;
        line-height: 66px;
        letter-spacing: -2.1px;
        max-width: 400px;
        margin-bottom: 30px;
        @media print, screen and (min-width: 75em) {
            font-size: var(--font-x-lg);
            max-width: 600px;
        }
    }
    .pos-rel {
        position: relative;
    }
    .homepage_hero {
        position: relative;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        @media print, screen and (min-width: 75em) {
            height: 570px;
        }
        @media print, screen and (min-width: 48em) {
            height: 460px;
            justify-content: left;
            margin-bottom: 100px;
        }
    }
    .homepage_hero_text {
        display: flex;
        justify-content: center;
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
            width: calc(100% - 760px + 410px);
            margin-top: -40px;
        }
        & > article {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        & h1 {
            max-width: 400px;
            margin-bottom: 30px;
            @media print, screen and (min-width: 75em) {
                font-size: var(--font-x-lg);
                max-width: 600px;
            }
        }
    }
    .hero_text_btns {
        width: 260px;
        display: inline-block;
    }
    p {
        color: #717171;
        margin: 6px 0;
        font-size: calc(var(--font-sm) + 5.1px);
        font-weight: 400;
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
    .large__sum-card {
        position: absolute;
        text-align: left;
        top: 27rem;
        @media (max-width: 990px) {
            display: none;
        }
    }
`;

const Section = styled.section`
    margin-top: 26rem;
    @media (max-width: 990px) {
        margin-top: 6rem;
    }
    .w-70 {
        width: 70px;
    }

    .more__cards {
        margin-top: 4rem !important;
        p {
            color: #717171;
            font-size: 16px;
            font-weight: 400;
        }
        a {
            padding: 12px 40px;
            border: none;
            font-size: var(--font-sm);

            font-weight: 500;
        }
    }
`;

const SectionMore = styled.section`
    background: #fff8f0;
    min-height: 20em;
    display: flex;
    margin-top: 6rem;
    padding: 4em 0;
    align-items: center;

    h3 {
        font-weight: 900;
        font-size: var(--font-lg);
        color: var(--black);
        letter-spacing: -1.3px;
        margin-bottom: 1.4rem;
    }
    p {
        color: #717171;
        font-size: var(--font-x-sm);
        font-weight: 400;
    }
    a {
        padding: 10px 30px;
        border: none;
        font-size: var(--font-sm);
        color: var(--accent);
        font-weight: 500;
        margin-top: 1rem;
    }
`;

const SectionTrusted = styled.section`
    padding: 4rem;
    display: flex;
    justify-content: center;
    min-height: 10em;
    padding: 6em 0;
    text-align: center;
    align-items: center;
    h2 {
        font-weight: 900;
        font-size: var(--font-lg);
        text-align: center;
        color: var(--black);
        letter-spacing: -1.3px;
    }
    p {
        color: #717171;
        font-size: var(--font-x-sm) + 1px;
        font-weight: 400;
    }
`;

export default Home;
