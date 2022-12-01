from emotion import Emotion 
from textreader import TextReader
import time
from word import Word

keyword_detector = Word()
emotion_detector = Emotion()

#파일에서 읽기
novel_path = 'novel3.txt'    #5000줄로 늘림
novel= open(novel_path, 'r', encoding = 'utf-8').read()

unit_array = []
result_array = []

text_reader = TextReader(novel)

maxCount = 12
bestIndex = 0
count = [0 for i in range(maxCount)]

with open(novel_path, 'r', encoding = 'utf-8') as novel_file:   #문단 단위 정하기
        novel = novel_file.readlines()
        for i in range(0,maxCount):
            unit_length = (i+1)*100 #소설 문단 단위 100씩 증가
            for j in range(0,int(5000/unit_length)):
                keywords, rank = keyword_detector.get_word_from_novel(novel[j*unit_length:(j+1)*(unit_length)],2)
                if(keywords is None):
                    print(unit_length,'keyword is not detected')
                    continue
                for wordname, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:30]:
                    wordname = wordname.strip(" ")	
                    tmp, emotion = emotion_detector.data_list(wordname =  wordname)
                    if emotion != 'None':
                        count[i] = count[i]+1
                # count[i] = count[i]+len(keywords)
            count[i] = count[i] / (5000/unit_length)
            unit_array.append(count[i])
            if i == 0:
                bestCount = count[i]
                bestIndex = i
            elif count[i] > bestCount:
                bestCount = count[i]
                bestIndex = i

unit_length = (bestIndex+1)*100

while(True):
    texts = text_reader.read()
    if texts is None:
        break

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
               # result_array.append((wordname,(text_reader.readsentence/text_reader.novel_len)*100))

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
               #     result_array.append((wordname,(text_reader.readsentence/text_reader.novel_len)*100))
    if(len(emotional_word)!=0):
        max_word = max(emotional_word, key = lambda x : x[1])
        # result_array.append((max_word[0],max_word[2]))
        result_array.append((max_word))
        # max_word = max(emotional_word, key = lambda x : x[1])
        # result_array.append((max_word[0],max_word[2]))

    # start_pos = end_pos
    # end_pos = start_pos + max_unit
    # print('문장 측정 수 : ', max_unit)
    # print('길이 : ',len(keywords))
    # print('감정 분석 소요 시간 : ',end-start)
    # print('감정 총합 : ',emotion_sum)
    # print(emotional_word)
    # print('============================================================================================================')    
print('result : ',result_array)
    


