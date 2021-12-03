def count(filename):
    with open(filename) as f:
        count = -1
        previous = 0
        for line in f:
            val = int(line)
            if val > previous:
                count += 1
            previous = val 
    
    return count
            

if __name__=="__main__":
    assert count('test.txt') == 7
    print(count('input.txt'))
