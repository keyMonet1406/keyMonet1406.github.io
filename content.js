// 사이트 내용은 이 파일만 고치면 됩니다.
// 글을 하나 쓸 때마다 해당 배열에 { ... } 한 덩어리를 추가하세요.
// 배열이 비어 있으면 그 섹션에는 "아직 글이 없습니다" 문구가 대신 나옵니다.

const SITE = {
  profile: {
    name: "Won Kim",
    handle: "wonkim / notes",       // 왼쪽 위에 표시되는 짧은 이름
    affiliation: "Korea University, Smart Security",                // 예: "Korea University, Smart Security" (비우면 표시 안 됨)
    headline: "Notes from studying blockchain security.",
    intro:
      "",
    github: "",                     // 깃허브 아이디만. 예: "wonkim"
    email: "",                      // 공개하고 싶을 때만 입력
  },

  // 01 해킹 사례 분석
  // severity: "high" | "medium" | "low"  (태그 색만 바뀝니다)
  hacks: [
    // {
    //   title: "Euler Finance",
    //   bugClass: "Missing health check",
    //   severity: "high",
    //   summary: "donateToReserves let an account make itself insolvent without a solvency check.",
    //   date: "2023-03",
    //   loss: "$197M",
    //   url: "https://github.com/USERNAME/hack-analyses/blob/main/euler-finance.md",
    // },
  ],

  // 02 CTF write-up
  ctf: [
    // { title: "Ethernaut", meta: "12 / 40 solved", url: "https://github.com/USERNAME/ctf-writeups/tree/main/ethernaut" },
    // { title: "Damn Vulnerable DeFi", meta: "8 / 18 solved", url: "https://github.com/USERNAME/ctf-writeups/tree/main/damn-vulnerable-defi" },
  ],

  // 03 프로토콜 공부
  protocols: [
    // { title: "Uniswap V2", meta: "Pair, Router, Factory", url: "https://github.com/USERNAME/protocol-studies/tree/main/uniswap-v2" },
  ],

  // 04 기술 노트
  tech: [
    // { title: "zk-SNARKs: from R1CS to QAP", meta: "2026-11", url: "https://github.com/USERNAME/tech-notes/blob/main/zk-snarks-r1cs-qap.md" },
  ],
};
