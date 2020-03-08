import React, { useState } from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingBag, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Accordion from './Accordion'
import Bar from './Bar'
import List from './List'
import Carousel from './Carousel'

import {daily} from '../helpers/itemList'
import Logo from '../images/logo.png'

// import { createGlobalStyle } from "styled-components";
// const GlobalStyles = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
//     body {
//         font-family: 'Muli', serif;
//     }
// `
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

const StyledImage = styled.img.attrs({ 
    alt: "Vrouwen sportsokken",
    src: "https://images.prismic.io/stox/c5834f1d-9023-44f8-a4bd-40862e18308a_My+Post+%2887%29.jpg?auto=format&amp;fit=crop&amp;w=16&amp;ixlib=react-8.6.4",
    sizes: "100vw"
    })`
  position: absolute; 
  top: 0px; 
  left: 0px; 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  object-position: center center; 
  opacity: 0; 
  transition-delay: 500ms;
`

export const Container = () => {
    const [open, setOpen] = useState(false)
    const [openList, setListOpen] = useState(false)

    return  (
        <>
            {/* <GlobalStyles /> */}
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

                <Carousel>
                    <div style={{ height: 200, width: 100, backgroundColor: 'blue'}}></div>
                    <div style={{ height: 200, width: 100, backgroundColor: 'blue'}}></div>
                    <div style={{ height: 200, width: 100, backgroundColor: 'blue'}}></div>
                    <div style={{ height: 200, width: 100, backgroundColor: 'blue'}}></div>
                    <div style={{ height: 200, width: 100, backgroundColor: 'blue'}}></div>

                    {/* <StyledImage  /> */}
                    {/* <StyledImage  /> */}
                    {/* <StyledImage  /> */}
                    {/* <StyledImage  /> */}
                    {/* <StyledImage  /> */}
                </Carousel>

            
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
