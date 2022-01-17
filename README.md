# css-masters-1

## Chapter1. 웹 페이지의 단 구조

### 1. .boxA:after

- CSS2 에서는 after pseudo element 를 :after 로 표현
- CSS3 에서는 ::after

### 2. float - clearfix(클리어픽스)

- 플로팅 박스가 뒤에 있는 박스의 레이아웃에 영향을 주지 않게 만드는 기술
- :after에 clearfix 대신 container에 `overflow:hidden`을 적용할 수도 있다. `overflow:hidden` 을 적용한 박스는 CSS의 블록 서식 문맥(Block formatting context)으로 취급되어 박스 내부의 플로팅 박스를 포함해 영역을 잡게 됩니다.

- [https://developer.mozilla.org/en-US/docs/Web/CSS/overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
  <aside>
    💡 Block formatting context
     - [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
  </aside>

### 3. overflow-wrap

p40 - 영어폰트는 띄어쓰기를 하지 않으면 한 줄로 이어진다.

띄어쓰기를 하면 박스 크기에 맞춰서 줄바꿈이 되므로 `overflow-wrap`` 속성이 불필요하다.

## 2. Chapter 2. 웹 페이지 제작 준비

### 1. 요소의 default display 값

| element | display    |
| ------- | ---------- |
| ul      | block      |
| li      | linst-item |
| a       | inline     |
| ::after | inline     |

### 2. css 파일의 인코딩

- `@charset “UTF-8”;`
- content와 같이 non-ASCII 문자를 사용하는 CSS속성이 있을 때 유용하다.

### 3. 사파리 웹 브라우저의 기본 폰트: AppleMyungjo

- v15.2 에서도 기본 폰트는 AppleMyungjo 이다.
- 따라서 고딕체 사용을 원할 경우 반드시 font-family를 지정해주어야 한다.
