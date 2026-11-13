# 공부 기록 사이트

블록체인 보안 공부 기록을 모아 보여주는 한 페이지 사이트입니다. 빌드 과정 없이 정적 파일 4개로 동작합니다.

| 파일 | 역할 |
|---|---|
| `content.js` | **내용 전부.** 글을 추가할 때 이 파일만 고칩니다. |
| `index.html` | 페이지 뼈대 |
| `style.css` | 디자인 |
| `main.js` | `content.js`를 읽어 화면에 그리는 코드 |

## 처음 한 번: 배포

1. GitHub에서 이름이 정확히 `<아이디>.github.io`인 **public** 레포를 만듭니다.
2. 이 폴더의 파일 4개(`index.html`, `style.css`, `content.js`, `main.js`)와 이 `README.md`를 레포 최상단에 올립니다.
3. 레포 Settings → Pages에서 Source가 `Deploy from a branch`, Branch가 `main` / `(root)`인지 확인합니다.
4. 1~2분 뒤 `https://<아이디>.github.io`에서 확인합니다.

## 처음 한 번: 내 정보 넣기

`content.js` 맨 위 `profile`에서 다음을 채웁니다.

- `github`: 깃허브 아이디 (넣으면 깃허브 링크가 나타납니다)
- `affiliation`: 학교·전공 (비워두면 표시되지 않습니다)
- `email`: 공개하고 싶을 때만

## 글 추가하기

`content.js`에서 해당 섹션 배열에 한 덩어리를 추가하고 커밋하면 끝입니다. 각 배열 안에 주석으로 예시가 들어 있습니다.

```js
tech: [
  { title: "zk-SNARKs: from R1CS to QAP", meta: "2026-11", url: "https://github.com/아이디/tech-notes/blob/main/zk-snarks-r1cs-qap.md" },
],
```

- `url`을 빼면 링크 없이 제목만 표시됩니다.
- 배열이 비어 있는 섹션에는 "Nothing here yet" 문구가 대신 나옵니다.
- 해킹 분석 카드의 `severity`는 `"high"`, `"medium"`, `"low"` 중 하나이고 태그 색만 바꿉니다.

## 로컬에서 미리 보기

`index.html`을 브라우저로 그냥 열면 됩니다.
