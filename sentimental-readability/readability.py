text = input("Enter the text you would like to examine: ")
letters = 0
words = 1
sentences = 0

for char in text:
    if char .isalpha():
        letters += 1
    elif char == " ":
        words += 1
    elif char == "." or char == "!" or char == "?":
        sentences += 1

l = 100 * (letters / words)
s = 100 * (sentences / words)
index = 0.0588 * l - 0.296 * s - 15.8
grade = round(index)

if grade >= 16:
    print("Grade 16+")
elif grade < 1:
    print("Before Grade 1")
else:
    print(f"Grade {grade}")
