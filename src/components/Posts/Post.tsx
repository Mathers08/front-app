import React from 'react';
import styled from "styled-components";
import {IPost} from "../../types";

interface PostProps {
  post: IPost;
}

const Post = ({post}: PostProps) => {
  return (
    <>
      <PostHeader>{post.title}</PostHeader>
      <PostInner>{post.body}</PostInner>
    </>
  );
};

const PostHeader = styled.div`
  font-weight: 500;
  color: #384758;
  font-size: 24px;

  &:first-letter {
    text-transform: capitalize;
  }
`;
const PostInner = styled.p`
  margin: 0 0 20px 0;
  font-weight: 400;
  color: #606F81;
  font-size: 16px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export default Post;
