#!/usr/bin/env python

import requests
import json

def cf_problem_map(user):
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
	return problem_map

def get_by_patterns(user, model, start, stop, check, host):
	r = requests.get(model)
	content = str(r.content)

	l = content.find(start)
	r = content.find(stop, l + 1)
	p = content.find(check, l + 1)

	problem_list = []

	while p < r:
		problem = ""
		while content[p] != '\"':
			problem += content[p]
			p += 1
		if p > r:
			break
		p = content.find(check, p)
		problem_list.append(host + problem)
	return problem_list

def ia_problem_map(user):
	model = "http://www.infoarena.ro/utilizator/"+ user +"?action=stats"
	return get_by_patterns(
		user,
		model, 
		"<h3>Probleme rezolvate</h3>", 
		"<h3>Probleme incercate</h3>", 
		"problema",
		"http://www.infoarena.ro/"
	) 

def pb_problem_map(user):
	model = "http://www.pbinfo.ro/?pagina=profil&subpagina=probleme&user=" + user
	return get_by_patterns(
		user,
		model, 
		"probleme rezolvate", 
		"nerezolvate", 
		"?pagina=judge-board&id_problema=",
		"http://www.pbinfo.ro/"
	) 

def main():
	pass

if __name__ == "__main__":
	pass	