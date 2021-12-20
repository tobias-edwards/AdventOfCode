def fuelCost(filename):
    with open(filename) as f:
        data = f.readlines()
        data = sorted([int(i) for i in data[0].split(',')])
        pos = data[len(data)//2]
    
    cost = 0
    for i in data:
        cost += abs(i-pos)
        
    return cost

if __name__=="__main__":
    assert fuelCost('test.txt') == 37
    print(fuelCost('input.txt'))