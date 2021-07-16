/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { memo } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

/* --------------------------- Image Dependencies --------------------------- */
import Logo from "../../assets/icons/logo.svg";

/* --------------------------- NavLayout PropTypes -------------------------- */
const propTypes = {
    location: PropTypes.object,
};

const NavCodify = memo(({ location }) => (
    <NavWrapper
        collapseOnSelect
        expand="md"
        fixed="top"
        className={location.pathname.includes("generate") && "spaced__out"}
    >
        <div
            className={
                (location.pathname.includes("generate") &&
                    "container-fluid ") ||
                "container m-0 navCon"
            }
        >
            <Navbar.Brand as={Link} to="/">
                <img src={Logo} alt="colorShuffle" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="collapse">
                <Nav className="ml-auto">
                    <NavDropdown title="Generate" id="generate">
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/generate-gradient"
                        >
                            Generate Gradient
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/generate-palette"
                        >
                            Generate Palette
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Explore" id="explore">
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/explore-gradients"
                        >
                            Explore Gradient
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/explore-palettes"
                        >
                            Explore Palette
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="More" id="more">
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/contrast-checker"
                        >
                            Contrast Checker
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/image-picker"
                        >
                            Pick pallet from photo
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/color-picker"
                        >
                            Color picker
                        </NavDropdown.Item>
                        <span className="divider" />
                        <NavDropdown.Item
                            activeClassName="active"
                            exact
                            as={NavLink}
                            to="/extension"
                        >
                            <span className="divider" />
                            Chrome extension
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                        activeClassName="is-active"
                        exact
                        as={NavLink}
                        to="/saved"
                        className="saved"
                    >
                        {/* <PureLove className="mr-1" aria-hidden="true" /> */}
                        Saved
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </NavWrapper>
));

const NavWrapper = styled(Navbar)`
    background: #ffffff;
    box-shadow: rgb(0 0 0 / 11%) 0 1px;
    font-weight: 500;
    &.spaced__out {
        width: calc(100% - 40px);
        left: 50%;
        border-radius: 8px;
        transform: translate(-50%, 10px);
        @media (max-width: 989px) {
            width: calc(100% - 10px);
        }
    }
    svg {
        height: 24px;
        width: auto;
        @media (max-width: 990px) {
            height: 21px;
        }
    }
    .navbar-brand {
        @media print, screen and (max-width: 48em) {
            position: absolute;
            left: 50%;
            margin-left: -64px;
            top: 0;
            height: 56px;
            display: flex;
        }
        img {
            width: auto;
            height: 30px;
            margin-left: 10px;
            @media (max-width: 990px) {
                height: 24px !important;
            }
        }
    }
    .collapse {
        flex-grow: 0;
    }
    .navCon {
        max-width: 1040px;
        padding: 0px 10px;
        @media print, screen and (min-width: 64em) {
            max-width: 1340px !important;
        }
    }
    .navbar-toggler {
        border: none !important;
        padding: 0;
    }
    .navbar-toggler-icon {
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
    }
    .dropdown-menu {
        margin: 0px;
        font-size: 14px;
        background: #ffffff;
        border-radius: 14px;
        padding: 7px;
        box-shadow: rgb(0 0 0 / 11%) 0 0 0 1px, rgb(0 0 0 / 5%) 0 10px 10px -5px;
        box-shadow: 0 2px 15px #00000017;
        &:hover {
            color: #f2f2f3;
        }
        & .divider {
            height: 1px;
            background: #ededee;
            margin: 8px 0;
            display: block;
        }
        &:before,
        &:after {
            border-radius: 0 0 4px;
            margin-left: -5px;
            left: 30%;
            transform: rotate(-135deg);
            height: 12px;
            width: 12px;
            position: absolute;
            content: "";
            top: -7px;
            background: rgba(0, 0, 0, 0.15);
        }
        &:after {
            background: #fff;
            top: -6px;
        }
    }
    .dropdown-item {
        border-radius: 6px;
        display: flex;
        align-items: center;
        padding: 8px 10px;
    }

    .nav-link {
        color: #717171;
        font-size: var(--font-sm);
        padding: 0.5rem 1rem !important;
        display: flex;
        align-items: center;
        border-radius: 16px !important;
        &.is-active {
            color: var(--black) !important;
            font-weight: 600;
        }
        &.saved {
            svg {
                width: 18px;
                fill: var(--accent);
            }
        }
    }
`;

NavCodify.propTypes = propTypes;

export default withRouter(NavCodify);
