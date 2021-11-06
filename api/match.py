import numpy as np

''' 
  Matching Algorithm
  Input: user_id_0, [user_id_1, ..., user_id_n]
  Output: [user_id_1, ..., user_id_n], ORDER BY closeness of match ASC.
'''
def match(user_id_0, users):
  return rank(angle(user_id_0, users), distance(user_id_0, users))
  
'''
  Computes the distance between vectors user_id_0 and user_id_1, ..., user_id_n
'''
def distance(user_id_0, users):
  return np.sqrt(np.sum(np.power((np.tile(user_id_0, (len(users), 1)) - users), 2), axis=1))

'''
  Computes the angle between vectors user_id_0 and user_id_1, ..., user_id_n
'''
def angle(user_id_0, users):
  output = []
  for n in range (0, len(users)):
    dot = np.dot(user_id_0, users[n,:])
    angle = np.arccos(dot / (np.linalg.norm(user_id_0) * np.linalg.norm(users[n,:])))
    output.append(angle)
  return np.array(output)

'''
  Ranks user_id_1, ..., user_id_n using an equally-weighted (50%/50%) distance and angle calculation.
  Smaller numbers are better. This means user_id_n's personality is close to user_id_0's personality.
'''
def rank(angles, distances):
  users_ranked = list(list())
  for n in range(0, len(angles)):
    users_ranked.insert(n, [n, 0.5 * angles[n] + 0.5 * distances[n]])
  users_sorted = sorted(users_ranked, key = lambda x: x[1])
  ranked_list = list()
  for n in range(0, len(users_sorted)):
    ranked_list.append(users_sorted[n][0])
  return ranked_list




