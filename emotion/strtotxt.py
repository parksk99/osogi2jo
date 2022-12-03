class Convert():
    def __init__(self, novel):
        f = open("novel_str.txt", "wt", encoding= "utf-8")
        f.write(novel)
        f.close()
    
    #서버로 부터 str을 받아서 novel_str.txt로 저장