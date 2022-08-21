import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/blog.css";
import { IPostState, PostsState } from "../store/index";
import Card from "../components/layout/Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { postActions } from "../store/index";
import Header from "../components/layout/Header";

interface Post {
  post: PostsState;
}

const Blog: React.FC = () => {
  const postList = useSelector((state: Post) => state.post.post);
  const dispatch = useDispatch();
  const userId = useParams();

  useEffect(() => {
    const getPost = async () => {
      const tempPost: any = [];
      await axios.get("/posts").then((res) => {
        res.data.posts.map((list: any) => {
          tempPost.push({
            id: list._id,
            title: list.title,
            author: list.slug,
            description: list.description,
            markdown: list.markdown,
            thumbnail: list.thumbnail,
          });
        });
        dispatch(postActions.setPost(tempPost));
      });
    };
    getPost();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="card-container blog card-background">
        {postList.map((list: IPostState) => (
          <Card
            key={list.id}
            id={list.id}
            title={list.title}
            author={list.author}
            description={list.description}
            thumbnail={list.thumbnail}
          />
        ))}
        <Link to={`/@${userId.userId}/newpost`}>
          <button className="postBtn">글쓰기</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
