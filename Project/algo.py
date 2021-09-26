def calculateScore(user_id, responses):

    openness_score = 0
    conscientiousness_score = 0
    extroversion_score = 0
    agreeableness_score = 0
    neuroticism_score = 0

    for n in range(0, len(responses)):
        tuple = responses[n]
        dimension_id = tuple[0]
        score = tuple[1]
        if (dimension_id == 1):
            openness_score += score
        elif (dimension_id == 2):
            conscientiousness_score += score
        elif (dimension_id == 3):
            extroversion_score += score
        elif (dimension_id == 4):
            agreeableness_score += score
        elif (dimension_id == 5):
            neuroticism_score += score
    
    return [user_id, openness_score, conscientiousness_score, extroversion_score, agreeableness_score, neuroticism_score]

