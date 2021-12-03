import numpy as np

def lifeSupport(filename):
    a = np.genfromtxt(filename, delimiter = 1)

    i=0
    cols = len(a)
    col = a[:,i]

    if sum(col) == cols/2 or sum(col) > int(cols/2):
        criteria = 1
    else:
        criteria = 0
        
    generatorData = a[a[:,i]==criteria, :]
    scrubberData = a[a[:,i]==int(not criteria), :]
    
    g = f(generatorData, 1)  
    s = f(scrubberData, 0)
    
    return g*s
    
    
def f(data, c):
    i = 1
    while(len(data) > 1):
        cols = len(data)
        col = data[:,i]
        
        if sum(col) == cols/2 or sum(col) > int(cols/2):
            criteria = c
        else:
            criteria = int(not c)
            
        data = data[data[:,i]==criteria, :]
        i+=1
    
    x = (int(''.join([str(int(i)) for i in data[0]]),2))
    return x


if __name__=="__main__":
    assert lifeSupport('test.txt') == 230
    print(lifeSupport('input.txt'))
