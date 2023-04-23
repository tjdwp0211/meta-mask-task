# meta-mask-task

### 파일 구조
---
```
root - public --- [...imgs]
    |
     -- src --- api  ---  image.ts /** (img 가져올 수 있는 Open API)*/
          |
          --- assets  --- encoded-fonts   
          |           |   /** (next/font/google로 사용하지 못하는 font들 파일의 모음집)*/
          |           |
          |           --- imgs - index.tsx 
          |                      /** (img 경로 export)*/
          |
          --- components --- [...Comps] --- index.tsx
          |              |              --- styled.tsx (?)
          |              |
          |              ---- index.ts 
          |                   /** (components export 하는 곳)*/
          |
          --- layout  --- index.tsx 
          |          |    /** (Header, Navbar, children[posters]이 들어갈 Main)*/
          |          |
          |           --- styled.tsx  
          |
          --- lib   --- injected-connector --- index.ts  
          |         |                           /** (@web3-react/injected-connector 사용)*/
          |         |
          |         +-- provider --- index.tsx  
          |         |                /** (_app.tsx에 적용할 Web3Provider 관련 코드들, window에 web3 객체 type 추가)*/
          |         |          
          |         --- index.ts
          |             /** (export 하는 곳)*/
          |
          --- pages -- _app.tsx       
          |         |  /** (Web3Provider 적용)*/
          |         |
          |         +- _document.tsx  
          |         -- [[...index]].tsx 
          |            /** (getServerSideProps 적용)*/
          |
          --- styles --- fonts - [airbnbCerealW.ts || gilroy.ts] || urbanist.ts]
          |          |           /** (next/font를 이용해 설정한 사용할 폰트들)*/
          |          |
          |          +-- global - index.ts  
          |          |            /** (전역 스타일)*/
          |          |
          |          +-- palette - index.ts 
          |          |              /** (사용할 공용 색상)*/
          |          |
          |          --- index.ts
          |              /** (스타일 관련 export)*/
          |
           -- types --- api - index.ts
                  |
                  +----- components - index.ts
```
