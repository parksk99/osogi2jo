### 생성시 소설 전문을 넣고 read 함수를 사용해서 꺼내 쓰는 클래스.
class TextReader():
    def __init__(self, novel):
        self.novel = novel.split('\n')
        self.novel_len = len(self.novel)
        self.count = int(self.novel_len / 4)
        self.readsentence = 0

    ### 만약 마지막에 도달했다면 None을 반환하고
    ### 그렇지 않다면 넣은 단위 크기만큼의 문장 배열을 반환한다.
    ### 남은 양이 단위 크기보다 적다면 알아서 마지막까지 반환.
    def read(self):
        if self.readsentence >= self.novel_len:
            return None
        ret = self.novel[self.readsentence:self.readsentence+self.count] # 이전에 읽은 문장 다음부터 count개의 문장을 반환
        self.readsentence = self.readsentence + self.count
        return ret 
        