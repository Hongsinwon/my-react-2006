import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Profile() {
  const user = useContext(UserContext);

  if (!user) {
    return <h1>로그인 정보가 없습니다.</h1>;
  }

  return <h1>{user.name}</h1>;
}

export default Profile;
