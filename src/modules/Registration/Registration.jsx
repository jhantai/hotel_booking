import React, {useState} from 'react';
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
      const [email, setEmail] = useState("");
    
      const registerUser = async () => {
        await axios.post("http://localhost:5000/register", {
          name: name,
          email: email
        });
    
        alert("Пользователь отправлен в Telegram");
      };
  return (
     <div>
          <h2>Регистрация</h2>
    
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
    
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <button onClick={registerUser}>
            Зарегистрироваться
          </button>
        </div>
      
    
    
   
  )
}

export default Registration