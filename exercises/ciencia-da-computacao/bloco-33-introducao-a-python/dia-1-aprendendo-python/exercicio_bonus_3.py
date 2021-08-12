# Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def summarizer(num):
   result = 0
   for row in range(1, num + 1):
      result += row
   return result

# Segunda solução
def summation(limit):
    return sum(range(1, limit + 1))

print(summarizer(5))