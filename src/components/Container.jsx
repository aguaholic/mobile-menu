import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import Accordion from './Accordion';
import Bar from './Bar';
import List from './List';

import {itemList} from '../helpers/itemList.js'

export const Container = () => {
    const [open, setOpen] = useState(false)

    return  (
        <>
            <Accordion
                open={open}
                header={
                    <Bar>
                    <Bar.Left>
                    <button onClick={() => setOpen(!open)}>Botao</button>
                </Bar.Left>
                <Bar.Right>
                    <div style={{width: 20, height:20 , background:"blue"}}></div>
                </Bar.Right>
                </Bar>
                }
            >
            <List data={itemList} />
            </Accordion>
        </>
    )
}

Container.propTypes = {
    // open:  PropTypes.bool.isRequired,
    // header: PropTypes.node.isRequired,
    // children: PropTypes.node.isRequired,
}

