import numpy as np

def lifeSupport(filename):
    data = np.genfromtxt(filename, delimiter = 1)
    
    
    i = 0
    while(len(data) > 1):
        cols = len(data)
        print(data)
        col = data[:,i]
        
        if sum(col) == cols/2 or sum(col) > int(cols/2):
            criteria = 1
        else:
            criteria = 0
            
        print(col, int(cols/2), criteria)
        print() 
        data = data[data[:,i]==criteria, :]
        i+=1
    
    o2 = int(''.join([str(int(i)) for i in data[0]]),2)
    print(o2)
    
    
    
        

if __name__=="__main__":
    lifeSupport('test.txt')
