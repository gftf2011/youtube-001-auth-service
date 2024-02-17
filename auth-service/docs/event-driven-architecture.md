# Event-Driven Architecture - (Arquitetura Dirigida a Eventos)

A Arquitetura dirigida a eventos é um estilo de arquitetura que usa eventos para desacoplar a comunicação entre serviços. Comumente este estilo de arquitetura é muito usada para o contexto de comunicação assíncrona entre serviços.

Como o nome diz a arquitetura usa como base o conceito de "Eventos", que são fatos ou acontecimentos que já aconteceram no passado e não podem ser alterados !

Ou seja, o contexto da aplicação usa estes eventos para que diferentes serviços possam reagir a estes acontecimentos.

Normalmente é comum encontramos 3 tipos de componentes usados neste tipo de arquitetura:

- **Publicadores**: Responsável por criar o evento
- **Roteadores**: Filtra o evento para que sejam enviados aos consumidores
- **Consumidores**: Reagem aos eventos que foram publicados e filtrados

---

# Conceitos importantes

## Domain Events - (Eventos de Domínio)

Eventos de Domínio são eventos que de forma geral obedecem a 3 regras:

- Um "Domínio de Evento Puro" deve ser processado em memória,
- Deve ocorrer durante uma transação e antes da persistência dos dados
- A sua criação deve ser feita através de um Aggregate Root, Agregado, ou entidade que compõem o Agregado

Ou seja, Eventos de Domínio são efeitos colaterais disparados pelo domínio central da aplicação relacionado com o domínio da operação que está inserido dentro de uma transação lógica.

## Integration Events - (Eventos de Integração)

Quando queremos fazer com que a mudança de estado do domínio de uma aplicação, que foi originada por um Evento de Domínio, seja propagada para diferentes aplicações e diferentes contextos, geralmente usamos os Eventos de Integração. O Evento de Integração é um evento que é propagado para diferentes serviços que estão interessados na atualização de estado de uma aplicação específica !

Geralmente estes são os eventos que são propagados por um sistema de Pub/Sub com o uso de Stream de Dados ou Message Brokers para se comunicarem de forma assincrona e independente da atualização de estado de um serviço para outros sistemas interessados.

---

## Pontos Positivos

### Escalabilidade e falha de maneira independentemente

Com o desacoplamento dos serviços, eles reconhecem apenas o roteador de eventos, e não uns aos outros. Isso significa que, mesmo que sejam interoperáveis, se um serviço apresentar uma falha, os serviços restantes continuarão em execução.

### Auditoria com facilidade

Um roteador de eventos atua como um local centralizado para auditar sua aplicação e definir políticas. Essas políticas podem restringir quem é capaz de publicar e assinar um roteador e controlam quais usuários e recursos têm permissão para acessar seus dados.

### Desenvolvimento com agilidade

Você não precisa mais escrever código personalizado para pesquisar, filtrar e rotear eventos: o roteador de eventos filtrará e enviará eventos automaticamente aos consumidores. O roteador também elimina a necessidade de coordenação pesada entre serviços produtores e consumidores, acelerando assim o seu processo de desenvolvimento.

### Redução dos custos

Arquiteturas orientadas por eventos são baseadas em push e, portanto, tudo acontece sob demanda à medida que o evento se apresenta no roteador. Dessa forma, você não paga por pesquisas contínuas para verificar a presença de um evento.

## Pontos Negativos

### Consistência Eventual

A Arquitetura de Orientada a Eventos é em grande maioria usada em sistemas distribuídas, com transações distribuídas. Logo não é possível atingir a Atomicidade dos Dados ainda no mesmo escopo da transação. Para isso é necessário construir sistemas de apoio e planejar possíveis compensações caso uma operação falhe em um ponto específico do ecossistema do Produto.
