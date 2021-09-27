import pandas

def calculateScore(user_id, responses):

    total_score = 20

    openness_score = 0
    conscientiousness_score = 0
    extroversion_score = 0
    agreeableness_score = 0
    neuroticism_score = 0

    for n in range(0, len(responses)):
        # Question: [dimension_id, user_score, direction]

        question = responses[n]
        dimension_id = question[1]
        user_score = question[2]
        direction = question[3]

        positive = False
        if (direction == "+"):
            positive = True

        if (dimension_id == 1):
            if (positive):
                openness_score += user_score
            else:
                openness_score -= user_score
        elif (dimension_id == 2):
            if (positive):
                conscientiousness_score += user_score
            else:
                conscientiousness_score -= user_score
        elif (dimension_id == 3):
            if (positive):
                extroversion_score += user_score
            else:
                extroversion_score -= user_score
        elif (dimension_id == 4):
            if (positive):
                agreeableness_score += user_score
            else:
                agreeableness_score -= user_score
        elif (dimension_id == 5):
            if (positive):
                neuroticism_score += user_score
            else:
                neuroticism_score -= user_score

    openness_score /= total_score
    conscientiousness_score /= total_score
    extroversion_score /= total_score
    agreeableness_score /= total_score
    neuroticism_score /= total_score # Needs to be tweaked to accomodate the negative scoring questions
    
    return [user_id, openness_score, conscientiousness_score, extroversion_score, agreeableness_score, neuroticism_score]


''' Format of responses is a two dimensional list.
The first dimension corresponds to the number of questions (will always be 20)
The second dimension corresponds to the metadata about the question
    Question: [dimension_id, user_score, direction]
        Note that direction is binary: positive or negative.

'''

pd = 

print(calculateScore(3, responses))