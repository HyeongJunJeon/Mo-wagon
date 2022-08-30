# react를 활용한 mo-wagon 페이지만들기

주제는 저의 드림카인 G-CLASS(g-wagon), MOHAVE를 안내하는 사이트입니다.

redux, typeScript, next.js와 node.js, express, mongoDB 적용예정입니다.

디자인 참고는 [G-CLass 공식 사이트](https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/g-class/suv-w463/specifications/offroad-performance.module.html) 를 참고 했으며, 문구는 각 차종의 공식 페이지에서 카피하였습니다.
<br /><br />제원은 네이버 상에 올라온 정보를 활용했습니다.

## 메인 페이지

![모바겐 메인](https://user-images.githubusercontent.com/92135697/187470173-a38d995c-a765-4842-842f-4107e943ce36.gif)

1. keyframe을 활용하여 메인 Image의 동적 구성, 메뉴의 dropdown형식의 에니메이션을 구성하였습니다. 
2. react-player를 사용하여 youtube영상을 삽입했습니다.
3. navBar는 position: fixed를 활용하여, 스크롤시 viewport상단에 고정하였습니다.
