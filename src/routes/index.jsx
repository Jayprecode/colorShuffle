/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import PropTypes from "prop-types";

/* -------------------------- Internal Dependencies ------------------------- */
import NavCodify from "../Components/navbar";
import ErrorBoundary from "../Components/error-boundary";
import PrimaryLogo from "../Components/logo-arts";
import Footer from "../Components/footer";

/* ------------------------- Component Dependencies ------------------------- */
const Home = lazy(() => import("../pages"));
const ExploreGrads = lazy(() => import("../pages/exploreGradient"));
const ExplorePalettes = lazy(() => import("../pages/explorePallets"));
const GenerateGrads = lazy(() => import("../pages/generateGradients"));
const GeneratePalettes = lazy(() => import("../pages/generatePallets"));

/* ---------------------------- Routes PropTypes ---------------------------- */

const propTypes = {
    location: PropTypes.any,
};

const routes = ({ location }) => (
    <Wrapper>
        <ErrorBoundary>
            <NavCodify />
            <main id="main">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames="fade"
                    >
                        <Suspense fallback={<PrimaryLogo />}>
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route
                                    path="/explore-gradients"
                                    component={ExploreGrads}
                                />
                                <Route
                                    path="/explore-palettes"
                                    component={ExplorePalettes}
                                />
                                <Route
                                    path="/generate-gradient"
                                    component={GenerateGrads}
                                />
                                <Route
                                    path="/generate-palette"
                                    component={GeneratePalettes}
                                />
                            </Switch>
                        </Suspense>
                    </CSSTransition>
                </TransitionGroup>
                {!location.pathname.includes("generate") && (
                    <Footer
                        discover={
                            location.pathname === "/explore" ||
                            location.pathname === "/palette"
                        }
                    />
                )}
            </main>
        </ErrorBoundary>
    </Wrapper>
);

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.6;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 0.4s ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.6;
        transition: opacity 0.4s ease-in;
    }
`;

routes.propTypes = propTypes;

export default withRouter(routes);
