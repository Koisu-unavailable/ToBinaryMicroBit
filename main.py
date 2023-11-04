def to_Binary(num):
    num = str(num)
    decimal = 0
    for digit in num:
        decimal = decimal*2 + int(digit)
    return decimal