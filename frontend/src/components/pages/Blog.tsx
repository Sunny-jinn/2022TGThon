import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Blog.css";
import { IPostState, PostsState } from "../../store/index";
import Card from "../layout/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { postActions } from "../../store/index";

interface Post {
  post: PostsState;
}

const Blog: React.FC = () => {
  const postList = useSelector((state: Post) => state.post.post);
  const dispatch = useDispatch();

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
          });
        });
        dispatch(postActions.setPost(tempPost));
      });
    };
    getPost();
  }, [dispatch]);

  return (
    <div className="card-container blog">
      {postList.map((list: IPostState) => (
        <Card
          key={list.id}
          id={list.id}
          title={list.title}
          author={list.author}
          description={list.description}
        />
      ))}
      <Link to="/newpost">
        <button className="postBtn">글쓰기</button>
      </Link>
    </div>
    // <div>
    //   <div>
    //     <p>Title</p>
    //     <p>Author</p>
    //     <p>Text</p>
    //   </div>
    // </div>
  );
};

export default Blog;
