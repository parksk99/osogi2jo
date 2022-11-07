# 감정 분석 실행 방법
```
pip install krwordrank
python3 main.py
```

# 감성 분석 구조
## main.py
키워드 추출 모듈인 word.py와 감정 분석 모듈인 emotion.py를 사용한다.
소설을 읽어들여서 문자열 배열로 만든 뒤 키워드 추출 모듈로 넘긴다.
추출한 키워드들을 빈도수가 가장 높은 키워드부터 감정 분석 모듈에 넣고 감정 단어가 나올 때 까지 순회한다.

## word.py
문자열 배열을 input으로 받아서 그것을 정규화하고 키워드를 배열을 output한다.

## emotion.py
문자열을 input으로 받아서 그것이 감정 사전에 있는지 확인하고 사전에 존재한다면 감정 단어와 긍부정 정도를 output한다.

