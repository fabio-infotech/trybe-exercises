# Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

# Uma dica: Utilize a função len() para verificar o tamanho do nome.

def more_chars(list_names):
  biggets_name = list_names[0]  
  for list_name in list_names:
    if (len(list_name) > len(biggets_name)):
      biggets_name = list_name
  return biggets_name

print("O nome com maior quantidade de caracteres é:", more_chars(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))