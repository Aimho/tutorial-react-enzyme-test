## Tutorial React Enzyme Test

[velopert 블로그](https://velog.io/@velopert/react-testing-with-enzyme) - 리액트 테스팅 4, 5

## Tutorial Memo

### Snapshot Testing (스냅샷 테스팅)

렌더링된 결과가 이전에 렌더링한 결과와 일치하는지 확인하는 작업을 의미함<br/>
Enzyme에서 스냅샷 테스팅을 하려면 **enzyme-to-json** 이라는 라이브러리를 설치 해야함

스냅샷을 마치면 `__snapshots__` 폴더가 생기고, 안에 렌더링된 컴포넌트 코드가 생성됨 <br/>
스냅샷을 새로 떠야하면 테스트를 실행한 상태에서 `u` 버튼을 클릭하면 됨
