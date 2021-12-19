import collections

def countFish(filename, days):
    
    with open(filename) as f:
        data = f.readlines()
        data = [int(i) for i in data[0].rstrip().split(',')]
        count = collections.deque([data.count(i) for i in range(9)])
    
    # 8->7, 7->6, 6->5, 5->4 ... 1->0, 0->6 and 8
    # shift count to left
    # count[6]+= count[-1]
    
    for i in range(days):
        count.rotate(-1)
        count[6] += count[-1]
        
    return sum(count)

if __name__=="__main__":
    assert countFish('test.txt', 18) == 26
    assert countFish('test.txt', 80) == 5934
    print(countFish('input.txt', 80))
    
    assert countFish('test.txt', 256) == 26984457539
    print(countFish('input.txt', 256))