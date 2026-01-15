SELECT description FROM crime_scene_reports WHERE month = 7 AND day = 28 AND year = 2025 AND street = 'Humphrey Street';

SELECT name, transcript FROM interviews WHERE month = 7 AND day = 28 AND year = 2025 AND transcript LIKE '%bakery%';

SELECT license_plate FROM bakery_security_logs WHERE hour = 10 AND minute >= 15 AND minute <= 25 AND activity = 'exit';

SELECT account_number FROM atm_transactions WHERE atm_location = 'Leggett Street' AND transaction_type = 'withdraw' AND day = 28 AND month = 7 AND year = 2025;

SELECT name FROM people WHERE license_plate IN (    SELECT license_plate FROM bakery_security_logs     WHERE year = 2025 AND month = 7 AND day = 28     AND hour = 10 AND minute >= 15 AND minute <= 25     AND activity = 'exit');
