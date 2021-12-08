import numpy as np

def solution(nums: [str]):

    n_bits = len(nums[0])

    #bit counters
    zeros = np.zeros(n_bits)
    ones = np.zeros(n_bits)

    for n in nums:
        for i,bit in enumerate(n):
            if bit == '1':
                ones[i] += 1
            elif bit == '0':
                zeros[i] += 1

    gamma = 0
    epsilon = 0

    for i in range(n_bits):
        if zeros[i] > ones[i]:
            epsilon += 2 ** (n_bits - i-1)
        elif ones[i] > zeros[i]:
            gamma += 2 ** (n_bits - i-1)
        else:
            gamma += 2 ** (n_bits - i-1)
            epsilon += 2 ** (n_bits - i-1)
    return gamma * epsilon

if __name__ == "__main__":
    with open("input.txt") as f:
        nums = [l.rstrip() for l in f.readlines()]
    print(solution(nums))