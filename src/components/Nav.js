import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = ({ categories }) => {
    return (
        <nav style={styles.nav}>
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.route} style={styles.links}>{category.title}</NavLink>
            })}
        </nav>
    );
};

const styles = {
    nav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1976d2",
    },
    links: {
        textDecoration: "none",
        padding: "2%",
        margin: "0px",
    },
};