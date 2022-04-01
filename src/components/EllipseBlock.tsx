import React from "react";
import circle from '../assets/circle.png';
import ellipse from "../assets/ellipse.png";
import styled from "styled-components";

const CircleRow = () => {
  return (
    <div style={{margin: '-13px 0'}}>
      {Array.from({ length: 16 }, (_, i) => (
        <img src={circle} key={i} alt='' style={{marginLeft: '7px'}} width={3} height={3}/>
      ))}
    </div>
  );
}

const CircleMatrix = () => {
  return (
    <section>
      {Array.from({ length: 16 }, (_, i) => (
        <CircleRow key={i}/>
      ))}
    </section>
  );
}

const EllipseBlock = () => {
  return (
    <>
      <CircleMatrix/>
      <Image src={ellipse} alt=""/>
    </>
  )
}

const Image = styled.img`
  position: absolute;
  right: 28px;
  top: 101%;
  @media(max-width: 767px) {
    z-index: -1;
  }
`;

export default EllipseBlock;