text = input("Enter the text you would like to examine: ")
letters = 0
words = 1
for char in text:
    if char .isalpha():
     letters += 1
    elif char == " ":
        words +=1

print(letters)
print(words)
