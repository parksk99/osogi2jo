from textreader import TextReader
import matplotlib.pyplot as plt
from word import Word
from emotion import Emotion

color = ['r','g','b']
emotion_detector = Emotion()
word = Word()
max = 12
count = [0 for i in range(max)]
for index in range(1,4):
    filename = './novel' + str(index) + '.txt'
    with open(filename, 'r') as novel_file:
        novel = novel_file.readlines()
        for i in range(0,max):
            unit_length = (i+1)*100
            for j in range(0,int(5000/unit_length)):
                keywords, rank = word.get_word_from_novel(novel[j*unit_length:(j+1)*(unit_length)],2)
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
    mean = sum(count)/len(count)
    plt.plot([(i+1)*100 for i in range(max)], count,color[index-1])
    # plt.plot(index*100,mean,'o'+color[index-1])
    
    plt.show()
    # plt.savefig('test'+str(index)+'.png')
plt.savefig('testtotal.png')
    