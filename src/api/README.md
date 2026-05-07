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

| 특징      | Fetch API                                 | Axios                                 |
| --------- | ----------------------------------------- | ------------------------------------- |
| 설치      | 내장 API(설치 불필요)                     | 별도 설치(`npm install axios`)        |
| JSON 변환 | `.json()` 과정이 필요                     | 자동 변환 지원                        |
| 에러 처리 | HTTP 에러(404, 500)를 `catch`에서 못 잡음 | HTTP 에러를 자동으로 reject 함        |
| 기능 확장 | 기본적인 기능 위주                        | 인터셉터, 요청 취소 등 고급 기능 제공 |

## async / await 개념

async / await는 Promise 기반의 비동기 코드를 훨씬 깔끔하고 읽기 좋게 작성하기 위한 문법입니다.

async : 함수 앞에 붙여 해당 함수가 항상 Promise를 반환하도록 합니다.
await : async 함수 안에서만 사용 가능하며, Promise가 해결(settled)상태가 될 때까지 코드 실행을 일시 정지합니다.

### 1-1) 기본 문법 : ① Fetch API + Promise 방식

```
function getPostPromise() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => console.log(data));
}

getPostPromise();
```

### 1-2) 기본 문법 : ② Fetch API + async / await 방식

```
async function getPostAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}

getPostAsync();
```

### 1-3) 기본 문법 : ③ Axios + async / await - GET 요청

```
async function getPosts() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    } catch(error) {
        console.log("Error : ", error);
    }
}

getPosts();
```

### 1-4) 기본 문법 : ④ Axios + async / await - GET(쿼리 파라미터 포함)

```
async function fetchUserPosts(userId) {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: { userId }
        });
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

fetchUserPosts(1);
```

### 1-5) 기본 문법 : ⑤ Axios + async / await - POST

```
async function createComment() {
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/comments", {
            postId: 12.
            name: "파이코딩",
            email: "pycoding@gmail.com",
            body: "Async / Await Axios"
        });
        console.log("Created comment : ", res.data);
    } catch(err) {
        console.log(err);
    }
}

createComment();
```

### 1-6) 기본 문법 : ⑥ 여러 비동기 동시 처리

```
async function fetchMultiple() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/comments?postId=1",
    ];

    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const [post, user, comments ] = await Promise.all(promises);

    console.log({ post, user, comments });
}

fetchMultiple();
```

### 2) 예외 처리(try ... catch)

비동기 통신은 실패 가능승이 항상 존재합니다. try...catch블럭을 활용해 에러를 처리합니다.

```
async function getPostWithTryCatch() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/9999'); // 존재하지 않는 ID

        if(!response.ok) {
            throw new Error(`에러 발생 : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log("error : ", err.message);
    } finally {
        console.log("종료");
    }
}
```

### 3) async 함수의 반환 값 활용

```
async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return res.json();
}

getUser(5).then(user => {
    console.log("User : ", user);
});
```

## 사용 패턴 요약

| 항목            | 권장 사용 상황                    |
| --------------- | --------------------------------- |
| `async / await` | 비동기 코드 가독성이 중요한 경우  |
| `Promise.all`   | 병렬 요청 처리 시                 |
| `try / catch`   | 안전한 에러 처리 시               |
| `Axios`         | JSON 자동 파싱 + 인터셉터 처리 시 |

① async / await는 비동기 코드를 동기처럼 작성하게 해 주는 패턴입니다.
② Fetch API / Axios 결합 시 네트워크 요청이 훨씬 명확해집니다.
③ 에러 처리는 try / catch로 일관되게 관리합니다.
④ 병렬 요청은 Promise.all로 효율적으로 수행합니다.
