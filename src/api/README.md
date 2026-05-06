# Api 이론

## Fetch API

브라우져 내장 네트워크 요청 API로, 서버에 HTTP 요청을 보내고 응답을 받는 표준 기능입니다.

### 1) 기본구조

```
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    title: 'test',
    body: 'test',
    userId: 1,
  };

    fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

### 2) GET 요청 예시

```
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => console.log(posts))
    .catch((err) => console.error('Fetch Error : ', err));
```

### 3) POST 요청 예시

```
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Hello 파이코딩',
      body: 'This is PyCoding',
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((post) => console.log('Created Post : ', post))
    .catch((err) => console.log(err));
```

## Axios

Axios는 외브 라이브러리 기반 HTTP 클라이언트입니다. 자동 JSON 변환, 요청 취소, 인터셉터, 응답 시간 초과 설정등의 기능을 내장하고 있어 자주 사용되고 있습니다.

### 1) 설치

```
npm install axios
```

### 2) 기본 구조

```
import axios from "axios";

axios.get(url, config)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
```

### 3) GET 요청 예

```
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
```

### 4) POST 요청 예

```
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Axios Post",
    body: "Create Axios Pycoding",
    userId: 99
})
    .then(res => console.log("Create Axios : ", res.data))
    .catch(err => console.log(err));
```

## Fetch API vs Axios 비교

| 특징 | Fetch API | Axios |
| --- | --- | --- |
| 설치 | 내장 API(설치 불필요) | 별도 설치(`npm install axios`) |
| JSON 변환 | `.json()` 과정이 필요 | 자동 변환 지원 |
| 에러 처리 | HTTP 에러(404, 500)를 `catch`에서 못 잡음 | HTTP 에러를 자동으로 reject 함 |
| 기능 확장 | 기본적인 기능 위주 | 인터셉터, 요청 취소 등 고급 기능 제공 |

