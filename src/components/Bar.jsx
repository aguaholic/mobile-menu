import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BarLeft = styled.div`
    background-color: pink;
    height: 100%;
`;
const BarRight = styled.div`
    background-color: red;
    height: 100%;
`;

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: lightblue;

    ${BarLeft} {
    float: left;
    }

    ${BarRight} {
    float: right;
    }
`;

const Bar = ({ children }) => (
    <Container>
        {children}
    </Container>
)

Bar.Left = BarLeft
Bar.Right = BarRight

Bar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Bar
