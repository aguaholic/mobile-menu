import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BarLeft = styled.div`
    justify-content: flex-start;
    background-color: pink;
`;

const BarRight = styled.div`
    justify-content: flex-end;
    background-color: red;
`;

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: lightblue;
    display: flex;

    ${BarLeft}, ${BarRight} {
        width: 50%;
        display: flex;
        align-items: center;
        height: 100%;
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
