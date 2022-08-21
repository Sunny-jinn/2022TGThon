import React, { useState } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Template = () => {
  const [template, setTemplate] = useState("");
  const [color, setColor] = useState("");
  const userId = useParams();
  const navigate = useNavigate();

  const templateChangeHandler = (e: any) => {
    setTemplate(e.target.value);
  };

  const colorChangeHandler = (e: any) => {
    setColor(e.target.value);
  };

  const clickHandler = async () => {
    await axios
      .post("/user/template", {
        template: template,
        color: color,
        id: userId.userId,
      })
      .then((res) => {
        console.log(res);
        navigate(`/@${userId.userId}/posts`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="template-box  blog-center">
      <div>
        <p>템플릿을 설정하세요</p>
      </div>
      <div className="template">
        <div className="template-ex">
          <div className="template-first">
            <table>
              <tr>
                <td>
                  <div className="td-1"></div>
                </td>
                <td>
                  <div className="td-2"></div>
                </td>
                <td>
                  <div className="td-3"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-4"></div>
                </td>
                <td>
                  <div className="td-5"></div>
                </td>
                <td>
                  <div className="td-6"></div>
                </td>
              </tr>
            </table>
          </div>
          <input
            type="radio"
            name="template"
            value="tp-circle"
            onChange={templateChangeHandler}
          />
        </div>
        <div className="template-ex">
          <div className="template-first">
            <table>
              <tr>
                <td>
                  <div className="td-1-1"></div>
                </td>
                <td>
                  <div className="td-2-1"></div>
                </td>
                <td>
                  <div className="td-3-1"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-4-1"></div>
                </td>
                <td>
                  <div className="td-5-1"></div>
                </td>
                <td>
                  <div className="td-6-1"></div>
                </td>
              </tr>
            </table>
          </div>
          <input
            type="radio"
            name="template"
            value="tp-card"
            onChange={templateChangeHandler}
          />
        </div>
        <div className="template-ex">
          <div className="template-second">
            <table>
              <tr>
                <td className="td-1-2"></td>
              </tr>
              <tr>
                <td className="td-2-2"></td>
              </tr>
              <tr>
                <td className="td-3-2"></td>
              </tr>
              <tr>
                <td className="td-4-2"></td>
              </tr>
            </table>
          </div>
          <input
            type="radio"
            name="template"
            value="tp-text"
            onChange={templateChangeHandler}
          />
        </div>
      </div>
      <div className="template-color">
        <p>색상을 고르세요</p>
        <div className="template-color-select">
          <select onChange={colorChangeHandler}>
            <option>색상</option>
            <option value="white">White</option>
            <option value="purple">Purple</option>
          </select>
        </div>
      </div>
      <div className="template-btn">
        <button onClick={clickHandler}>다음</button>
      </div>
    </div>
  );
};

export default Template;
