text = input("Enter the text you would like to examine: ")
letters = 0
words = 1
sentences = 0

for char in text:
    if char .isalpha():
     letters += 1
    elif char == " ":
        words +=1
    elif char == "." or char == "!" or char == "?":
        sentences +=1

l = 100 * (letters / words)
s = 100 * (sentences / words)
index = 0.0588 * l - 0.296 * s - 15.8
print(letters)
print(words)
print(sentences)
print(index)
