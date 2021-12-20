import math
def fuelCost(filename):
    with open(filename) as f:
        data = f.readlines()
        data = sorted([int(i) for i in data[0].split(',')])
        pos = sum(data)/len(data)
        pos1 = math.floor(pos)
        pos2 = math.ceil(pos)
    
    return min(calcCost(data, pos1), calcCost(data, pos2))

def calcCost(data, pos):
    cost = 0
    for i in data:
        n = abs(i-pos)
        cost += int(n*(n+1)/2)
    return cost

if __name__=="__main__":
    assert fuelCost('test.txt') == 168
    print(fuelCost('input.txt'))