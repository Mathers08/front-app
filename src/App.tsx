import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {PostsList, UsersList} from "./components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(-1);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(users);
      } catch (error) {
        alert('Ошибка при запросе данных!');
        console.error(error);
      }
    };
    fetchedData();
  }, []);

  const onUserClick = (id: number) => {
    setSelectedUserId(id);
    const fetchedData = async () => {
      try {
        const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            userId: id,
            _limit: 3
          }
        })
        setPosts(posts);
      } catch (error) {
        alert('Ошибка при запросе данных!');
        console.error(error);
      }
    };
    fetchedData();
  }

  return (
    <Wrapper>
      <Header>Наши топ-блогеры</Header>
      <Paragraph>Лучшие специалисты в своем деле, средний опыт работы в профессии - 27 лет</Paragraph>
      <UsersList users={users} onUserClick={onUserClick} selectedUserId={selectedUserId}/>
      <PostsList users={users} posts={posts}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 0;
  font-family: Poppins, sans-serif;
`;
const Header = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  color: #384758;
`;
const Paragraph = styled.p`
  margin: 20px auto;
  width: 317px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  color: #606F81;
`;

export default App;
