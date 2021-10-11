import numpy as np
# Format                          [O, C, E, A, N]
# Sam                             [0.96, 0.97, 0.90, 0.83, 0.07]

# Sam's Dad                       [0.80, 0.97, 0.29, 0.91, 0.68]
# Sangbum (HS best friend)        [0.88, 0.93, 0.78, 0.02, 0.07]
# Timor (new friend here at UIUC) [0.88, 0.76, 0.81, 0.93, 0.05]
# Janin (HS friend)               [0.70, 0.87, 0.96, 0.91, 0.22]
# Undesirable Person              [0.20, 0.20, 0.40, 1.00, 1.00]
# Izzy (HS best friend)           [0.80, 0.98, 0.63, 0.93, 0.02]
# Sreethan (HS best friend)       [0.88, 0.97, 0.83, 0.71, 0.11]

people = np.array([[0.80, 0.97, 0.29, 0.91, 0.68], 
                   [0.88, 0.93, 0.78, 0.02, 0.07], 
                   [0.88, 0.76, 0.81, 0.93, 0.05], 
                   [0.70, 0.87, 0.96, 0.91, 0.22],
                   [0.20, 0.20, 0.40, 1.00, 1.00],
                   [0.80, 0.98, 0.63, 0.93, 0.02],
                   [0.88, 0.97, 0.83, 0.71, 0.11]])

'''
  Computes the distance between user_id_0 and user_id_1, ..., user_id_n
'''
def distance(user_id_0, users):
  return np.sqrt(np.sum(np.power((np.tile(user_id_0, (len(users), 1)) - users), 2), axis=1))

def distanceNew(user_id_0, users):
  output = [[]]
  for n in range(0, len(users)):
    users_user_id = users[n][0]
    user_scores = users[n][1]
    distance = 0
    for d in range(0, len(user_scores)):
      distance += np.power(user_id_0[d] - user_scores[d], 2)
    distance = np.sqrt(distance)
    output.insert(users_user_id, distance)


def angle(user_id_0, users):
  output = []
  for n in range (0, len(users)):
    dot = np.dot(user_id_0, users[n,:])
    angle = np.arccos(dot / (np.linalg.norm(user_id_0) * np.linalg.norm(users[n,:])))
    output.append(angle)
  return np.array(output)

def angleNew(user_id_0, users):
  output = [[]]
  for n in range(0, len(users)):
    users_user_id = users[n][0]
    user_scores = users[n][1]
    output.insert(users_user_id, distance)

def rank(angles, distances):
  users_ranked = [[]]
  for n in range(0, len(angles)):
    users_ranked.insert(n, [n, 0.5 * angles[n] + 0.5 * distances[n]])
  return users_ranked

sam = np.array([0.96, 0.97, 0.9, 0.83, 0.07])
print(rank(angle(sam, people), distance(sam, people)))

# Final Algorithm
''' 
  Matching Algorithm
  Input: user_id_0, [user_id_1, ..., user_id_n]
  Output: [user_id_1, ..., user_id_n], ORDER BY closeness of match ASC.
'''
# def match(user):
  # Compute distance between user_id_1 and user_id_1, ..., user_id_n
  
  # Compute angle between user_id_1 and user_id_1, ..., user_id_n

