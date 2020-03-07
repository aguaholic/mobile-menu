import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    background-color: lightgrey;
    ul {
        list-style: none;
        margin: 0 5px;
    }
`;

function List(props) {
    const list = [...props.data].map(item => (
        <li>
            <label>{item.item}</label>
            <label>{item.amount}</label>
        </li>
    ))

    return (
        <Container>
            <ul>
                {list}
            </ul>
        </Container>

    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

export default List
