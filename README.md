![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Novelism🎧&fontAlign=70&fontAlignY=35&color=gradient)

# 웹 소설을 더 감각적으로 즐기는 방법, Novelism 🎧

## 🎉 Index

- [웹 소설을 더 감각적으로 즐기는 방법, Novelism 🎧](#웹-소설을-더-감각적으로-즐기는-방법-novelism-)
  - [🎉 Index](#-index)
  - [🎠 About Novelism](#-about-novelism)
  - [✨ Overview](#-overview)
  - [🙋‍♂️ Demonstrate](#️-demonstrate)
  - [🎊 Getting Started](#-getting-started)
  - [🛒 Installing](#-installing)
  - [🏆 Contributing](#-contributing)
  - [🕶 Team](#-team)
  - [🔎 Open Source](#-open-source)
  - [🍕 감정 분석 실행 방법](#-감정-분석-실행-방법)
    - [감성 분석 구조](#감성-분석-구조)
    - [main.py](#mainpy)
    - [textreader.py](#textreaderpy)
    - [word.py](#wordpy)
    - [emotion.py](#emotionpy)
  - [⚙ Backend](#-backend)
    - [Server Architecture](#Server-Architecture)
    - [Server to Server Logic](#server-to-server-logic)
  - [🎨 UI](#-ui)
    - [시작 화면](#시작-화면)
    - [홈 화면](#홈-화면)
    - [개발자 소개 페이지](#개발자-소개-페이지)
    - [장르 선택 페이지](#장르-선택-페이지)
    - [웹 소설 플랫폼 이용](#웹-소설-플랫폼-이용)
    - [노벨리즘 페이지](#노벨리즘-페이지)
  - [💸 License](#-license)

## 🎠 About Novelism

- 최근 `김비서가 왜 그럴까` `사내맞선` `재벌집 막내아들`등 다양한 웹 소설이 드라마화 될 만큼, **웹 소설**에 대한 관심이 크게 늘어났습니다.
- 특히 웹툰 OST 시장이 1조 5천억원을 넘겼던 것 처럼, **웹 소설 OST 시장** 역시 크게 성장할 것이라고 예상하고 있습니다.
- 위 두가지 이유로, 사용자 각각의 취향과 웹 소설 분위기에 기반한 **배경음악 추천 솔루션**을 연구합니다.

## ✨ Overview

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Java-744e3b?style=plastic-square&logo=&logoColor=white"/> <img src="https://img.shields.io/badge/Python-3776AB?style=plastic-square&logo=Python&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=plastic-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Electron-47848F?style=plastic-square&logo=Electron&logoColor=white"/> <img src="https://img.shields.io/badge/Django-092E20?style=plastic-square&logo=Django&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=plastic-square&logo=Spring Boot&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/Selenium-43B02A?style=plastic-square&logo=Selenium&logoColor=white"/> <img src="https://img.shields.io/badge/NGINX-009639?style=plastic-square&logo=NGINX&logoColor=white"/> <img src="https://img.shields.io/badge/Gunicorn-499848?style=plastic-square&logo=Gunicorn&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=plastic-square&logo=styled-components&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=plastic&logo=Amazon EC2&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=plastic&logo=Figma&logoColor=white"/>

> **현재 Tocsoda 플랫폼만 이용 가능합니다 :(**<br/>
> 저작권 관련 스크래핑 문제로 인해 타 플랫폼 이용이 불가능합니다.<br/>

- 사용자 음악 취향 분석
  - 평소 즐겨 듣는 아티스트를 최대 10명까지 선택 가능
  - 자동으로 선호 장르를 분석하여 `localStorage`에 저장
- 사용자 자체 텍스트본 업로드 / 웹 소설 플랫폼 접속
  - 소설 자동 분석
  - 감정어와 스크롤 영역을 비율로 구분
  - 각 감정어와 장르 취향에 맞는 음악을 분석
  - 사용자의 스크롤이 분위기가 반전되는 뷰포트에 닿았을 때, 자동으로 음악 전환
  
## 🙋‍♂️ Demonstrate
- [아티스트 선택 및 선호 장르 분석 시현영상](https://www.youtube.com/watch?v=n-djHKWZwuw)
- [웹 소설 플랫폼 이용 시현영상](https://www.youtube.com/watch?v=6eqqLBvENQU)
- [사용자 텍스트본 입력 후 이용 시현영상](https://www.youtube.com/watch?v=mPmlnApK7ak&feature=youtu.be)

## 🎊 Getting Started

```javascrip
    $ git clone
    $ yarn install
    $ yarn dev
```

## 🛒 Installing

1. [다운로드 링크](https://drive.google.com/file/d/1dXn2StlhVDKARh8FPmXnGyB_1-d2hDfa/view?usp=sharing)에서 Setup 파일 다운로드
2. Novelism 설치 및 실행
3. 음악 취향 등록
4. 웹 소설 감상

## 🏆 Contributing

> 총 5명의 팀원이 완성한 프로젝트입니다.

<p>
<a href="https://github.com/neoskyclad">
    <img src="https://github.com/neoskyclad.png" width="90">
</a>
<a href="https://github.com/qualificationalitated">
    <img src="https://github.com/qualificationalitated.png" width="90">
</a>
<a href="https://github.com/parksk99">
    <img src="https://github.com/parksk99.png" width="90">
</a>
<a href="https://github.com/99winnmin">
    <img src="https://github.com/99winnmin.png" width="90">
</a>
<a href="https://github.com/Jun99uu">
    <img src="https://github.com/Jun99uu.png" width="90">
</a>
</p>

## 🕶 Team

- [DaeHyunKwon](https://github.com/neoskyclad) - **Natural Language Processing** - <neoskyclad@naver.com>
- [HyeonWooKim](https://github.com/qualificationalitated) - **Natural Language Processing** - <abc9548@naver.com>
- [SeongGyuPark](https://github.com/parksk99) - **Natural Language Processing** - <qkrtjdrb99@naver.com>
- [SeungminRyu](https://github.com/99winnmin) - **Backend Development** - <ojysep9987@gmail.com>
- [JunkyuLee](https://github.com/Jun99uu) - **Frontend Development** - <igun0423@naver.com>

## 🔎 Open Source

- [Electron](https://github.com/electron/electron)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [React-Player](https://github.com/cookpete/react-player)
- [KR Word Rank](https://pypi.org/project/krwordrank)
- [knusl](https://github.com/park1200656/KnuSentiLex)
- [Pretendard](https://github.com/orioncactus/pretendard)
- [Nginx](https://github.com/nginx/nginx)
- [Gunicorn](https://github.com/benoitc/gunicorn)
- [Selenium](https://pypi.org/project/selenium/)
- [Youtube API](https://developers.google.com/youtube/v3/getting-started?hl=ko)

## 🍕 감정 분석 실행 방법
```
pip install krwordrank
python3 main.py
```

### 감성 분석 구조
### main.py
textreader.py를 사용해서 소설을 25퍼센트씩 읽어들인다.
키워드 추출 모듈인 word.py와 감정 분석 모듈인 emotion.py를 사용한다.
소설을 읽어들여서 문자열 배열로 만든 뒤 키워드 추출 모듈로 넘긴다.
추출한 키워드들을 빈도수가 가장 높은 키워드부터 감정 분석 모듈에 넣고 감정 단어를 추출한다.

### textreader.py
소설 전문을 넣고 read 함수를 사용해서 꺼내 쓰는 클래스.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
text_reader = TextReader(novel)

text_reader.read() # 25퍼센트씩 read해서 문자열 배열 반환
```

### word.py
문자열 배열을 입력으로 받아서 그것을 정규화하고 키워드를 배열 형태로 반환한다.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
keyword_detector = Word()
textreader = TextReader(novel)

texts = textreader.read() # 분석할 문장
min_value = 2 # 최소 빈도수
keyword_detector.get_word_from_novel(texts, min_value)
```

### emotion.py
단어가 감정단어인지를 판별하고 긍부정 정도를 반환한다.
``` python
emtion_detector = Emotion()
emotion_dectector.data_list("원하는 단어")
```
## 📡 Backend
### Server Architecture
![qwer](https://user-images.githubusercontent.com/44975402/205934250-71cab45b-a5c7-4032-a5f9-6396d4c3849d.jpg)
- Django : AWS EC2 배포 및 Nginx, Gunicorn 연동
- SpringBoot : AWS EC2 배포 및 Nginx 연동

### Server to Server Logic
- SpringBoot 서버는 Client로부터 텍스트 분석 요청을 수신합니다.
- Django 서버는 SpringBoot 서버로부터 소설 텍스트 혹은 소설 Url을 수신합니다.
- Django 서버는 수신 받은 텍스트를 분석합니다.
- Django 서버는 수신 받은 소설 Url과 selenium을 이용하여 소설 본문을 크롤링하여 분석합니다.
- Django 서버는 분석이 끝난 내용을 SpringBoot 서버로 response 합니다.
  - Django Response example
```json
[
    {
        "emotion": "슬픈",
        "ratio": 25.0
    },
    {
        "emotion": "제멋대로",
        "ratio": 50.0
    },
    {
        "emotion": "감사",
        "ratio": 75.0
    },
    {
        "emotion": "흡족한",
        "ratio": 100.0
    }
]
```
- SpringBoot 서버는 Youtube Search API를 활용해 Django 서버로부터 수신받은 키워드를 활용해 음악을 검색합니다.
- SpringBoot 서버는 검색된 결과를 토대로 Client에게 배경음악 데이터를 response합니다.
  - SpringBoot Response example
```json
[
    {
        "emotion": "슬픈",
        "ratio": 25.0,
        "title": "𝑃𝑙𝑎𝑦𝑙𝑖𝑠𝑡 너무 슬플 때 울려고 들었던 노래",
        "thumbnailPath": "https://i.ytimg.com/vi/U-2-uQ47sUutrRU/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=uQ47sUutrRU"
    },
    {
        "emotion": "제멋대로",
        "ratio": 50.0,
        "title": "[Mood List] Cloud | 내 기분은 완전 제멋대로야 |  𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕",
        "thumbnailPath": "https://i.ytimg.com/vi/U-2-tqvlBK8/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=U-2-tqvlBK8"
    },
    {
        "emotion": "감사",
        "ratio": 75.0,
        "title": "감사의 이별을 보낸다. / 슬픈 팝송 playlist",
        "thumbnailPath": "https://i.ytimg.com/vi/my7sDhPoBJc/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=my7sDhPoBJc"
    },
    {
        "emotion": "흡족한",
        "ratio": 100.0,
        "title": "[𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕] 🕺🏻 내가 만들고도 흡족한‼️들으면 절로 웃음이 새어나오는 애정의 플리🤍",
        "thumbnailPath": "https://i.ytimg.com/vi/X-1pJhR-w8k/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=X-1pJhR-w8k"
    }
]
```

## 🎨 UI

### 시작 화면

![노벨리즘 시작](https://user-images.githubusercontent.com/44965706/205597754-ae81dd33-4d3b-4eb2-b418-6fb2c1749838.gif)

### 홈 화면

![image](https://user-images.githubusercontent.com/44965706/205480176-08a8a46c-117d-42a1-ad28-98632c1a880d.png)

### 개발자 소개 페이지

![image](https://user-images.githubusercontent.com/44965706/205480222-49be80f2-1e51-4c6a-b495-0c2591659a4f.png)

### 장르 선택 페이지

![image](https://user-images.githubusercontent.com/44965706/205480248-e81f3bd1-4101-43a5-b5ed-1d06df6581aa.png)

- 별도의 통신 / 인증 과정 없이, `localStorage`를 활용하여 구현하였습니다.

### 웹 소설 플랫폼 이용

![시현](https://user-images.githubusercontent.com/44965706/205481483-c77a0ab3-3fad-413e-9d6c-eae869323eb1.gif)

- 읽고 있는 회차의 텍스트를 미리 스크래핑합니다.
  - 분석이 완료되기 전 까지 로딩 스피너가 나타납니다.
  - 스크롤되는 뷰포트에 따라서 음악이 바뀝니다.

### 노벨리즘 페이지

![image](https://user-images.githubusercontent.com/44965706/205480498-0d81a8d7-c573-455d-98db-e7b5bfa9a999.png)

![image](https://user-images.githubusercontent.com/44965706/205480539-db4ea121-7f04-4f30-864d-469fdb243205.png)
![2022-12-04 17;07;18](https://user-images.githubusercontent.com/44965706/205480607-65b13c84-15a0-4eb0-8bcc-bb73eff54266.gif)

- 사용자가 자체적으로 텍스트를 업로드하고 읽을 수 있는 페이지입니다.
- 등록한 소설의 메타데이터는 `localStorage`에 기록 됩니다.
- 서버로 전송된 텍스트는 자동으로 분석되어 배경음악으로 재생됩니다.
  - 분석이 완료되기 전 까지 로딩 스피너가 나타납니다.
  - 스크롤되는 뷰포트에 따라서 음악이 바뀝니다

## 💸 License

```
MIT License
Copyright (c) 2022 osogi2jo
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
