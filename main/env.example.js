const ENV = {
  groom: {
    name: "신랑 이름",
    nameEn: "Groom",
    father: "신랑 아버지 이름",
    mother: "신랑 어머니 이름",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "신부 이름",
    nameEn: "Bride",
    father: "신부 아버지 이름",
    mother: "신부 어머니 이름",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    tel: "예식장 전화번호",
    mapLinks: {
      naver: "네이버 지도 링크",
      kakao: "카카오 지도 링크"
    }
  },

  accounts: {
    groom: [
      { role: "신랑", name: "신랑 이름", bank: "은행명", number: "계좌번호" },
      { role: "아버지", name: "아버지 이름", bank: "은행명", number: "계좌번호" },
      { role: "어머니", name: "어머니 이름", bank: "은행명", number: "계좌번호" }
    ],
    bride: [
      { role: "신부", name: "신부 이름", bank: "은행명", number: "계좌번호" },
      { role: "아버지", name: "아버지 이름", bank: "은행명", number: "계좌번호" },
      { role: "어머니", name: "어머니 이름", bank: "은행명", number: "계좌번호" }
    ]
  }
};
