import React from 'react';
import PropTypes from 'prop-types'

const Accordion = ({ header, children, open }) => (
    !open
        ? (
            <Container>{header}</Container>
        ) : (
            <Container>
                {header}
                {children}
            </Container>
        )
)

Accordion.propTypes = {
    open:  PropTypes.bool.isRequired,
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default Accordion
