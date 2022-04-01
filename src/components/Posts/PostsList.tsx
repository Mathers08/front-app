import React from 'react';
import styled from "styled-components";
import EllipseBlock from "../EllipseBlock";
import Loader from "../Loader";
import Post from "./Post";
import {IPost, IUser} from "../../types";
import quotes from '../../assets/quotes.png';

interface PostsListProps {
  users: IUser[];
  posts: IPost[];
}

const PostsList = ({users, posts}: PostsListProps) => {
  const showPosts = () => {
    if (!posts[0]) return <Loader/>;
    else {
      const user = users.find((u) => u.id === posts[0].userId);
      return (
        <Posts>
          <Header>3 актуальных поста {user && user.company.name}</Header>
          {posts.map(post => (
            <Post key={post.id} post={post}/>
          ))}
        </Posts>
      )
    }
  }

  return (
    <PostsBlock>
      <LeftEllipse>
        <EllipseBlock/>
      </LeftEllipse>
      <Image src={quotes} alt=""/>
      {showPosts()}
    </PostsBlock>
  );
};

const Posts = styled.div`
  margin-right: 80px;
  @media (max-width: 767px) {
    margin: 0;
  }
`;
const PostsBlock = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 74%;
  float: right;
  @media (max-width: 767px) {
    flex-direction: column;
    float: initial;
    margin: 0 auto;
  }
`;
const LeftEllipse = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
`;
const Header = styled.h2`
  font-weight: 600;
  color: #384758;
  font-size: 36px;
`;
const Image = styled.img`
  width: 100px;
  height: 78px;
  margin: 43px 40px 0 0;
  @media (max-width: 468px) {
    margin: 20px 0 0 auto;
  }
`;

export default PostsList;
