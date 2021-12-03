def count3(filename):
    with open(filename) as f:
        count = 0
        group = []
        for line in f:
            group.append(int(line))
            
            if len(group)==4:
                if sum(group[:-1]) < sum(group[1:]):
                    count += 1
                group = group[1:]
        
    return count

if __name__=="__main__":
    assert count3('test.txt') == 5
    print(count3('input.txt'))