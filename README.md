# Photo Feed

## 개요
* **목적**
본 문서는 Photo Feed 프로젝트의 구조를 문서화하여 차후 프로젝트 유지보수를 위해 작성되었습니다.

* **SITE ADDRESS**
`http://localhost:3000`

* **Getting Start**
```
npm install
npm start
```
본 프로젝트는 Create-React-App 기반으로 제작되었습니다.

추가된 라이브러리는 axios, node-sass입니다.

자세한 dependencies 및 scripts는 package.json을 참고해주시면 됩니다.

* **유의사항**
본 프로젝트는 테스트 프로젝트로 server에서 데이터를 가져올 때 cors(Cross-Origin Resource Sharing)오류가 발생할 수 있습니다.

크롬으로 실행시 --disable-web-security으로 실행하거나 플러그인 설치를 추천드립니다.

## File Structure
```
public
 - images
 - favicon.ico
 - index.html
 - manifest.json
src
 - api
 - Components
 - Pages
 App.scss
 App.js
 index.scss
 serviceWorker.js
```

### Pages

* **MainPage**
    * 원페이지앱이지만 추후 Router 확장성을 대비하여 설정

### Components

* **Feed**
    * 사진을 보여주는 카드뷰로 React Hooks으로 scrap 기능 사용

* **Profile**
    * 게시글을 올린 사용자의 아바타와 닉네임

## Function
- `getData()` : server 데이터를 가져오기 위함
- `handleOnScroll()` : 무한 스크롤 구현을 위함, documentElement를 이용하여 스크롤과 기기 화면 사이즈를 계산비교 한 후 스크롤의 바닥 부분을 찾음

## Version History

  Date | Version | author
  ------ | ------ | ------
  2019.06.18 | <center> v0.1 </center> | 이학성