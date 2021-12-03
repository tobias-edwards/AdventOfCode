def position(filename):
    h = 0
    d = 0
    with open(filename) as f:
        for line in f:
            command, amount = line.split(" ")
            amount = int(amount)
            if command=="forward":
                h += amount
            elif command == "up":
                d -= amount
            else:
                d += amount
            
    return h*d

if __name__=="__main__":
    assert position('test.txt') == 150
    print(position('input.txt'))