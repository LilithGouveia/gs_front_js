import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../style/login.scss';
export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;

    try {
      const response = await fetch('http://localhost:3000/usuarios');
      user = await response.json();
    } catch (error) {
      alert('Ocorreu um erro no processamento da sua solicitação!');
    }

      if (user.email == usuario.email && user.senha == usuario.senha) {
        const tokenUser = Math.random().toString(16).substring(2);
        sessionStorage.setItem('token-user', tokenUser);
        sessionStorage.setItem('userName', JSON.stringify(user.name));
        sessionStorage.setItem('userEmail', JSON.stringify(user.email));
        navigate('/home');
        return;
      } else {
        alert('Login ou senha incorretos!');
        setUsuario({
          email: '',
          senha: '',
        });
      }

  };
  
  return (
    <>
      <div className='container'>
        <div className='screen'>
          <div className='screen__content'>
            <form className='login' 
            onSubmit={handleSubmit}
            >
              <div className='login__field'>
                <i className='login__icon fas fa-user'></i>
                <input
                  type='text'
                  className='login__input'
                  placeholder='E-mail'
                  name="email"
                  // defaultValue={usuario.email}
                  onChange={handleChange}
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  type='password'
                  className='login__input'
                  placeholder='Senha'
                  name="senha"
                  // defaultValue={usuario.senha}
                  onChange={handleChange}
                />
              </div>
              <button className='button login__submit'>
                <span className='button__text'>entrar</span>
                <i className='button__icon fas fa-chevron-right'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
