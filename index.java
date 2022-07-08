def year(current_yr):
    nxt_yr = int(current_yr) + 1
    print(f"This is the year {current_yr}")
    print(f"Next year is {nxt_yr}")


try:
    x = input()
    year(x)
    y = input()
    year(y)
    z = input()
    year(z)