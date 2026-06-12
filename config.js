/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 메인 (히어로) ──
  groom: {
    name: ENV.groom.name,
    nameEn: ENV.groom.nameEn,
    father: ENV.groom.father,
    mother: ENV.groom.mother,
    fatherDeceased: ENV.groom.fatherDeceased,
    motherDeceased: ENV.groom.motherDeceased
  },

  bride: {
    name: ENV.bride.name,
    nameEn: ENV.bride.nameEn,
    father: ENV.bride.father,
    mother: ENV.bride.mother,
    fatherDeceased: ENV.bride.fatherDeceased,
    motherDeceased: ENV.bride.motherDeceased
  },

  wedding: {
    date: "2026-09-12",
    time: "14:30",
    venue: "빌라드지디 안산",
    hall: "7층 그레이스켈리홀",
    address: "경기도 안산시 단원구 광덕4로 140",
    tel: ENV.wedding.tel,
    mapLinks: ENV.wedding.mapLinks
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "처음 만난 날을 또렷하게 기억합니다.\n웃는 모습이 유난히 예쁜 다솜이\n그 웃는 모습을 유난히도 좋아하던 성일이\n언제나 함께 웃을 수 있는 우리가 되려합니다.\n\n소중한 분들과 함께라면\n저희에게 더없는 기쁨이 될 것입니다.\n새로운 시작, 그 설렘을 가득 담아\n소중한 분들을 모십니다."
  },

  // ── 우리의 이야기 (Q&A 채팅) ──
  story: {
    title: "우리의 이야기",
    chat: [
      { q: "신혼 여행은 어디로 가세요?", a: "\"프랑스 - 스위스 - 이탈리아\"로 갑니다.😊✈️" },
      { q: "신혼 집은 어디로 정했나요?", a: "경기도 군포에서 시작합니다😁👍" },
      { q: "결혼을 결심한 순간은요?", a: "함께하는 모든 순간이 행복해서 평생 함께하고 싶었습니다❤️" }
    ]
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: ENV.accounts,

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: `${ENV.groom.name} ♥ ${ENV.bride.name} 결혼합니다`,
    description: "2026년 9월 12일, 소중한 분들을 초대합니다."
  }
};
