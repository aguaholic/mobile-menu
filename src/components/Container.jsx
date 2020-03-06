import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Accordion from './Accordion';
import Bar from './Bar';

const Container = () => {
    const [open, setOpen] = useState(false)

    return  (
        <>
        <Accordion
            open={open}
            header={<Bar>
            <Bar.Left>
                <p>image</p>
                <button onClick={() => setOpen(!open)}>Botao</button>
            </Bar.Left>
            <Bar.Right>
                <p>icon shop cart</p>
            </Bar.Right>
            </Bar>
            }
            children={<p>hey you</p>}
        />
        </>
    )
}

Container.propTypes = {
    open:  PropTypes.bool.isRequired,
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default Container
