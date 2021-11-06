import numpy as np
import match as m

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

sam = np.array([0.96, 0.97, 0.9, 0.83, 0.07])
# m.rank(m.angle(sam, people), m.distance(sam, people))

print(m.match(sam, people))