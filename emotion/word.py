from krwordrank.word import KRWordRank
import time
from krwordrank.hangle import normalize
 
class Word():
    def get_word_from_novel(self, texts):
        min_count = 2   # 단어의 최소 출현 빈도수 (그래프 생성 시)
        max_length = 10 # 단어의 최대 길이
        verbose =True
        wordrank_extractor = KRWordRank(min_count, max_length , verbose)
        
        beta = 0.5    # PageRank의 decaying factor beta
        max_iter = 10

        # with open(novel_path, 'r',encoding='UTF8') as f:
        # texts = []
        # for line in f:
        #     texts.append(line)
    
        texts = [normalize(text,english=False , number=True) for text in texts ]
        start= time.time()
        keywords, rank, graph = wordrank_extractor.extract(texts, beta, max_iter)
        end = time.time()
        print('소요 시간 : ',end-start)

        return keywords,rank