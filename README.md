![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Novelismπ§&fontAlign=70&fontAlignY=35&color=gradient)

# μΉ μμ€μ λ κ°κ°μ μΌλ‘ μ¦κΈ°λ λ°©λ², Novelism π§

## π Index

- [μΉ μμ€μ λ κ°κ°μ μΌλ‘ μ¦κΈ°λ λ°©λ², Novelism π§](#μΉ-μμ€μ-λ-κ°κ°μ μΌλ‘-μ¦κΈ°λ-λ°©λ²-novelism-)
  - [π Index](#-index)
  - [π  About Novelism](#-about-novelism)
  - [β¨ Overview](#-overview)
  - [πββοΈ Demonstrate](#οΈ-demonstrate)
  - [π Getting Started](#-getting-started)
  - [π Installing](#-installing)
  - [π Contributing](#-contributing)
  - [πΆ Team](#-team)
  - [π Open Source](#-open-source)
  - [π κ°μ  λΆμ μ€ν λ°©λ²](#-κ°μ -λΆμ-μ€ν-λ°©λ²)
    - [κ°μ± λΆμ κ΅¬μ‘°](#κ°μ±-λΆμ-κ΅¬μ‘°)
    - [main.py](#mainpy)
    - [textreader.py](#textreaderpy)
    - [word.py](#wordpy)
    - [emotion.py](#emotionpy)
  - [β Backend](#-backend)
    - [Server Architecture](#Server-Architecture)
    - [Server to Server Logic](#server-to-server-logic)
  - [π¨ UI](#-ui)
    - [μμ νλ©΄](#μμ-νλ©΄)
    - [ν νλ©΄](#ν-νλ©΄)
    - [κ°λ°μ μκ° νμ΄μ§](#κ°λ°μ-μκ°-νμ΄μ§)
    - [μ₯λ₯΄ μ ν νμ΄μ§](#μ₯λ₯΄-μ ν-νμ΄μ§)
    - [μΉ μμ€ νλ«νΌ μ΄μ©](#μΉ-μμ€-νλ«νΌ-μ΄μ©)
    - [λΈλ²¨λ¦¬μ¦ νμ΄μ§](#λΈλ²¨λ¦¬μ¦-νμ΄μ§)
  - [πΈ License](#-license)

## π  About Novelism

- μ΅κ·Ό `κΉλΉμκ° μ κ·Έλ΄κΉ` `μ¬λ΄λ§μ ` `μ¬λ²μ§ λ§λ΄μλ€`λ± λ€μν μΉ μμ€μ΄ λλΌλ§ν λ  λ§νΌ, **μΉ μμ€**μ λν κ΄μ¬μ΄ ν¬κ² λμ΄λ¬μ΅λλ€.
- νΉν μΉν° OST μμ₯μ΄ 1μ‘° 5μ²μ΅μμ λκ²Όλ κ² μ²λΌ, **μΉ μμ€ OST μμ₯** μ­μ ν¬κ² μ±μ₯ν  κ²μ΄λΌκ³  μμνκ³  μμ΅λλ€.
- μ λκ°μ§ μ΄μ λ‘, μ¬μ©μ κ°κ°μ μ·¨ν₯κ³Ό μΉ μμ€ λΆμκΈ°μ κΈ°λ°ν **λ°°κ²½μμ μΆμ² μλ£¨μ**μ μ°κ΅¬ν©λλ€.

## β¨ Overview

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Java-744e3b?style=plastic-square&logo=&logoColor=white"/> <img src="https://img.shields.io/badge/Python-3776AB?style=plastic-square&logo=Python&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=plastic-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Electron-47848F?style=plastic-square&logo=Electron&logoColor=white"/> <img src="https://img.shields.io/badge/Django-092E20?style=plastic-square&logo=Django&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=plastic-square&logo=Spring Boot&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/Selenium-43B02A?style=plastic-square&logo=Selenium&logoColor=white"/> <img src="https://img.shields.io/badge/NGINX-009639?style=plastic-square&logo=NGINX&logoColor=white"/> <img src="https://img.shields.io/badge/Gunicorn-499848?style=plastic-square&logo=Gunicorn&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=plastic-square&logo=styled-components&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=plastic&logo=Amazon EC2&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=plastic&logo=Figma&logoColor=white"/>

> **νμ¬ Tocsoda νλ«νΌλ§ μ΄μ© κ°λ₯ν©λλ€ :(**<br/>
> μ μκΆ κ΄λ ¨ μ€ν¬λν λ¬Έμ λ‘ μΈν΄ ν νλ«νΌ μ΄μ©μ΄ λΆκ°λ₯ν©λλ€.<br/>

- μ¬μ©μ μμ μ·¨ν₯ λΆμ
  - νμ μ¦κ²¨ λ£λ μν°μ€νΈλ₯Ό μ΅λ 10λͺκΉμ§ μ ν κ°λ₯
  - μλμΌλ‘ μ νΈ μ₯λ₯΄λ₯Ό λΆμνμ¬ `localStorage`μ μ μ₯
- μ¬μ©μ μμ²΄ νμ€νΈλ³Έ μλ‘λ / μΉ μμ€ νλ«νΌ μ μ
  - μμ€ μλ λΆμ
  - κ°μ μ΄μ μ€ν¬λ‘€ μμ­μ λΉμ¨λ‘ κ΅¬λΆ
  - κ° κ°μ μ΄μ μ₯λ₯΄ μ·¨ν₯μ λ§λ μμμ λΆμ
  - μ¬μ©μμ μ€ν¬λ‘€μ΄ λΆμκΈ°κ° λ°μ λλ λ·°ν¬νΈμ λΏμμ λ, μλμΌλ‘ μμ μ ν
  
## πββοΈ Demonstrate
- [μν°μ€νΈ μ ν λ° μ νΈ μ₯λ₯΄ λΆμ μνμμ](https://www.youtube.com/watch?v=n-djHKWZwuw)
- [μΉ μμ€ νλ«νΌ μ΄μ© μνμμ](https://www.youtube.com/watch?v=6eqqLBvENQU)
- [μ¬μ©μ νμ€νΈλ³Έ μλ ₯ ν μ΄μ© μνμμ](https://www.youtube.com/watch?v=mPmlnApK7ak&feature=youtu.be)

## π Getting Started

```javascrip
    $ git clone
    $ yarn install
    $ yarn dev
```

## π Installing

1. [λ€μ΄λ‘λ λ§ν¬](https://drive.google.com/file/d/1dXn2StlhVDKARh8FPmXnGyB_1-d2hDfa/view?usp=sharing)μμ Setup νμΌ λ€μ΄λ‘λ
2. Novelism μ€μΉ λ° μ€ν
3. μμ μ·¨ν₯ λ±λ‘
4. μΉ μμ€ κ°μ

## π Contributing

> μ΄ 5λͺμ νμμ΄ μμ±ν νλ‘μ νΈμλλ€.

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

## πΆ Team

- [DaeHyunKwon](https://github.com/neoskyclad) - **Natural Language Processing** - <neoskyclad@naver.com>
- [HyeonWooKim](https://github.com/qualificationalitated) - **Natural Language Processing** - <abc9548@naver.com>
- [SeongGyuPark](https://github.com/parksk99) - **Natural Language Processing** - <qkrtjdrb99@naver.com>
- [SeungminRyu](https://github.com/99winnmin) - **Backend Development** - <ojysep9987@gmail.com>
- [JunkyuLee](https://github.com/Jun99uu) - **Frontend Development** - <igun0423@naver.com>

## π Open Source

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

## π κ°μ  λΆμ μ€ν λ°©λ²
```
pip install krwordrank
python3 main.py
```

### κ°μ± λΆμ κ΅¬μ‘°
### main.py
textreader.pyλ₯Ό μ¬μ©ν΄μ μμ€μ 25νΌμΌνΈμ© μ½μ΄λ€μΈλ€.
ν€μλ μΆμΆ λͺ¨λμΈ word.pyμ κ°μ  λΆμ λͺ¨λμΈ emotion.pyλ₯Ό μ¬μ©νλ€.
μμ€μ μ½μ΄λ€μ¬μ λ¬Έμμ΄ λ°°μ΄λ‘ λ§λ  λ€ ν€μλ μΆμΆ λͺ¨λλ‘ λκΈ΄λ€.
μΆμΆν ν€μλλ€μ λΉλμκ° κ°μ₯ λμ ν€μλλΆν° κ°μ  λΆμ λͺ¨λμ λ£κ³  κ°μ  λ¨μ΄λ₯Ό μΆμΆνλ€.

### textreader.py
μμ€ μ λ¬Έμ λ£κ³  read ν¨μλ₯Ό μ¬μ©ν΄μ κΊΌλ΄ μ°λ ν΄λμ€.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
text_reader = TextReader(novel)

text_reader.read() # 25νΌμΌνΈμ© readν΄μ λ¬Έμμ΄ λ°°μ΄ λ°ν
```

### word.py
λ¬Έμμ΄ λ°°μ΄μ μλ ₯μΌλ‘ λ°μμ κ·Έκ²μ μ κ·ννκ³  ν€μλλ₯Ό λ°°μ΄ ννλ‘ λ°ννλ€.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
keyword_detector = Word()
textreader = TextReader(novel)

texts = textreader.read() # λΆμν  λ¬Έμ₯
min_value = 2 # μ΅μ λΉλμ
keyword_detector.get_word_from_novel(texts, min_value)
```

### emotion.py
λ¨μ΄κ° κ°μ λ¨μ΄μΈμ§λ₯Ό νλ³νκ³  κΈλΆμ  μ λλ₯Ό λ°ννλ€.
``` python
emtion_detector = Emotion()
emotion_dectector.data_list("μνλ λ¨μ΄")
```
## π‘ Backend
### Server Architecture
![qwer](https://user-images.githubusercontent.com/44975402/205934250-71cab45b-a5c7-4032-a5f9-6396d4c3849d.jpg)
- Django : AWS EC2 λ°°ν¬ λ° Nginx, Gunicorn μ°λ
- SpringBoot : AWS EC2 λ°°ν¬ λ° Nginx μ°λ

### Server to Server Logic
- SpringBoot μλ²λ Clientλ‘λΆν° νμ€νΈ λΆμ μμ²­μ μμ ν©λλ€.
- Django μλ²λ SpringBoot μλ²λ‘λΆν° μμ€ νμ€νΈ νΉμ μμ€ Urlμ μμ ν©λλ€.
- Django μλ²λ μμ  λ°μ νμ€νΈλ₯Ό λΆμν©λλ€.
- Django μλ²λ μμ  λ°μ μμ€ Urlκ³Ό seleniumμ μ΄μ©νμ¬ μμ€ λ³Έλ¬Έμ ν¬λ‘€λ§νμ¬ λΆμν©λλ€.
- Django μλ²λ λΆμμ΄ λλ λ΄μ©μ SpringBoot μλ²λ‘ response ν©λλ€.
  - Django Response example
```json
[
    {
        "emotion": "μ¬ν",
        "ratio": 25.0
    },
    {
        "emotion": "μ λ©λλ‘",
        "ratio": 50.0
    },
    {
        "emotion": "κ°μ¬",
        "ratio": 75.0
    },
    {
        "emotion": "ν‘μ‘±ν",
        "ratio": 100.0
    }
]
```
- SpringBoot μλ²λ Youtube Search APIλ₯Ό νμ©ν΄ Django μλ²λ‘λΆν° μμ λ°μ ν€μλλ₯Ό νμ©ν΄ μμμ κ²μν©λλ€.
- SpringBoot μλ²λ κ²μλ κ²°κ³Όλ₯Ό ν λλ‘ Clientμκ² λ°°κ²½μμ λ°μ΄ν°λ₯Ό responseν©λλ€.
  - SpringBoot Response example
```json
[
    {
        "emotion": "μ¬ν",
        "ratio": 25.0,
        "title": "ππππ¦πππ π‘ λλ¬΄ μ¬ν λ μΈλ €κ³  λ€μλ λΈλ",
        "thumbnailPath": "https://i.ytimg.com/vi/U-2-uQ47sUutrRU/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=uQ47sUutrRU"
    },
    {
        "emotion": "μ λ©λλ‘",
        "ratio": 50.0,
        "title": "[Mood List] Cloud | λ΄ κΈ°λΆμ μμ  μ λ©λλ‘μΌ |  π·πππππππ",
        "thumbnailPath": "https://i.ytimg.com/vi/U-2-tqvlBK8/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=U-2-tqvlBK8"
    },
    {
        "emotion": "κ°μ¬",
        "ratio": 75.0,
        "title": "κ°μ¬μ μ΄λ³μ λ³΄λΈλ€. / μ¬ν νμ‘ playlist",
        "thumbnailPath": "https://i.ytimg.com/vi/my7sDhPoBJc/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=my7sDhPoBJc"
    },
    {
        "emotion": "ν‘μ‘±ν",
        "ratio": 100.0,
        "title": "[π·πππππππ] πΊπ» λ΄κ° λ§λ€κ³ λ ν‘μ‘±νβΌοΈλ€μΌλ©΄ μ λ‘ μμμ΄ μμ΄λμ€λ μ μ μ νλ¦¬π€",
        "thumbnailPath": "https://i.ytimg.com/vi/X-1pJhR-w8k/default.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=X-1pJhR-w8k"
    }
]
```

## π¨ UI

### μμ νλ©΄

![λΈλ²¨λ¦¬μ¦ μμ](https://user-images.githubusercontent.com/44965706/205597754-ae81dd33-4d3b-4eb2-b418-6fb2c1749838.gif)

### ν νλ©΄

![image](https://user-images.githubusercontent.com/44965706/205480176-08a8a46c-117d-42a1-ad28-98632c1a880d.png)

### κ°λ°μ μκ° νμ΄μ§

![image](https://user-images.githubusercontent.com/44965706/205480222-49be80f2-1e51-4c6a-b495-0c2591659a4f.png)

### μ₯λ₯΄ μ ν νμ΄μ§

![image](https://user-images.githubusercontent.com/44965706/205480248-e81f3bd1-4101-43a5-b5ed-1d06df6581aa.png)

- λ³λμ ν΅μ  / μΈμ¦ κ³Όμ  μμ΄, `localStorage`λ₯Ό νμ©νμ¬ κ΅¬ννμμ΅λλ€.

### μΉ μμ€ νλ«νΌ μ΄μ©

![μν](https://user-images.githubusercontent.com/44965706/205481483-c77a0ab3-3fad-413e-9d6c-eae869323eb1.gif)

- μ½κ³  μλ νμ°¨μ νμ€νΈλ₯Ό λ―Έλ¦¬ μ€ν¬λνν©λλ€.
  - λΆμμ΄ μλ£λκΈ° μ  κΉμ§ λ‘λ© μ€νΌλκ° λνλ©λλ€.
  - μ€ν¬λ‘€λλ λ·°ν¬νΈμ λ°λΌμ μμμ΄ λ°λλλ€.

### λΈλ²¨λ¦¬μ¦ νμ΄μ§

![image](https://user-images.githubusercontent.com/44965706/205480498-0d81a8d7-c573-455d-98db-e7b5bfa9a999.png)

![image](https://user-images.githubusercontent.com/44965706/205480539-db4ea121-7f04-4f30-864d-469fdb243205.png)
![2022-12-04 17;07;18](https://user-images.githubusercontent.com/44965706/205480607-65b13c84-15a0-4eb0-8bcc-bb73eff54266.gif)

- μ¬μ©μκ° μμ²΄μ μΌλ‘ νμ€νΈλ₯Ό μλ‘λνκ³  μ½μ μ μλ νμ΄μ§μλλ€.
- λ±λ‘ν μμ€μ λ©νλ°μ΄ν°λ `localStorage`μ κΈ°λ‘ λ©λλ€.
- μλ²λ‘ μ μ‘λ νμ€νΈλ μλμΌλ‘ λΆμλμ΄ λ°°κ²½μμμΌλ‘ μ¬μλ©λλ€.
  - λΆμμ΄ μλ£λκΈ° μ  κΉμ§ λ‘λ© μ€νΌλκ° λνλ©λλ€.
  - μ€ν¬λ‘€λλ λ·°ν¬νΈμ λ°λΌμ μμμ΄ λ°λλλ€

## πΈ License

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
