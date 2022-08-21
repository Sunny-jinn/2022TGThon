import React, { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewPost = (): JSX.Element => {
  const [thumbImg, setThumbImg] = useState<string>("");
  const [thumbFile, setThumbFile] = useState<any>();
  const userId = useParams();
  console.log(userId.userId);

  let thPath = "";

  const editRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const clickHandler = async () => {
    if (thumbFile) {
      const formData = new FormData();
      formData.append("img", thumbFile);
      await axios
        .post("/img", formData)
        .then(async (res) => {
          thPath = await res.data.url;
        })
        .catch(() => {
          console.log("failed");
        });
      axios
        .post("/posts/new", {
          post: {
            title: titleRef.current?.value,
            author: userId.userId,
            description: descRef.current?.value,
            markdown: editRef.current?.getInstance().getMarkdown(),
            thumbnail: thPath,
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/@${userId.userId}/posts`);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("/posts/new", {
          post: {
            title: titleRef.current?.value,
            author: userId.userId,
            description: descRef.current?.value,
            markdown: editRef.current?.getInstance().getMarkdown(),
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/@${userId.userId}/posts`);
        })
        .catch((err) => console.log(err));
    }
  };

  const uploadImageHandler = () => {
    imgRef.current?.click();
  };

  const changeImageHandler = (e: any) => {
    e.preventDefault();

    setThumbFile(e.target.files[0]);
    setThumbImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="new-post">
      <div className="new-post-box">
        <div className="new-post-left">
          <div className="title-box">
            <input
              ref={titleRef}
              className="title"
              placeholder="제목을 입력하세요."
            />
          </div>
          <div className="description-box">
            <textarea
              ref={descRef}
              className="description"
              placeholder="간단한 설명을 해주세요."
            />
          </div>
        </div>
        <div className="new-post-right">
          <div className="image-box">
            <input
              type="file"
              accept="image/*"
              className="image-input"
              ref={imgRef}
              onChange={changeImageHandler}
            />
            <label className="input-label" onClick={uploadImageHandler}>
              썸네일 업로드
            </label>
            <img src={thumbImg} alt="썸네일을 업로드 해보세요" />
          </div>
        </div>
      </div>
      <div className="new-post-editor">
        <Editor previewStyle="vertical" height="600px" ref={editRef} />
      </div>
      <button onClick={clickHandler}>포스트</button>
    </div>
  );
};

export default NewPost;
