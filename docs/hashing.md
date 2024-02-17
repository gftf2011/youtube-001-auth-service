# Hashing

## O que é ?

### Um algoritmo de HASH é uma função matemática determinística, ou seja dado que os mesmos parametros foram passados o OUTPUT deve se manter o mesmo, que torna os dados de INPUT inelegíveis quando forem processados ! Algoritmos de HASH servem para proteger informações sensíveis, como senhas e números de documentos, o que garante que mesmo que a informação seja vazada ela não conseguirá ser revertida ao seu estado original, pois elas são irreverssíveis, uma vez processado o dado de entrada não pode ser restaurado a sua forma original. Esta caacterística é o que diferencia as técnicas de HASH dos algoritmos de criptografia, os quais podem ser revertidos.

<br />

### Uma função de HASH tem basicamente 4 características principais:

#### Todas as funções de HASH são

- **Matemáticas**: Suas regras obedecem um algoritmo pré-determinado que uma vez definido não pode ter seu fluxo de trabalho alterado
- **Uniformes**: O uso do algoritmo de hash também irá determinar o tamanho da string final resultante do processamento pelo algoritmo
- **Consistência**: O algoritmo de HASH faz apenas uma coisa que é a compressão dos dados e garantir que caso os mesmos dados de input sejam colocados o dado de saída deve ser o mesmo
- **Unidirecionalidade**: Uma vez que o dado seja processado, não será possível restaurá-lo a sua forma original

---

## Casos de Uso

### Existem alguns casos de uso para o uso de técnicas de HASH dentre eles estão:

- **Armazenamento de Palavras-Chave | (Passwords)**: Para proteção de contas de clientes que usam determinados sistemas é comum pedirmos as credencias do mesmo, compostas por email/password. E para impedir que fraudadores entrem nas contas dos usuário é comum usar técnicas de HASH nos campos de password para impedir a invasão de conta dos clientes !

- **Assinaturas Digitais**: Para provar que documentos digitalizados foram assinados e pertencem a pessoa que os assinou. Geralmente a mensagem passa por uma função de HASH para evitar que a assinatura seja vazada, e depois ela será criptografada com uma chave pública e o remetente que receber esta assinatura pode validá-la com o uso de uma chave privada e comparar os hash das assinaturas para ver se elas pertencem ao mesmo usuário.

---

## Algorimos de HASH

- **MD5** - atualmente depreciado
- **SHA**

---

## Rainbow Table

### A rainbow table é a forma mais comum de tentar quebrar um hash e descobrir seu valor com o uso de métodos de força bruta. A Rainbow Table é basicamente o uso de hashs pré computados que permite que um fraudador verifique a qual valor corresponde aquele HASH, geralmente este método é muito comum para tentar descobrir senhas de usuários. Para evitar isto há a técnica de SALT, que basicamente tenta evitar estes tipos de comparação de Rainbow Table usando uma string de processamento ÚNICA pra cada senha para evitar a comparação de valores com a Rainbow Table.
