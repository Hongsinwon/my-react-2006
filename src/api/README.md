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
