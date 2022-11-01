from emotion import Emotion 
import time
from word import Word

keyword_detector = Word
emotion_detector = Emotion

novel_path = 'emotion/novel.txt'

keywords,rank = keyword_detector.get_word_from_novel(novel_path)  # 소설에서 단어 읽어들이기

emotional_word = []
emotion_sum = 0

print('길이 : ',len(keywords))
start = time.time()
for wordname, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:30]:
    wordname = wordname.strip(" ")		
    word, emotion = emotion_detector.data_list(wordname) # 읽어들인 단어의 감정 분석
    if emotion != 'None':
        emotion_value = r*int(emotion)
        emotional_word.append((wordname,emotion_value))
        emotion_sum += emotion_value
end = time.time()

print('감정 분석 소요 시간 : ',end-start)

print('감정 총합 : ',emotion_sum)
print(emotional_word)