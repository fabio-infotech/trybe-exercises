# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n=5 o triângulo terá 5 asteriscos na base:

'''
n = 5
*
**
***
****
*****
'''

def draw_triangle(num):
   for row in range(1, num + 1):
      print(row * '*')

draw_triangle(5)