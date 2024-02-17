# Dummies, Stubs, Spies, Mocks e Fakes

O termo **Test Doubes** ou Dublês de testes é um termo amplamente conhecido e genérico que define qualquer componente de teste que tem como objetivo substituir um componente de Produção por um de teste. Gerard Meszaros definiu estes objetos em 5 categorias que são usadas até hoje dentre eles estão:

---

## Dummies

### Objetos que são passados como parâmetros, mas nunca na realidade chamados ou invocados. Por isso são chamados de 'Burros' OU 'Dummies' pois não se espera que eles tenham algum comportamento.

<br />

## Stubs

### Objetos que possuem uma resposta marretada, ou pré-processada para determinado cenário durante o teste que está sendo feito.

<br />

## Spies

### Geralmente são Stubs com a habilidade de gravar certas informações, como checar se determinados parâmetros foram passados para uma função ou até mesmo quantas vezes a própria função OU componente foi chamado.

<br />

## Fakes

### São objetos falsos, são objetos que pussem de fato uma implementação funcional, mas que não seria adequada para meios produtivos. Um exemplo seria a crição de um Banco de Dados em memória usando uma estrutura de dado como uma Pilha.

<br />

## Mocks

### Seria um objeto que simula o comportamento de algum módulo. Geralmente são usados para testes mais complexos geralmente usando frameworks para simular o comportamento do módulo em questão.
