# Cálculo de ganho de Capital

## Entrada de dados (input)

No terminal informar o JSON como modelos a seguir, lembrando que deve haver uma linha em branco abaixo da última linha informada.

- [{"operation":"buy","unit-cost":10.00,"quantity": 10000},{"operation":"sell","unit-cost":20.00,"quantity": 5000}]
- [{"operation":"buy","unit-cost":10.00,"quantity": 10000},{"operation":"sell","unit-cost":20.00,"quantity": 5000}]
  [{"operation":"buy","unit-cost":20.00,"quantity": 10000},{"operation":"sell","unit-cost":10.00,"quantity": 5000}]

## Saída de dados (output)

A saída de dados segue o modelo abaixo, onde quando houver mais de uma linha na entrada de dados, o output será exibido para cada linha de entrada.

- [{"tax": 0.00},{"tax": 0.00},{"tax": 0.00}]
- [{"tax": 0.00},{"tax": 0.00},{"tax": 0.00}]
  [{"tax": 0.00},{"tax": 0.00},{"tax": 0.00}]

## Executando o projeto

Para executar o projeto, devem ser seguidos os passos a seguir (lembrando que a máquina de ter o Node instalado, de preferência na versão 20.x).

- 1: Executar o comando `npm install`
- 2: Executar o comando `npm run start`
- 3: Informar o JSON como modelo acima.
- 4: O programa irá calcular e exibir o resultado.

## Executando os testes

Para executar os testes, devem ser seguidos os passos a seguir.

- 1: Executar o comando `npx jest`

## Bibliotecas utilizadas

- TypeScript que é o que eu utilizo no dia a dia, por isso me senti mais confortável
- Jest que é uma biblioteca de testes que eu utilizei para testar o meu código
