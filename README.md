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

❓선정이유

- Issue, Issues state를 context와 custom hook `useIssue`, `useIssues`를 이용하여 전역적으로 상태를 관리했습니다.
- 이를 통해 상태와 기능을 캡슐화하고 재사용 가능한 로직을 구축했습니다.
- 빠른 렌더링을 위해, 데이터 통신 비용이 드는 것보다 캐싱된 데이터를 우선 확인하는 것이 성능적으로 더 좋다고 생각하여 이슈 요청 시 캐싱된 데이터가 있으면 캐싱된 데이터를, 없을 시 요청하여 처리했습니다.

```ts
// useIssue.ts
// import 생략
const pathParam: GetIssuePathParam = {
  repo: "react",
  owner: "facebook",
  issue_number: 0,
};

export function useIssue() {
  const context = useContext(IssueContext);

  if (!context) throw new Error("IssueContextProvider를 찾을 수 없습니다!");

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

  return { issue, fetchIssue, isLoading };
}
```

---

#### 📌 이슈 목록 및 상세 화면 기능 구현 Best Practice 선정

❓선정이유

- 해당 부분은 대부분의 팀원들이 비슷하게 작성하여 공통된 코드 중 특이사항과 장점 위주로 기술하였습니다.
- 헤더에 owner/repository는 pathParam을 이용하여 작성했습니다. 특히 `freeze`를 이용하여 외부에서 접근하여 변경하려는 시도를 방어하였습니다.
- `IntersectionObserver`을 이용하여 스크롤을 내리면 이슈 목록을 추가적으로 로딩하였습니다. 사용자가 스크롤을 조금씩 내리면서 이슈를 로딩하므로 초기 로딩 시간을 단축시킬 수 있고, 전체 이슈 목록을 한 번에 로딩하는 것보다 자원을 효율적으로 사용할 수 있습니다.
- `react-markdown`을 이용하여 이슈에 적힌 마크다운 문법을 렌더링 했습니다. 따라서 사용자가 이슈 내용을 보다 직관적이고 가독성 있게 확인할 수 있습니다.

```ts
// pathParam.ts
import { GetIssuesPathParam } from "../types/issuesApi";

const pathParam: GetIssuesPathParam = { repo: "react", owner: "facebook" };

export default Object.freeze(pathParam);
```

```ts
// useIntersectionObserver.ts
import { useRef } from "react";

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
      { threshold: 1 }
    )
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
        setError(error.response?.data.message ?? "Sorry, Unknown Error");
      } else {
        setError("Sorry, Unknown error");
      }
    }
  })();
}, []);

const [error, setError] = useState("");

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
