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
import Img1 from '../images/carousel/img1.jpg'
import Img2 from '../images/carousel/img2.jpg'
import Img3 from '../images/carousel/img3.jpg'
import Img4 from '../images/carousel/img4.jpg'
import Img5 from '../images/carousel/img5.jpg'
import Img6 from '../images/carousel/img6.jpg'
import Img7 from '../images/carousel/img7.jpg'
import Img8 from '../images/carousel/img8.jpg'
import Img9 from '../images/carousel/img9.jpg'

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

const ImgItemContainer = styled.div`
  max-height: 200px;
  width: 100px;
`

const ImgItem = styled.img.attrs({
    alt: "Stox socks"
})`
    margin: 0;
`

export const Container = () => {
    const [open, setOpen] = useState(false)
    const [openList, setListOpen] = useState(false)

    return  (
        <>
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
                <Carousel>
                    <ImgItemContainer><ImgItem src={Img1}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img2}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img3}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img4}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img5}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img6}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img7}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img8}/></ImgItemContainer>
                    <ImgItemContainer><ImgItem src={Img9}/></ImgItemContainer>
                </Carousel>
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
