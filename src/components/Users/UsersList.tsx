import React, {useState} from 'react';
import styled from "styled-components";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import EllipseBlock from "../EllipseBlock";
import Loader from "../Loader";
import User from "./User";
import {IUser} from "../../types";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface UsersListProps {
  users: IUser[];
  onUserClick: (id: number) => void;
  selectedUserId: number;
}

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <img onClick={() => swiper.slidePrev()} width={40} height={40} src={leftArrow} alt=""/>;
};
const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <img onClick={() => swiper.slideNext()} width={40} height={40} src={rightArrow} alt=""/>;
};
const SwiperBreakpoints = {
  940: {slidesPerView: 4},
  626: {slidesPerView: 3},
  468: {slidesPerView: 2},
  0: {slidesPerView: 1}
}

const UsersList = ({users, onUserClick, selectedUserId}: UsersListProps) => {
  return (
    <UsersBlock>
      <Swiper style={{display: 'flex', width: '90%', margin: '0 auto', flexDirection: 'column-reverse'}} slidesPerView={4} breakpoints={SwiperBreakpoints}>
        <Arrows>
          <SwiperButtonPrev/>
          <SwiperButtonNext/>
        </Arrows>
        <div>
          {!users ? <Loader/> : users.map(user => (
            <SwiperSlide key={user.id}>
              <User selectedUser={user.id === selectedUserId} onUserClick={onUserClick} user={user}/>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <RightEllipse>
        <EllipseBlock/>
      </RightEllipse>
    </UsersBlock>
  );
};

const UsersBlock = styled.div`
  position: relative;
  overflow: hidden;
`;
const Arrows = styled.div`
  margin: auto auto 25px auto;
  width: 90px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const RightEllipse = styled.div`
  position: absolute;
  top: 40px;
  right: -32px;
`;

export default UsersList;