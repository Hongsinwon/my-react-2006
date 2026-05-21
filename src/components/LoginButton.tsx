import useUserStore from '../store/useStore';

function LoginButton() {
  const login = useUserStore((state) => state.login);

  const handleLogin = () => {
    login({
      name: 'PyCoding',
      email: 'pycoding@test.com',
    });
  };

  return <button onClick={handleLogin}>로그인</button>;
}

export default LoginButton;
