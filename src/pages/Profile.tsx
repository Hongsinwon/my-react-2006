import useUserStore from '../store/useStore';

function Profile() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  if (!user) {
    return <h1>로그인 정보가 없습니다.</h1>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Profile;
