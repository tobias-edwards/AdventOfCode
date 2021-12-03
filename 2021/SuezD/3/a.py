def power(filename):
    lines = 0
    total = []
    with open(filename) as f:
        for line in f:
            line = line.strip('\n')
            if lines == 0: total =[0 for i in range(len(line))]
            lines += 1
            for i, bit in enumerate(line):
                total[i] += int(bit)
    
    gamma = ['1' if i>int(lines/2) else '0' for i in total]
   
    g = int(''.join(gamma),2)
    e = int('1'*len(gamma),2) - g
            
    return g * e


if __name__=="__main__":
    assert power('test.txt') == 198
    print(power('input.txt'))
