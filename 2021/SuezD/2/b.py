def position(filename):
    h = 0
    d = 0
    aim = 0
    with open(filename) as f:
        for line in f:
            command, amount = line.split(" ")
            amount = int(amount)
            if command == "down":
                aim += amount
            elif command == "up":
                aim -= amount
            else:
                h += amount
                d += (aim * amount)
            
    return h * d

if __name__=="__main__":
    assert position('test.txt') == 900
    print(position('input.txt'))
