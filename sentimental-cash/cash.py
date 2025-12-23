from cs50 import get_float
while True:
    change = get_float("Change owed: ")
    if change >= 0:
        break

cents = int(change * 100)

quarter = int(cents / 25)
cents = cents % 25
dime = int(cents / 10)
cents = cents % 10
nickle = int(cents / 5)
cents = cents % 5
penny = cents
print(quarter+dime+nickle+penny)
