import '../../style/login.scss';
export default function Login() {
  return (
    <>
      <div className='container'>
        <div className='screen'>
          <div className='screen__content'>
            <form className='login'>
              <div className='login__field'>
                <i className='login__icon fas fa-user'></i>
                <input
                  type='text'
                  className='login__input'
                  placeholder='E-mail'
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  type='password'
                  className='login__input'
                  placeholder='Senha'
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
