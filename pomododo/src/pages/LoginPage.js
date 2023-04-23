// import { signInWithGoogle } from "../Firebase"
// import { useNavigate } from 'react-router-dom'
// import styled from 'styled-components';

// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #a7c957;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   margin-bottom: 24px;
// `;

// const Button = styled.button`
//   padding: 12px 24px;
//   background-color: #4285F4;
//   color: #FFFFFF;
//   font-size: 18px;
//   border-radius: 4px;
//   border: none;
//   cursor: pointer;
//   margin-bottom: 24px;
// `;

// const UserContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserName = styled.h2`
//   font-size: 24px;
//   margin-right: 12px;
// `;

// const UserImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// `;

// function Login() {
//   const navigate = useNavigate();

//   return (
//     <LoginContainer>
//       <Title>Welcome to Pomododo</Title>
//       <Button onClick={() =>{signInWithGoogle(); navigate("/selectmethod");}}>Login</Button>
//       {localStorage.getItem("name") && (
//         <UserContainer>
//           <UserName>{localStorage.getItem("name")}</UserName>
//           <UserImage src={localStorage.getItem("photoURL")} alt="User profile picture" />
//         </UserContainer>
//       )}
//     </LoginContainer>
//   );
// }

// export default Login;


import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #a7c957;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  border: 2px solid #4285f4;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #4285f4;
  color: #ffffff;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-bottom: 24px;
  border: 2px solid #4285f4;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.h2`
  font-size: 24px;
  margin-right: 12px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

function Login() {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <Title>Welcome to Pomododo</Title>
      <Button onClick={() => { signInWithGoogle(); navigate("/selectmethod"); }}>Login</Button>
      {localStorage.getItem("name") && (
        <UserContainer>
          <UserName>{localStorage.getItem("name")}</UserName>
          <UserImage src={localStorage.getItem("photoURL")} alt="User profile picture" />
        </UserContainer>
      )}
    </LoginContainer>
  );
}

export default Login;
