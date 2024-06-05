import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from "axios";
import Cookies from 'js-cookie';


function Login() {
 const [email , setEmail] = useState('');
 const [password , setPassword] = useState('');
 const navigate = useNavigate();
 const [cookies, setCookie] = useCookies(['auth']);

const handleSubmit = async () => {
  console.log('*******',email, password);

  const formData = {
    email,
    password,
  }

  const res = await axios.post('https://97f9-49-205-217-29.ngrok-free.app/api/auth/sign_in' ,formData )

  if (res) {

    console.log(res);
    const access_token = res?.headers["access-token"]
    const client = res?.headers["client"]
    const token_type = res?.headers["token-type"]

    Cookies.set('access_token', access_token, { expires: 7 });


    navigate('/dashboard')
  }

}
  return (
    <>
      <h1>Login page</h1>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col bg-gray-200 p-10 gap-5">
          <input type="text" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
