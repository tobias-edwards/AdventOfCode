def countOverlaps(filename):
    d = {}
    count = 0
    with open(filename) as f:
        for line in f:
            
            # format each line [x1, y1, x2, y2]
            xy = [i.split(',') for i in line.rstrip().split(' -> ')]
            xy = [int(i) for i in sum(xy,[])]
            
            # check for horizontal or vertical lines
            if xy[0]!=xy[2] and xy[1]!=xy[3]: continue
        
            # identify constant along x or y-axis
            const = xy[0] if xy[0]==xy[2] else xy[1]
            
            # range of coordinates along axis
            coordRange = sorted((set(xy)))
            if len(coordRange) > 2:
                coordRange.remove([i for i in xy if xy.count(i) > 1][0])
            coordRange[1] += 1
            
            # add to dictionary 
            for i in range(*coordRange):
                n =  (const, i) if xy.index(const)==0 else (i, const)
                if n in d:
                    d[n] += 1
                    if d[n] == 2:
                        count += 1
                else:
                    d[n] = 1
    
    return count

if __name__=="__main__":
    assert countOverlaps('test.txt') == 5
    print(countOverlaps('input.txt'))
