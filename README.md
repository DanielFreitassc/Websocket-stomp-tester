Entendi! Vamos atualizar a documentação para refletir que a pessoa precisa se inscrever em um tópico antes de poder enviar uma mensagem. Aqui está a versão atualizada:

---

# Websocket-Stomp-Tester 🚀

## Visão Geral 📋

O **Websocket-Stomp-Tester** é uma aplicação de cliente WebSocket construída para testar comunicação em tempo real usando o protocolo **STOMP** (Streaming Text Oriented Messaging Protocol). Ele permite a conexão com um servidor WebSocket, se inscrever em tópicos para receber mensagens, e enviar mensagens para destinos específicos de forma fácil e interativa. Ideal para testar implementações de STOMP e WebSockets de maneira prática!

## Funcionalidades 🎯

### 1. **Conectar ao WebSocket 🌐**
   - O cliente pode se conectar ao WebSocket através de um URL configurável.
   - Após a conexão, o status é exibido para o usuário, garantindo que tudo está funcionando.
   - Quando conectado, a interface exibe "Conectado" e desabilita o campo de URL.

### 2. **Inscrever-se em Tópicos 📬**
   - Antes de enviar qualquer mensagem, você precisa se inscrever em um tópico STOMP para começar a receber mensagens.
   - O aplicativo mantém uma lista dos tópicos aos quais você se inscreveu.
   - Cada inscrição é registrada para que você saiba quais tópicos está monitorando.

### 3. **Enviar Mensagens 📨**
   - Envie mensagens em formato JSON para destinos STOMP configurados **apenas após se inscrever em um tópico**.
   - A interface utiliza um editor de código **AceEditor** para fornecer uma experiência amigável ao editar JSON.
   - As mensagens enviadas são publicadas no servidor STOMP configurado.

### 4. **Visualizar Mensagens Recebidas 📲**
   - As mensagens recebidas dos tópicos inscritos são exibidas na interface em tempo real.
   - Cada nova mensagem é adicionada à lista de mensagens recebidas.

---

## Como Usar 🛠️

### Passo 1: **Conectar ao WebSocket**

- **URL WebSocket**: Digite o URL do seu servidor WebSocket. Exemplo: `ws://localhost:8080/addEndpoint`.
- Clique em **Conectar** para estabelecer a conexão.
  - O botão ficará desabilitado enquanto a conexão estiver ativa.

### Passo 2: **Inscrever-se em Tópicos**

- **Tópico**: Digite o nome do tópico ao qual deseja se inscrever. Exemplo: `/topic/updates`.
- Clique em **Inscrever** para começar a receber mensagens desse tópico.
  - A lista de tópicos inscritos será atualizada automaticamente.

### Passo 3: **Enviar Mensagens**

- **Destino**: Defina o destino da mensagem. Exemplo: `/app/sendData`.
- **Mensagem**: Digite sua mensagem em formato JSON (por exemplo: `{"a": 1, "b": "example"}`).
- **Importante**: Você **precisa se inscrever em um tópico** antes de enviar qualquer mensagem.
- Clique em **Enviar** para publicar a mensagem no servidor STOMP.

### Passo 4: **Visualizar Mensagens Recebidas**

- As mensagens recebidas nos tópicos aos quais você está inscrito serão listadas na seção de **Mensagens Recebidas**.
- As mensagens aparecem na ordem de chegada.

---

## Componentes e Tecnologias ⚙️

### 1. **STOMP** 📡
   - O protocolo **STOMP** é utilizado para comunicação de mensagens de texto entre o cliente e o servidor.
   - A biblioteca **@stomp/stompjs** é usada para gerenciar a comunicação WebSocket e STOMP.

### 2. **AceEditor** 🖋️
   - O editor de código **AceEditor** oferece uma experiência interativa para editar JSON de maneira eficiente.
   - Ele fornece funcionalidades como **auto-completar**, **destaque de sintaxe** e **snippets**.

### 3. **React** ⚛️
   - A aplicação é construída com **React** para garantir uma interface interativa e reativa.
   - O estado da aplicação é gerenciado com hooks como `useState` e `useEffect`.

---

## Fluxo de Comunicação 🛣️

1. **Conexão**: O cliente se conecta a um servidor WebSocket e, ao ser bem-sucedido, ativa o protocolo STOMP.
2. **Inscrição em Tópico**: O cliente se inscreve em tópicos para começar a receber mensagens.
3. **Envio de Mensagem**: Após se inscrever em um tópico, o cliente pode enviar uma mensagem para um destino STOMP específico.
4. **Recebimento de Mensagens**: O servidor envia mensagens para o cliente através dos tópicos aos quais ele está inscrito.

---

## Exemplo de Uso 🎬

1. **Conectar** ao WebSocket com o URL `ws://localhost:8080/addEndpoint`.
2. **Inscrever-se no tópico** `/topic/updates` para começar a receber atualizações.
3. **Enviar uma mensagem JSON**:
   - Destino: `/app/sendData`
   - Mensagem: `{"message": "Hello, World!"}`
4. Visualizar as **mensagens recebidas** na interface.

---

## Notas Importantes ⚠️

- Certifique-se de que o servidor WebSocket está configurado corretamente para suportar o protocolo STOMP.
- A formatação do JSON deve ser válida. Utilize o editor para garantir que a sintaxe está correta.
- **Lembre-se**: para enviar uma mensagem, é necessário estar inscrito em pelo menos um tópico.
