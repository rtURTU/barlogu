#!/usr/bin/env python

import requests
import json

def get_problems(user):
	model = "http://codeforces.com/api/user.status?handle=" + user + "&from=1"
	r = requests.get(model)

	v = 0
	problem_map = {}
	content = json.loads(r.content)
	for obj in content["result"]:
		ctst = obj["problem"]["contestId"]
		problem = obj["problem"]["index"][0]
		
		if str(obj["verdict"]) =="OK":
			problem_map[(ctst, problem)] = 1
	return len(problem_map)

users = ["dyskode", "danalex"] 
for user in users:
	print "<p>"
	print get_problems(user)
	print "</p>"

def main():
    return 0 
if __name__ == "__main__":
    x = main()
