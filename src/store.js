import { configureStore, createSlice } from "@reduxjs/toolkit";

let data = createSlice({
  name: "data",
  initialState: [
    {
      id: 1,
      name: "G-Class",
      price: [
        {
          id: 1,
          name: "G 400d",
          data: 160600000,
        },
        { id: 2, name: "G 63AMG", data: 216600000 },
      ],
      specification: [
        {
          id: 1,
          name: "엔진형식",
          data: "I6",
        },
        { id: 2, name: "과급방식", data: "트윈터보" },
        { id: 3, name: "배기량", data: "2925cc" },
        { id: 4, name: "연료", data: "디젤" },
        { id: 5, name: "최고출력", data: "330hp" },
        { id: 6, name: "최대토크", data: "71.4kg.m" },
        { id: 7, name: "최고속도", data: "210km/h" },
        { id: 8, name: "가속성능", data: "6.4초" },
        { id: 9, name: "연비", data: "8.4kmg/l" },
        { id: 10, name: "CO 배출량", data: "233g/km" },
      ],
      image: [
        {
          image_id: 1,
          image_url:
            "https://images.unsplash.com/photo-1635933122186-4152e017d948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          image_id: 2,
          image_url:
            "https://images.unsplash.com/photo-1569240651611-302c9897bde5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2NsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          image_id: 3,
          image_url:
            "https://images.unsplash.com/photo-1629020607902-3a93e9f8c4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2NsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      id: 2,
      name: "Mohave",
      price: [
        {
          id: 1,
          name: "플래티넘",
          data: 49580000,
        },
        { id: 2, name: "마스터즈", data: 54930000 },
        { id: 3, name: "그래비티", data: 58710000 },
      ],
      specification: [
        {
          id: 1,
          name: "엔진형식",
          data: "V6",
        },
        { id: 2, name: "과급방식", data: "싱글터보" },
        { id: 3, name: "배기량", data: "2959cc" },
        { id: 4, name: "연료", data: "디젤" },
        { id: 5, name: "최고출력", data: "257hp" },
        { id: 6, name: "최대토크", data: "57.1kg.m" },
        { id: 7, name: "구동방식", data: "풀타임 4륜구동" },
        { id: 8, name: "변속기", data: "자동 8단" },
        { id: 9, name: "연비", data: "9.3kmg/l" },
        { id: 10, name: "CO 배출량", data: "211~212g/km" },
      ],

      image: [
        {
          image_id: 1,
          image_url:
            "https://images.unsplash.com/photo-1651041943612-def8fe2b1d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwbW9oYXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          image_id: 2,
          image_url:
            "https://images.unsplash.com/photo-1651477213590-6fe6fedad732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lhJTIwbW9oYXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          image_id: 3,
          image_url:
            "https://images.unsplash.com/photo-1579377090611-3adf9bbdba07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpYSUyMG1vaGF2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
  ],
});

let faqData = createSlice({
  name: "faqData",
  initialState: [
    {
      id: 1,
      title: "첫번째 질문입니다.",
      content: "첫번째 질문의 대답입니다.",
      isShow: false,
      onOffBtn: true,
    },
    {
      id: 2,
      title: "두번째 질문입니다.",
      content: "두번째 질문의 대답입니다.",
      isShow: false,
      onOffBtn: true,
    },
    {
      id: 3,
      title: "세번째 질문입니다.",
      content: "세번째 질문의 대답입니다.",
      isShow: false,
      onOffBtn: true,
    },
  ],
  reducers: {
    changeStatus(state, action) {
      let data = state.find((item) => item.id === action.payload);

      data.isShow = !data.isShow;
      data.onOffBtn = !data.onOffBtn;
    },
  },
});

export let { changeStatus } = faqData.actions;

let contactTab = createSlice({
  name: "contactTab",
  initialState: [
    "시승 신청",
    "메르세데스-벤츠 스토어",
    "기아 자동차 스토어",
    "온라인 서비스 예약",
    "뉴스 및 이벤트",
  ],
});

export default configureStore({
  reducer: {
    data: data.reducer,
    faqData: faqData.reducer,
    contactTab: contactTab.reducer,
  },
});
