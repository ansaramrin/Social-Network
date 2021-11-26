import { useState } from "react"
import './Login.css';
import { useNavigate } from "react-router-dom";


export default function Login({ authed, setAuthed }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    if (username === 'Ansar' && password === 'ansar123') {
      setAuthed(true);
      navigate('/', { replace: true })
    } else {
      setErrorMessage('Username or password is not correct!');
    }
  }

  return (
   <div className="container-login">
    <h1>
     Log In
    </h1>
    <form onSubmit={onSubmit}>
      <div class="form-group">
        <input type="text" class="form-control" id="user" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
        <small class="form-text">The correct username is: Ansar</small>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
        <small class="form-text">The correct password is: ansar123</small>
      </div>
      <button type="submit" class="button-78">Submit</button>
    </form>
    {errorMessage && (
      <div class="alert alert-danger" role="alert">
        {errorMessage}
       </div>
    )}
    </div>

    
    
  )
}