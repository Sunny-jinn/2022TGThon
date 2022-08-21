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

const UserPage = () => {
  const postList = useSelector((state: Post) => state.post.post);
  const dispatch = useDispatch();
  const userId = useParams();
  const [userColor, setUserColor] = useState("");
  const [userTp, setUserTp] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const tempPost: any = [];
      await axios.get(`/posts/mypage/${userId.userId}`).then((res) => {
        res.data.posts.map((list: any) => {
          tempPost.push({
            id: list._id,
            title: list.title,
            author: list.author,
            description: list.description,
            markdown: list.markdown,
            thumbnail: list.thumbnail,
          });
        });
        setUserColor(res.data.userColor);
        setUserTp(res.data.userTp);
        dispatch(postActions.setPost(tempPost));
      });
    };
    getPost();
  }, [dispatch]);

  return (
    <div className={userColor}>
      <Header />

      <div className="card-container blog">
        {postList.map((list: IPostState) => (
          <Card
            template={userTp}
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
        <Link to={`/@${userId.userId}/start`}>
          <button className="updateBtn">정보 수정</button>
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
