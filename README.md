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

## 제원 페이지

![제원페이지](https://user-images.githubusercontent.com/92135697/187945940-b8fdf39d-f3c6-4c7d-99c8-3987c8029a74.gif)

1. 이미지는 slick-slider를 활용하여 carousel적용하였습니다.
2. 본문은 데이터에 맞춰서 내용만 바뀌도록 레이아웃을 구성했으며, map을 통하여 구성했습니다.

## 견적 페이지

![견적페이지](https://user-images.githubusercontent.com/92135697/187947074-3b18b34e-0938-4cd6-8201-f8c00cfc1470.gif)

1. select태그에 option을 가지고 있는 항목은 모델과 계약기간, 선납금 항목이며, 각 항목 선택 시 value값을 이용하여 state에 저장하는 방식으로 계산하여 월 납입금액이 변동됩니다.

## QNA 페이지

![게시판 페이지](https://user-images.githubusercontent.com/92135697/187947125-9170cd1b-2298-4e75-8db5-a4371871e3bb.gif)

1. 일반적인 웹사이트들의 FAQ가 아코디언으로 구성되어 있어, keyframe을 통해 구현해보았습니다.
2. 차후 express와 mongoDB 학습 후 적용하여 글 추가 기능도 구현해볼 생각입니다.
---
