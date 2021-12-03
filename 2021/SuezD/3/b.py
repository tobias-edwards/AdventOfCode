import numpy as np

def lifeSupport(filename):
    # generate matrix from file
    a = np.genfromtxt(filename, delimiter = 1)
    
    # extract first column
    col = list(a[:,0])

    # find least and most common number in col
    leastCommon = min(set(col), key=col.count)
    mostCommon = int (not leastCommon)
        
    # split data into scrubber and generator data
    scrubberData = a[a[:,0]==leastCommon, :]
    generatorData = a[a[:,0]==mostCommon, :]
    
    s = f(scrubberData, True)
    g = f(generatorData, False)  
    
    return s*g
    
    
def f(data, leastCommon):
    
    i = 1   # column pointer
    
    while(len(data) > 1):
        col = list(data[:,i])
        
        # find least/most common number
        criteria = min(set(col), key=col.count)
        if not leastCommon: 
            criteria = int (not criteria)
            
        # extract data based on criteria
        data = data[data[:,i]==criteria, :]
        i+=1
    
    # read remaining row as binary number
    result = (int(''.join([str(int(i)) for i in data[0]]),2))
    return result


if __name__=="__main__":
    assert lifeSupport('test.txt') == 230
    print(lifeSupport('test.txt'))
