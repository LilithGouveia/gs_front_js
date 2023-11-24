import { useNavigate } from 'react-router-dom';
import '../style/home.scss';
export default function Header() {
  const navigate = useNavigate();
  const userName = sessionStorage.getItem('userName');
  const userEmail = sessionStorage.getItem('userEmail');

  const handleLogout = () => {
    sessionStorage.removeItem('token-user');
    sessionStorage.removeItem('data-user');
    navigate('/');
  };
  return (
    <>
      <header>
        <nav>
          <div className='wrapper'>
            <img
              src='../../../public/vv-logo.png'
              alt='imagem logo'
              className='img--logo'
            />
            <p>Olá {JSON.parse(userName)}, tudo bem? Seu email é {JSON.parse(userEmail)}
            </p>
            <div className='logo'>
              <a onClick={handleLogout}>Sair</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
