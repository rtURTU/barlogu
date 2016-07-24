import requests
import json

from cf import cf_problem_map
from cf import ia_problem_map
from cf import pb_problem_map

class UserInfo:
	def __init__(self):
		#hardcoded ftm
		self.cf = "dyskode"
		self.ia = "dyskode"
		self.pb = "dyskode"
	def cf_problems(self):
		problem_map = cf_problem_map(self.cf)
		problem_list = ["http://codeforces.com/contest/" + str(c) + "/problem/" + str(p) for (c, p) in problem_map]
		return problem_list
	def ia_problems(self):
		return ia_problem_map(self.ia)
	def pb_problems(self):
		return pb_problem_map(self.ia)

def main():
	pass

if __name__ == "__main__":
	user = UserInfo()
	print json.dumps({'name' : user.cf,
		'cf' : user.cf_problems(),
		'ia' : user.ia_problems(),
		'pb' : user.pb_problems()
	});
	