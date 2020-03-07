import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BarLeft = styled.div`
    justify-content: flex-start;
`;

const BarRight = styled.div`
    justify-content: flex-end;
`;

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid lightgrey;
    padding: 0 8px;

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
