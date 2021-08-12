# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

import math

def custo_tinta(area):
  preco_lata = 80
  total_litros = area / 3
  total_latas = math.ceil(total_litros / 18)
  return total_latas, total_latas * preco_lata

print(custo_tinta(100))