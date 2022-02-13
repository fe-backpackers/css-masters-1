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

## Chapter 3. 블로그/뉴스 스타일 사이트의 콘텐츠 페이지

### 1. p93 default 값도 반드시 명시해주는 것이 좋은가?

```css
.story img {
  max-width: 100%;
  height: auto;
}
```

height 속성의 default 값은 auto 이다.

따라서 명시하지 않은 경우 height: auto 가 적용된다.

할당하고자 하는 값이 default 값과 일치하더라도 기재해주는 것이 좋은 컨벤션인가?

#### 1. 그렇다

- css 의 경우 스코프를 모두 공유하므로, 다른 선택자에 의해 특정 속성 값이 할당될 수 있다. 따라서 의도를 분명히 하기 위해 기재해주는 것이 좋다. specificity(명시도)에 따라 달라질 수 있지만..
- default값이 브라우져 또는 브라우져의 버젼마다 상이할 수 있다. (**확인필요**)
- 모든 개발자가 모든 css 속성의 default값을 아는 것이 아니다.

#### 2. 아니다

- css-in-js , css modules 와 같이 제한된 스코프를 가진 경우에는 다른 선택자에 의해 값이 할당되지 않으므로 기재하지 않아도 된다.
- 타이핑 절약.
- css 속성의 default 값을 알아두는 것이 성장에 도움이 된다.

### 2. width: auto ⇒ 부모의 크기에 따라, height: auto ⇒ 자식의 높이에 따라

- CSS 스펙 보는 방법은?
  - [https://www.w3.org/TR/CSS/#css](https://www.w3.org/TR/CSS/#css)
- width: auto, height: auto 는 어떻게 결정되는가?
  - [https://www.w3.org/TR/css-display-3/](https://www.w3.org/TR/css-display-3/)

## 3. Chapter 3. 블로그/뉴스 스타일 사이드트의 콘텐츠 페이지

### 1. 3-4-1 조정에 필요한 @media 설정을 추가

- 1안, 2안 모두 가능할 것으로 생각되며, 장단점 확실

#### 1안: 적용할 해상도 명시적으로 기재

- 특정 해상도에만 해당 스타일이 적용된다는 것을 명시적으로 나타낸다.

- 해상도간 스타일의 변화가 극명한 경우, cascading 될 부분이 없는 경우 유용

```css
.box5 {
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (max-width: 599px) {
}

@media (min-width: 600px) and (max-width: 767px) {
}

@media (min-width: 768px) {
}
```

#### 2안: cascading 을 통해 중복 줄이기

- 모바일 우선 개발
- 중복된 코드 줄일 수 있다.
- 최종적으로 어떤 프로퍼티가 적용될지가 한 눈에 보이지 않는다.

```css
.box5 {
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (min-width: 600px) {
}

@media (min-width: 768px) {
}
```

## 비슷한 예시

3-4-5. 레이아웃 전체의 너비를 고정

```css
@media (min-width: 1040px) {
  body {
    width: 1000px;
    margin: auto;
  }
}
```

```css
body {
  max-width: 1000px;
  margin: auto;
}
```

※ `max-width`는 IE6에서 지원되지 않는다.

## 2. `<time datetime=”2014-08-10”>`

- 웹 접근성 감안하여 시간 관련 텍스트는 time 태그 쓰기

## 3. `<i>`

- 3-5-2. 기사의 작성일에 아이콘을 붙여 출력
- HTML5에서 `<i>` 태그는 관용구 또는 분위기 다른 어구 등 다른 것과 구별하고 싶은 어구를 나타냅니다.
- `<i>` 가 속하는 Palpable Content 카테고리는 요소 내부에 아무것도 넣지 않고 작성하면 스크립트 또는 CSS에서 이후에 콘텐츠를 ~~삽입할 것을 허용하고 있습니다.~~ 삽입해야 한다!
- 따라서 `<i>` 태그를 아이콘 폰트의 태그로 사용
- [https://html.spec.whatwg.org/#palpable-content](https://html.spec.whatwg.org/#palpable-content)
