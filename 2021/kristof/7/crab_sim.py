import numpy as np

def align_crabs(positions):

    left = min(positions)
    right = max(positions)
    costs = np.zeros((right-left+1))
    for i in range(left,right+1):
        cost = 0
        for c in positions:
            cost += abs(c-i)
        costs[i-left] = cost

    best_pos = np.argmin(costs)
    return best_pos+left, int(costs[best_pos])

if __name__ == '__main__':
    input_test = [16,1,2,0,4,2,7,1,2,14]
    pos, cost = align_crabs(input_test)
    print("best position: {}  | cost: {}".format(pos,cost))