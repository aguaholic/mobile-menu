import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    ul {
        list-style: none;
        margin: 0 5px;
    }
`;
const Item = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;

    .label {
        width: 30%;
        font-size: 10px;
        margin: 3px;
    }
    .sub-label {
        width: 25%;
        font-size: 8px;
        color: #A0A0A0;
        margin: 3px;
    }
`;

function List(props) {
    const list = [...props.data].map(item => (
        <Item key={item.id}>
            <div className="label">{item.item.toUpperCase()}</div>
            <div className="sub-label">{item.amount} products</div>
        </Item>
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
    data: PropTypes.array.isRequired,
}

export default List
