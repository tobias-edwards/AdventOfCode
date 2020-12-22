startingNumbers = [2,1,10,11,0,6]
lastUsed = {n: i for i, n in enumerate(startingNumbers)}

nextNum = 0
lastNum = 0

nth = 30000000
for i in range(len(startingNumbers), nth-1):
    if nextNum in lastUsed:
        nextNum = i - lastUsed[nextNum]
    else:
        nextNum = 0
    lastUsed[lastNum] = i
    lastNum = nextNum

print(lastNum)
