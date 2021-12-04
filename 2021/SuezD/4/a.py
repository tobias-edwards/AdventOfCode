import numpy as np

def checkGameOver(a):
    # for each board, calculate sum of each row and col
    # game over if all values in a row/col are 1
    for index,board in enumerate(a):
        l = len(a[0][0])
        if l in board.sum(axis=0) or l in board.sum(axis=1):
            return index
    return -1
    
def score(filename):
    
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
    
    gameOver = False
    while not gameOver:
        n = numbers.pop(0)
        for i,board in enumerate(boards):
            for j,row in enumerate(board):
                if n in row:
                    tracker[i][j][list(row).index(n)] = 1
                    
                    # check for 5 in a row
                    winner = checkGameOver(tracker)
                    if winner != -1:
                        gameOver = True
                    
                    break
    
    # calculate score
    flippedTracker = 1 - tracker[winner]
    remainingNumbers = boards[winner] * flippedTracker
    leftOverSum = int(np.sum(remainingNumbers))
    score = leftOverSum * n
    return score

if __name__=="__main__":
    assert score('test.txt') == 4512
    print(score('input.txt'))
