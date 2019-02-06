# Revisão para Prova
## Lista de Exercícios de Laboratório de Programação

## Intervalo
Faça um algoritmo que receba dois valores e retorne todos os números inteiros
compreendidos entre eles. O algoritmo deve estar preparado para o caso do primeiro número
ser maior do que o segundo e vice-versa.

## Comparação
Escreva uma função que faça comparação entre dois números inteiros (a e b) e retorne:
- 1 caso o número "a" seja maior
- -1 caso o número "b" seja maior
- 0 caso os números sejam iguais

## Ordenação
Faça um algoritmo que solicite ao usuário 20 números inteiros positivos e os armazene em
um vetor. Os números devem ser ordenados e colocado em outro vetor. Ao final, deve-se
imprimir o vetor informado pelo usuário e o vetor ordenado. Importante: deve-se criar uma
função/procedimento para fazer a ordenação. Importante: tente utilizar a função do exercício
anterior.

## Distância
Um ponto 2D pode ser representado por suas duas coordenadas, de valores reais, nos eixos
X e Y. Um círculo pode ser representado pelo seu centro(um ponto em 2D) e seu raio(um
valor real). A distância entre dois pontos, p1(x1; y1) e p2(x2; y2), é dada por:
```
d² = (x1 - x2)² + (y1 - y1)²
```
De posse dessas informações Crie um algoritmo que contenha uma estrutura do tipo registro para um ponto 2D contendo
também o raio. Solicite que o usuário entre com os valores de dois pontos (A e B) e em
seguida:
1. Calcular a distância entre os dois pontos;
2.  Verificar se o ponto B estaria dentro de um círculo formado com os dados do ponto
A.

Importante: Criar pelo menos duas funções/procedimentos, sendo uma para funcionalidade
do item “1” e uma para o item “2”.

## Repetidos
A partir de um vetor com 30 números inteiros positivos de 0 a 9 gerados aleatoriamente,
faça um algoritmo que identifique os números repetidos e ao final imprima: vetor com os
números gerados aleatoriamente, “relatório” dos números que se repetem e quantas vezes se
repetem. Desejável a utilização de vetor/matriz na solução.

## IPTU
A prefeitura de um pequeno município hipotético solicitou o desenvolvimento de um
programa utilizando a linguagem C para auxiliar na gestão de imóveis com IPTU atrasado.
O programa deve ter uma estrutura do tipo registro com, no mínimo, os seguintes dados:
Código do Imóvel (número inteiro positivo), Valor Venal, Tipo (Residencial ou Comercial),
meses em atraso. Sabendo que:
- O valor do IPTU é de 1,5% do valor venal para imóveis comerciais e 2,5% para
imóveis residenciais
- A multa de atraso é de 5% do valor do IPTU acrescido de juros compostos de 0,5%
ao mês
- Com mais de 10 anos de atraso a prefeitura pode tomar posse do imóvel

De posse dessas informações, você deve desenvolver esse programa para a prefeitura com as
seguintes funcionalidades:
1. Cadastrar imóvel (os imóveis devem ficar armazenados em um vetor)
2. Ao ser cadastrado deve-se calcular o saldo devedor de forma discriminada: IPTU,
multa e juros
3. Listar imóveis: listar todos os imóveis cadastrados com as respectivas informações
do imóvel e do débito incluindo se corre o risco da prefeitura tomar posse do imóvel
4. Dar baixa em uma dívida: ao digitar o código de imóvel, o programa deve registrar
que foi dado baixa naquela dívida