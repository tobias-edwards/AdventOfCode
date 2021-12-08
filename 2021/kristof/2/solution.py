def solution(commands):
    x,y = 0,0
    for c in commands:
        dir = c[0]
        size = int(c[-1])

        if dir == 'd':
            y+=size
        elif dir == 'u':
            y-=size
        elif dir == 'f':
            x+= size

    return x*y

if __name__ == "__main__":
    with open("input.txt") as f:
        commands = [l.rstrip() for l in f.readlines()]
    print(solution(commands))