import React from 'react'
import PropTypes from 'prop-types'

const Accordion = ({ header, children, open }) => (
    !open
        ? (
            <div>{header}</div>
        ) : (
            <div>
                {header}
                {children}
            </div>
        )
)

Accordion.propTypes = {
    open:  PropTypes.bool.isRequired,
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default Accordion
