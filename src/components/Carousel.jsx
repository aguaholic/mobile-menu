import * as React from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`
    position: relative;
    padding: 10px;
`;

const CarouselContent = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`;

const CarouselItem = styled.div`
    width: 33%;
    margin-left: 10px;

    :first-child {
        margin-left: 0;
    }
`;

export const Carousel = ({ children }) => {
    const slides = React.Children.toArray(children)
    const length = slides.length

  return (
    length > 0 && (
      <CarouselContainer>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>{slide}</CarouselItem>
          ))}
        </CarouselContent>
      </CarouselContainer>
    )
  )
};

export default Carousel
