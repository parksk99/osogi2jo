import json

class Emotion():
	def __init__(self):
		with open('knusl/data/SentiWord_info.json', encoding='utf-8-sig', mode='r') as f:
			self.data = json.load(f)
	def data_list(self, wordname):   
		result = ['None','None']
		for i in range(0, len(self.data)):
			if self.data[i]['word'] == wordname:
				result.pop()
				result.pop()
				result.append(self.data[i]['word_root'])
				result.append(self.data[i]['polarity'])   
		
		r_word = result[0]
		s_word = result[1]
		
		return r_word, s_word