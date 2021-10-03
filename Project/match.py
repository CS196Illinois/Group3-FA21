import numpy as np

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

def distanceAlgo(A, people):
  '''
  #closestMatch = None
  for n in range (0, len(people)):
    distance = np.sqrt(np.sum(np.power((A - people), 2)))
    if distance < minDist:
      minDist = distance
      #closestMatch = people[n,:]
  '''
  return np.sqrt(np.sum(np.power((np.tile(A, (len(people), 1)) - people), 2), axis=1))

def angleAlgo(A, people):
  #closestMatch = None
  output = []
  for n in range (0, len(people)):
    dot = np.dot(A, people[n,:])
    angle = np.arccos(dot / (np.linalg.norm(A) * np.linalg.norm(people[n,:])))
    output.append(angle)
  return np.array(output)

def rank(angles, distances):
  return .5 * angles + .5 * distances

sam = np.array([0.96, 0.97, 0.9, 0.83, 0.07])
rank(angleAlgo(sam, people), distanceAlgo(sam, people))
