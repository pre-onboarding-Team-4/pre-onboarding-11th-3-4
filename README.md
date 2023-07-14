##  Issue List 애플리케이션

원티드 프론트엔드 인턴십 3주차 과제

## 팀원

| [@JYROH](https://github.com/ghgt1) | [@Dain Kim](https://github.com/ekdls1218) | [@guen9310](https://github.com/guen9310) | [@Hyeondoonge](https://github.com/Hyeondoonge) | [@JBS](https://github.com/JB-JS) | [@Sangeun Hwang](https://github.com/hsejsx) |
| ----------------------------------------- | ---------------------------------------- | ---------------------------------- | ---------------------------------------------- | -------------------------------- | ------------------------------------------- |
| 노준영                                    | 김다인                                  | 권부근                             | 신현정                                         | 정범수                           | 황상은                                      |

## 실행 방법

1. 먼저 다음 명령어를 사용해서 로컬 환경으로 복사본을 가져옵니다.

```
git clone https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-3-4.git
```

2. 가져온 복사본으로 이동합니다.

```
cd pre-onboarding-11th-1-4
```

3. 가져온 프로젝트의 종속성을 설치하세요.

```
npm install
```

4. 이 프로젝트는 '.env'를 사용합니다. 다음 단계를 따라 .env를 설정해 주세요.

```
1. 루트 디렉토리에 '.env'파일을 생성 합니다.
2. 텍스트 편집기로 '.env' 파일을 엽니다.
3. '.env' 파일에 다음 변수와 해당하는 값을 입력하세요.

REACT_APP_API_END_POINT=https://api.github.com
```

5. 설치가 완료되었고, .env 설정이 완료 되었다면 다음 명령어로 프로젝트를 실행할 수 있습니다.

```
npm start
```

## 배포 링크

[바로가기](https://pre-onboarding-11th-3-4.netlify.app/)

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black"/> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=&logoColor=black"/>

## 팀규칙

### 1. 커밋 컨벤션

```
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리펙토링
- test: 테스트 코드, 리펙토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정
- design: 스타일 작업
```

### 2. 파일/폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜axios.ts
 ┃ ┣ 📜issues.ts
 ┃ ┗ 📜util.ts
 ┣ 📂components
 ┃ ┣ 📜AdBlock.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜IssueBlock.tsx
 ┃ ┗ 📜LoadSpinner.tsx
 ┣ 📂constant
 ┃ ┗ 📜pathParam.ts
 ┣ 📂contexts
 ┃ ┣ 📜IssueContextProvider.tsx
 ┃ ┗ 📜IssuesContextProvider.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useIntersectionObserver.ts
 ┃ ┣ 📜useIssue.ts
 ┃ ┗ 📜useIssues.ts
 ┣ 📂pages
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜IssueDetail.tsx
 ┃ ┗ 📜IssueList.tsx
 ┣ 📂types
 ┃ ┗ 📜issuesApi.ts
 ┣ 📂utils
 ┃ ┗ 📜formatTime.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.tsx
 ┣ 📜index.tsx
 ┣ 📜palette.ts
 ┗ 📜router.tsx
```

### 3. Style 컨벤션

```
- Styled-Component를 활용한 스타일링
- style.js를 따로가져가지 않고, 각 jsx 컴포넌트 하단부에 스타일 작성
```

## 서비스 소개

### 1. 기능

- 깃허브 특정 저장소의 오픈된 이슈 목록과, 이슈 상세를 확인할 수 있습니다.
- 해당 배포 링크에서는 facebook의 react 이슈 목록과 이슈 상세를 확인할 수 있습니다.
- 화면을 아래로 스크롤 할 시 이슈 목록을 추가 로딩합니다.

<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://github.com/hsejsx/wanted-internship/assets/108166730/3e6138eb-f23f-4f1a-b494-cf617594f9f0"
                    alt=""></td>
            <td>이슈 리스트<ul>
                    <li>화면을 아래로 스크롤할 시 이슈 목록이 추가 로딩됩니다</li>
                    <li>이슈 4개가 나오면 광고 1개가 나오도록 설정했습니다</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/hsejsx/wanted-internship/assets/108166730/9f14acb8-174f-4fa9-ad62-678cc81b5dea"
                    alt=""></td>
            <td>이슈 상세<ul>
                    <li>마크다운을 표시합니다</li>
                    <li>이슈 리스트를 통해 들어오면 캐싱된 데이터를, url를 입력해 접근하면 데이터를 요청하여 렌더링합니다</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src=""
                    alt=""></td>
            <td>에러 화면<ul>
                    <li>에러</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### 2. Best Practice

> 모든 팀원들이 참여하여 중심 기능을 구현하는 최선의 방법들을 선정했습니다.

---

#### 📌 Context API를 활용한 API 연동 Best Practice 선정

**context와 custom Hook를 활용한 issues, issue 전역상태로 관리**

❓선정 이유?

- 목록 이슈 데이터와 상세 이슈 데이터를 IssuesContext, IssueContext로 각각 관리하도록 하였으며, 컴포넌트 단에서 쉽게 사용하도록 custom Hook을 활용하여 useIssues(), useIssue() 상태관리 로직들을 추상화하였습니다. 이를 통해 상태와 기능을 캡슐화하고 재사용 가능한 로직을 구축했습니다.
- 빠른 렌더링을 위해, 데이터 통신 비용이 드는 것보다 캐싱된 데이터를 우선 확인하는 것이 성능적으로 더 좋다고 생각하여 이슈 요청 시 캐싱된 데이터가 있으면 캐싱된 데이터를, 없을 시 요청하여 처리했습니다.

```ts
// useIssue.ts
// import 생략
const pathParam: GetIssuePathParam = {
  repo: 'react',
  owner: 'facebook',
  issue_number: 0,
};

export function useIssue() {
  const context = useContext(IssueContext);

  if (!context) throw new Error('IssueContextProvider를 찾을 수 없습니다!');

  const { issue, setIssue } = context;
  const { issueList } = useIssues();
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssue = async (issueNumber: number) => {
    if (!!issue && issue.number === issueNumber) {
      return;
    }

    for (const issue of issueList) {
      if (issue.number === issueNumber) {
        setIssue(issue);
        return;
      }
    }

    setIsLoading(true);
    const res = await getIssue({ ...pathParam, issue_number: issueNumber });
    setIssue(res);
    setIsLoading(false);
  };
```


**API 요청**

❓선정이유? 

- 페이지 렌더링 시 빠른 렌더링을 위해, 데이터 통신 비용이 드는 것보다 캐싱된 데이터를 우선 확인하는 것이 성능적으로 더 좋다고 생각하여 이슈 요청 시 캐싱된 데이터가 있으면 캐싱된 데이터를, 없을 시 요청하여 처리했습니다.
- query Param을 이용해 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청하였습니다.
- makeQueryString은 객체로 전달해서 일괄적으로 특수문자를 넣어주는게 손수 작성하는 것보다 실수할 가능성이 적어 queryString이 길어질때 등 쓰면 좋을 것 같아 구현하였습니다.

---

#### 📌 이슈 목록 및 상세 화면 기능 구현 Best Practice 선정

❓선정이유

- 해당 부분은 대부분의 팀원들이 비슷하게 작성하여 공통된 코드 중 특이사항과 장점 위주로 기술하였습니다.
- 헤더에 owner/repository는 pathParam을 이용하여 작성했습니다. 특히 `freeze`를 이용하여 외부에서 접근하여 변경하려는 시도를 방어하였습니다.
- `IntersectionObserver`을 이용하여 스크롤을 내리면 이슈 목록을 추가적으로 로딩하였습니다. 사용자가 스크롤을 조금씩 내리면서 이슈를 로딩하므로 초기 로딩 시간을 단축시킬 수 있고, 전체 이슈 목록을 한 번에 로딩하는 것보다 자원을 효율적으로 사용할 수 있습니다.
- `react-markdown`을 이용하여 이슈에 적힌 마크다운 문법을 렌더링 했습니다. 따라서 사용자가 이슈 내용을 보다 직관적이고 가독성 있게 확인할 수 있습니다.

```ts
// pathParam.ts
import { GetIssuesPathParam } from '../types/issuesApi';

const pathParam: GetIssuesPathParam = { repo: 'react', owner: 'facebook' };

export default Object.freeze(pathParam);
```

```ts
// useIntersectionObserver.ts
import { useRef } from 'react';

export default function useIntersectionObserver(callback: () => void) {
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 },
    ),
  );

  const observe = (element: HTMLElement | null) => {
    element && observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement | null) => {
    element && observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
```

---

#### 📌 에러 화면 구현 Best Practice 선정

❓선정이유

- 작성하기

### 3. 트러블 슈팅

#### 📌 이전 데이터의 잔류로 인한 화면 깜빡임 발생

- 저희는 상세 issue의 정보를 Context에 보관하여 useIssue로 꺼내오고 있었습니다
- 그러나, issue페이지 진입시, 이전의 Context에 잔류하고 있는 issue 데이터가 남아있기때문에, 새로운 데이터를 받아오기 전(loading 전)에 이전의 issue가 렌더링되는 현상이 발생하였습니다
- 이 현상은 `fetchIssue` 함수과 `useEffect`내부에 존재하고, 따라서 렌더링 후에 추가적인 fetch와 로딩이 이루어지는 것이 원인이었습니다(이전 데이터 렌더 => useEffect내의 fetchIssue 동작 => 새로운 데이터 렌더)

```typescript
const { issue: data, fetchIssue, isLoading } = useIssue();

useEffect(() => {
  (async () => {
    try {
      window.scrollTo(0, 0);
      await fetchIssue(Number(params?.id));
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message ?? 'Sorry, Unknown Error');
      } else {
        setError('Sorry, Unknown error');
      }
    }
  })();
}, []);

const [error, setError] = useState('');

if (error) {
  return <ErrorComp message={error} />;
}

if (data?.number !== Number(params.id))
  return (
    <CenterLoadContainer>{isLoading && <LoadSpinner />}</CenterLoadContainer>
  );
```

- 이러한 깜빡임으로 인한 UX의 저하를 막기 위해, 이전의 데이터의 렌더를 막아야 했습니다
- 따라서, 이전의 데이터와 현재 방문한 페이지의 데이터가 다를때(id를 활용한 비교) 로딩을 렌더하여 early return해주는 코드를 작성하였습니다.

#### 📌 무한스크롤시 총 페이지당 아이템의개수가 10개미만일때 중복 데이터 요청 발생

- 저희는 페이지당 아이템개수를 10개 가져오기로 결정해서 처음 페이지에서 렌더링후 바로 스크롤데이터를 요청하게되는 로직이 적용되어있었습니다
- 그러나 facebook/react 이슈처럼 10개이상일경우 는 상관없지만 임시로 10개미만의 이슈 레포로 테스트를 해본결과 중복된 페이지에대해 요청하는 문제가 발생했습니다

```typescript
const PER_PAGE = 10;

const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
```

- 이슈리스트가 10개 미만일경우 같은 페이지의 이슈 데이터를 가져오는 문제가 발생하게됩니다 그래서 아래와 같이 수정했습니다

```typescript
if (count < 10) {
  setIsEnd(true);
  setIsLoading(false);
  return;
}

const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
```

- `repo/facebook/react` api에서 총이슈 개수를 가지고와서 총개수가 10개미만일경우 실행하지않게 변경했습니다

#### 📌 무한스크롤시 마지막 페이지 도달시 예외처리 적용

- 일반적으로 무한스크롤 사이트의 경우 콘텐츠가 끊임없이 제공되어야하며 맨하단에 도달할경우가 거의없지만 저희가개발하는 github이슈의 양이라면 도달할 경우도있을 것 같아 예외사항을 고려해 개발하였습니다
- github issue ap 에서는 데이터가 없는 페이지로 요청시 빈배열을 반환하게 적용되어있어 아래와같이 처리하였습니다

```typescript
const [isEnd, setIsEnd] = useState(false);

const res = await getIssueList(pathParam, { ...queryParam, page: NEXT_PAGE });

if (res.length === 0) {
  setIsEnd(true);
  setIsLoading(false);
  return;
}
```

- isEnd 라는 상태값을 추가해 isEnd값이 true일경우에는 스크롤시 핸들링함수를 실행하지않게 적용했습니다
- 이렇게 적용한결과 마지막페이지 도달시 로딩후 더이상 페이지가없어 게속해서 api를 요청하지않고 처음 한번만 요청하게되었습니다
