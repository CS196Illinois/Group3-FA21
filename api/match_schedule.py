import schedule, time, db

def calculate_matches():
    db.run_ranker()

schedule.every(5).minutes.do(calculate_matches)

while True:
    schedule.run_pending()
    time.sleep(1)

