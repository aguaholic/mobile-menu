import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    body {
        font-family: 'Muli', serif;
    }
`
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingBag, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Accordion from './Accordion';
import Bar from './Bar';
import List from './List';

import {daily} from '../helpers/itemList.js'
import Logo from '../images/logo.png'

const Button = styled.button`
    padding: 0;
    width: 15px;
`;
const Img = styled.img`
    margin: 2px;
    width: 100%;
`;
const ImgContainer = styled.div`
    max-width: 100px;
    margin: 5px 8px 0;
`;
const Title = styled.p`
    margin: 0 22%;
    font-size: 12px;
    font-weight: bold;
`;

export const Container = () => {
    const [open, setOpen] = useState(false)
    const [openList, setListOpen] = useState(false)

    return  (
        <>
            <GlobalStyles />
            <Accordion
                open={open}
                header={(
                    <Bar>
                        <Bar.Left>
                            <Button onClick={() => setOpen(!open)}>
                                {!open
                                    ?  <FontAwesomeIcon icon={faBars} />
                                    :  <FontAwesomeIcon icon={faTimes} />}
                            </Button>
                            <ImgContainer>
                                <Img src={Logo} />
                            </ImgContainer>
                        </Bar.Left>
                        <Bar.Right>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </Bar.Right>
                    </Bar>
                )}>
            {/* <Slider /> */}
                <Accordion
                    open={openList}
                    header={
                        <Bar>
                            <Bar.Left>
                                <Title>{daily.title.toUpperCase()}</Title>
                            </Bar.Left>
                            <Bar.Right>
                                <Button onClick={() => setListOpen(!openList)}>
                                    {openList
                                        ?  <FontAwesomeIcon icon={faChevronUp} />
                                        :  <FontAwesomeIcon icon={faChevronDown} />}
                                </Button>
                            </Bar.Right>
                    </Bar>
                    }>
                    <List data={daily.items} />
                </Accordion>
            </Accordion>
            
        </>
    )
}

Container.propTypes = {
    open:  PropTypes.bool.isRequired,
}

