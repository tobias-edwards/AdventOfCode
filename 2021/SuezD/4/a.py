import numpy as np
    
def chooseBoard(numbers, boards, tracker):
    while True:
        n = numbers.pop(0)
        for i,board in enumerate(boards):
            for j,row in enumerate(board):
                if n in row:
                    col = list(row).index(n)
                    tracker[i][j][col] = 1
                    
                    # check for 5 in a row
                    if sum(tracker[i][j]) == 5 or \
                        sum(tracker[i,:,col]) == 5:
                        return i, n
                    
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
    
    # choose board based on first board to win
    winner, n = chooseBoard(numbers, boards, tracker)
    
    # calculate score
    flippedTracker = 1 - tracker[winner]
    remainingNumbers = boards[winner] * flippedTracker
    leftOverSum = int(np.sum(remainingNumbers))
    score = leftOverSum * n
    return score

if __name__=="__main__":
    assert score('test.txt') == 4512
    print(score('input.txt'))