import React from 'react';
import {IUser} from "../../types";
import styled from "styled-components";

interface StyleProps {
  selectedUser: boolean;
}

interface ComponentProps {
  user: IUser;
  onUserClick: (id: number) => void;
}

type UserProps = StyleProps & ComponentProps;

const User = ({user, onUserClick, selectedUser}: UserProps) => {
  const handleClick = () => onUserClick(user.id);

  return (
    <SingleUser onClick={handleClick}>
      <Image selectedUser={selectedUser} src={`https://i.pravatar.cc/350?img=${user.id}`} alt=""/>
      <Name selectedUser={selectedUser}>{user.name}</Name>
      <CompanyName selectedUser={selectedUser}>{user.company.name}</CompanyName>
    </SingleUser>
  );
};


const SingleUser = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 5px;
  padding-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;
const Name = styled.div<StyleProps>`
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.selectedUser ? '#FE8700' : '#384758'};
  transition: ${props => props.selectedUser && '.6s'};
`;
const CompanyName = styled.div<StyleProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.selectedUser ? '#FE8700' : '#606F81'};
  transition: ${props => props.selectedUser && '.6s'};
`;
const Image = styled.img<StyleProps>`
  border-bottom: ${props => props.selectedUser && '5px solid #FE8700'};
  transition: ${props => props.selectedUser && '.6s'};
  @media (max-width: 100vw) {
    width: 100%;
    height: auto;
  }
`;

export default User;