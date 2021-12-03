def power(filename):
    lines = 0
    with open(filename) as f:
        columnTotal = [int(i) for i in f.readline().strip('\n')]
        for line in f:
            line = line.strip('\n')
            
            # for each bit in line, add value to column total
            for i, bit in enumerate(line):
                columnTotal[i] += int(bit)
            
            lines += 1  # track number of lines in file
    
    gamma = ['1' if i>int(lines/2) else '0' for i in columnTotal]
   
    g = int(''.join(gamma),2)
    e = int('1'*len(gamma),2) - g
            
    return g * e


if __name__=="__main__":
    assert power('test.txt') == 198
    print(power('input.txt'))
