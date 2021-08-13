# Calcule a média aritmética dos valores contidos em uma lista.

def avg(numbers):
  result = 0
  for number in numbers:
    result += number
  return result / len(numbers)

print(avg([4, 20, 6, 10]))