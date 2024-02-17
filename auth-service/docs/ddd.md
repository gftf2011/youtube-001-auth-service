# Domain Driven Design - Princípios

## Value Object - (Objeto de Valor)

### Definição

#### Objetos de Valor são o encapsulamento de um 'valor de um dado' dentro de uma regra de negócio e são caracterizados pela sua imutabilidade, uma vez criados não podem ser alterados, e falta de identidade, ou seja eles não se preocupam se o valor que representam deve ser ÚNICO para ser identificado.

### Funções

#### As principais funções de um Value Object são:

- **Imutabilidade**: Uma vez instanciados o valor que é representado pelo Value Object não pode ser alterado
- **Igualdade**: Um Value Object é considerado igual a outro caso o valor encapsulado seja igual independente de sua identidade
- **Encapsulamento**: Eles encapsulam conceitos de um Domínio reduzindo a complexidade de código a realizarem a validação do valor que representam
- **Validação**: Value Objects sempre garantem que o dado que representam está sempre validado de acordo com as regras de negócio de acordo com as regras de domínio

### Pontos Positivos

- **Simpleficação de lógica de negócio**: Ao encapsular a representação de um valor em um Value Object, separamos as responsabilidades de camadas de mais alto nível em um nível mais baixo e reduzimos as validações feitas em outras camadas, como a redução de validações em camadas de use-case
- **Confiabilidade**: Devido a sua imutabilidade, Value Objects são menos propensos a terem bugs e garantem que os dados que serão encapsulados serão validados conforme definido na regra do domínio
- **Reusabilidade**: O encapsulamento dos dados nos Value Objects e sua falta de identidade garantem que eles possam ser usados em outros domínios, reduzindo a quantidade de código escrito
- **Expressividade**: Value Objects podem aumentar a expressividade do código pois enriquecem a descrição dos dóminios que são utilizados

### Pontos Negativos

- **Performance**: Muitas linguagens de alto nível utilizam algoritmos de Garbage Collection. E por serem imutáveis a criação excessiva de objetos na memória da aplicação pode criar um gargalo na performance
- **Curva de Aprendizado**: Como o conceito de D.D.D. está muito ligado a abstração das regras de negócio a adaptação ao conceito pode ser um desafio a novos desenvolvedores

---

## Entity - (Entidade)

### Definição

#### Entidades são a representação de um objeto em um domínio, definido pela sua identidade ao invés do atributos que a compõem. Sendo a identidade a informação que a torna ÚNICA e a diferencia de outros objetos.

---

## Aggregate Root - (Agregados)

### Definição

#### Aggregate Roots, ou Agregados, são Entidades que além de terem uma identidade, e poderem ter outras Entidades que os formam, tem a responsabilidade de manter o estado dos dados consistente ao garantir a invariância dos mesmos.
