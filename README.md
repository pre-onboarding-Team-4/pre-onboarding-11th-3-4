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


## 기술 스택


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
      (entries) => {
        entries.forEach((entry) => {
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
