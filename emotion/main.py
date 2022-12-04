from emotion import Emotion 
from textreader import TextReader
from word import Word

keyword_detector = Word()
emotion_detector = Emotion()

#파일에서 읽기
novel_path = 'novel.txt'    
novel= open(novel_path, 'r', encoding = 'utf-8').read()

result_array = []

text_reader = TextReader(novel)
while(True):
    texts = text_reader.read()
    if texts is None:
        break

    unit_length = int(text_reader.novel_len/5)
    emotional_word = []
    for i in range(0, 5):
        tmp = texts[unit_length*i : unit_length*(i+1)]
        keywords,rank = keyword_detector.get_word_from_novel(tmp, 2)  # 소설에서 단어 읽어들이기
        if(keywords == None):
            continue
        emotion_sum = 0

        for wordname, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:30]:
            wordname = wordname.strip(" ")	
            word, emotion = emotion_detector.data_list(wordname =  wordname) # 읽어들인 단어의 감정 분석
            if emotion != 'None':
                emotion_value = abs(r*int(emotion))
                emotional_word.append((wordname,emotion_value,(text_reader.readsentence/text_reader.novel_len)*100,i))
                emotion_sum += emotion_value

        if emotion_sum == 0:        #만약 감정 단어를 추출하지 못했다면
            print('감정 추출 결과 없음, 빈도수 조정')
            keywords,rank = keyword_detector.get_word_from_novel(texts, 1)  #min_count값을 1로 다시 추출함
            for wordname, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:30]:
                wordname = wordname.strip(" ")		
                word, emotion = emotion_detector.data_list(wordname =  wordname) # 읽어들인 단어의 감정 분석
                if emotion != 'None':
                    emotion_value = abs(r*int(emotion))
                    emotional_word.append((wordname,emotion_value,(text_reader.readsentence/text_reader.novel_len)*100,i))
                    emotion_sum += emotion_value
    if(len(emotional_word)!=0):
        max_word = max(emotional_word, key = lambda x : x[1])
        result_array.append((max_word[0],max_word[2]))


print('result : ',result_array)
    


