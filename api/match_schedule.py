import schedule, time, db, match

def calculate_matches(user_updates):
    users = db.get_users()
    matches = list(list())
    for n in range (0, len(users)):
        match(users[n], users)
        # Push this data to the user

schedule.every(5).minutes.do(calculate_matches)

while True:
    schedule.run_pending()
    time.sleep(1)

