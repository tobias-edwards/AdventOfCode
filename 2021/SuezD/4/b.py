import numpy as np

def lastToWin(filename): 
    # store boards in array
    boards = []
    with open(filename) as f:
        numbers = [int(i) for i in f.readline().rstrip().split(',')]
        for line in f:
            
            if line == '\n':
                boards.append([])
            else:
                boards[-1].append(line.rstrip().split())
    boards = np.array(boards, dtype=int)
    
    # create a corresponding array of zeroes for each board
    tracker = np.zeros(boards.shape)
    
    l = len(tracker[0][0])
    while True:
        n = numbers.pop(0)
        deleteIndex = []
        
        for i,board in enumerate(boards):
            for j,row in enumerate(board):
                if n in row:
                    col = list(row).index(n)
                    tracker[i][j][col] = 1
                    
                    # identify winners
                    if sum(tracker[i][j])==l or sum(tracker[i,:,col])==l:
                        deleteIndex.append(i)
        
        if len(boards) == 1 and deleteIndex:
            break
        
        # remove winners from boards and trackers array
        for i in sorted(deleteIndex, reverse=True):
            boards = np.delete(boards, i, axis=0)
            tracker = np.delete(tracker, i, axis=0)

    # calculate score
    flippedTracker = 1 - tracker[0]
    remainingNumbers = boards[0] * flippedTracker
    leftOverSum = int(np.sum(remainingNumbers))
    score = leftOverSum * n
    return score

if __name__=="__main__":
    assert lastToWin('test.txt') == 1924
    print(lastToWin('input.txt'))