# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

'''n = 5
*****
*****
*****
*****
*****
'''

def square(num):  
  for row in range(num):
    print(num * '*')
  
square(5)