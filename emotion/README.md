# 감정 분석 실행 방법
```
pip install krwordrank
python3 main.py
```

# 감성 분석 구조
## main.py
textreader.py를 사용해서 소설을 25퍼센트씩 읽어들인다.
키워드 추출 모듈인 word.py와 감정 분석 모듈인 emotion.py를 사용한다.
소설을 읽어들여서 문자열 배열로 만든 뒤 키워드 추출 모듈로 넘긴다.
추출한 키워드들을 빈도수가 가장 높은 키워드부터 감정 분석 모듈에 넣고 감정 단어를 추출한다.

## textreader.py
소설 전문을 넣고 read 함수를 사용해서 꺼내 쓰는 클래스.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
text_reader = TextReader(novel)

text_reader.read() # 25퍼센트씩 read해서 문자열 배열 반환
```

## word.py
문자열 배열을 입력으로 받아서 그것을 정규화하고 키워드를 배열 형태로 반환한다.
``` python
novel = open(novel_path, 'r', encoding = 'utf-8').read()
keyword_detector = Word()
textreader = TextReader(novel)

texts = textreader.read() # 분석할 문장
min_value = 2 # 최소 빈도수
keyword_detector.get_word_from_novel(texts, min_value)
```

## emotion.py
단어가 감정단어인지를 판별하고 긍부정 정도를 반환한다.
``` python
emtion_detector = Emotion()
emotion_dectector.data_list("원하는 단어")
```