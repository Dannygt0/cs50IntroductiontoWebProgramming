SELECT description FROM crime_scene_reports WHERE month = 7 AND day = 28 AND year = 2025 AND street = 'Humphrey Street';

SELECT name, transcript FROM interviews WHERE month = 7 AND day = 28 AND year = 2025 AND transcript LIKE '%bakery%';

SELECT license_plate FROM bakery_security_logs WHERE hour = 10 AND minute >= 15 AND minute <= 25 AND activity = 'exit';

SELECT account_number FROM atm_transactions WHERE atm_location = 'Leggett Street' AND transaction_type = 'withdraw' AND day = 28 AND month = 7 AND year = 2025;

SELECT name FROM people WHERE license_plate IN (    SELECT license_plate FROM bakery_security_logs     WHERE year = 2025 AND month = 7 AND day = 28     AND hour = 10 AND minute >= 15 AND minute <= 25     AND activity = 'exit');


SELECT name FROM people JOIN bakery_security_logs ON people.license_plate = bakery_security_logs.license_plate
WHERE year = 2025 AND month = 7 AND day = 28 AND hour = 10 AND minute >= 15 AND minute <= 25
INTERSECT SELECT name FROM people JOIN bank_accounts ON people.id = bank_accounts.person_id
JOIN atm_transactions ON bank_accounts.account_number = atm_transactions.account_number
WHERE atm_location = 'Leggett Street' AND transaction_type = 'withdraw' AND year = 2025 AND month = 7 AND day = 28
INTERSECT SELECT name FROM people JOIN phone_calls ON people.phone_number = phone_calls.caller
WHERE year = 2025 AND month = 7 AND day = 28 AND duration < 60;

SELECT id, hour, minute FROM flights WHERE year = 2025 AND month = 7 AND day = 29 ORDER BY hour, minute LIMIT 1;

SELECT name FROM people  JOIN passengers ON people.passport_number = passengers.passport_number WHERE passengers.flight_id = 36;


SELECT name FROM people WHERE phone_number = (  SELECT receiver FROM phone_calls WHERE caller = (SELECT phone_number FROM people WHERE name = 'Bruce') AND day = 28 AND month = 7 AND year = 2025 AND duration < 60 );

SELECT city FROM airports WHERE id = (SELECT destination_airport_id FROM flights WHERE id = 36);
