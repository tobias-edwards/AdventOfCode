def countOverlaps(filename):
    d = {}
    count = 0
    with open(filename) as f:
        for line in f:
            
            # format each line [x1, y1, x2, y2]
            xy = [i.split(',') for i in line.rstrip().split(' -> ')]
            x1, y1, x2, y2 = [int(i) for i in sum(xy,[])]

            dx = x2 - x1
            dy = y2 - y1
            if x1!=x2 and y1!=y2 and abs(dx)!=abs(dy): continue
                
            d1 = 0 if dx==0 else int(dx/abs(dx))
            d2 = 0 if dy==0 else int(dy/abs(dy))
            
            n = (x1, y1)
            r = dx if dx!=0 else dy
            for i in range(abs(r)+1):
                #print(n)
                if n in d:
                    d[n] += 1
                    if d[n] == 2:
                        count += 1
                else:
                    d[n] = 1
                n = (n[0]+d1, n[1]+d2)
    
    return count

if __name__=="__main__":
    assert countOverlaps('test.txt') == 12
    print(countOverlaps('input.txt'))
