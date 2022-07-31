import React from "react";


function LoginForm(props){
  return (
    <form action="" autocomplete="off">
      <fieldset>
        <h3>로그인</h3>
        <ul>
          <li>
            <label for="id">아이디</label>
            <input type="text" id="id" placeholder="아이디"/>
          </li>
          <li>
            <label for="pwd">비밀번호</label>
            <input type="password" size="0" id="pwd" placeholder="비밀번호"/>
          </li>
        </ul>
        <button type="submit">로그인</button>
        <button type="submit">회원가입</button>
      </fieldset>
    </form>
  );
}

export default LoginForm;