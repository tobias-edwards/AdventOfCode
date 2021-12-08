
def solution(depths):

    total = 0
    for i in range(len(depths)-1):
        if depths[i] < depths[i+1]:
            total +=1

    return total

if __name__ == "__main__":

    with open("input.txt") as f:
        lines = f.readlines()
    depths = [int(l) for l in lines]
    print(solution(depths))
