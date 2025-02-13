import { Button, Container, Heading, Input, MessageItem, MessageList, Section } from "./style";
import { Stomp } from "@stomp/stompjs";
import { useState } from "react";
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github'; // ou outro tema de sua escolha

export const App = () => {
  const [stompClient, setStompClient] = useState(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [url, setUrl] = useState('ws://localhost:8080/addEndpoint');
  const [sendDestination, setSendDestination] = useState('');
  const [sendMessage, setSendMessage] = useState('{"a": 1, "b": "example"}'); // Começa com um JSON básico
  const [subscribeDestination, setSubscribeDestination] = useState('');
  const [subscriptions, setSubscriptions] = useState([]);

  const handleConnect = () => {
    if (stompClient) {
      stompClient.deactivate(); 
    }

    const socket = new WebSocket(url);
    const client = Stomp.over(socket);

    client.onConnect = (frame) => {
      console.log('Conectado:', frame);
      setConnected(true);
    };

    client.onDisconnect = () => {
      console.log('Desconectado do WebSocket.');
      setConnected(false);
    };

    client.onStompError = (frame) => {
      console.error("Erro STOMP:", frame.headers["message"]);
      console.error("Detalhes:", frame.body);
    };

    client.onWebSocketError = (error) => {
      console.error("Erro WebSocket:", error);
      setConnected(false);
    };

    client.activate();
    setStompClient(client);
  };

  const handleSubscribe = () => {
    if (stompClient && subscribeDestination) {
      stompClient.subscribe(subscribeDestination, message => {
        setMessages(prevMessages => [...prevMessages, message.body]);
      });
      setSubscriptions(prev => [...prev, subscribeDestination]);
      console.log(`Inscrito no tópico: ${subscribeDestination}`);
    }
  };

  const handleSendMessage = () => {
    try {
      const parsedMessage = JSON.parse(sendMessage);
      if (stompClient && sendDestination && sendMessage) {
        stompClient.publish({
          destination: sendDestination,
          body: JSON.stringify(parsedMessage), 
        });
        console.log(`Mensagem enviada para ${sendDestination}: ${sendMessage}`);
      }
    } catch (error) {
      console.error("Erro ao processar o JSON:", error);
      alert("Erro no JSON. Verifique a formatação.");
    }
  };

  return (
    <Container>
      <h1>STOMP WebSocket Client</h1>

      <Section>
        <Input
          type="text"
          placeholder="WebSocket URL (ex: ws://localhost:8080/addEndpoint)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={connected}
        />
        <Button onClick={handleConnect} disabled={connected}>
          {connected ? 'Conectado' : 'Conectar'}
        </Button>
      </Section>

      <Section>
        <Heading>Enviar Mensagem</Heading>
        <Input
          type="text"
          placeholder="Destino (ex: /setApplicationDestinationPrefixes/@MessageMapping())"
          value={sendDestination}
          onChange={(e) => setSendDestination(e.target.value)}
          disabled={!connected}
        />
        <AceEditor
          mode="json"
          theme="github"
          value={sendMessage}
          onChange={(newValue) => setSendMessage(newValue)}
          name="json_editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="300px"
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          style={{ fontSize: '1rem' }}
        />
        <Button onClick={handleSendMessage} disabled={!connected}>
          Enviar
        </Button>
      </Section>

      <Section>
        <Heading>Inscrever em Tópico</Heading>
        <Input
          type="text"
          placeholder="Tópico (ex: /enableSimpleBroker/example-topic)"
          value={subscribeDestination}
          onChange={(e) => setSubscribeDestination(e.target.value)}
          disabled={!connected}
        />
        <Button onClick={handleSubscribe} disabled={!connected || subscriptions.includes(subscribeDestination)}>
          {subscriptions.includes(subscribeDestination) ? 'Inscrito' : 'Inscrever'}
        </Button>

        <MessageList>
          {subscriptions.map((topic, index) => (
            <MessageItem key={index}>Inscrito em: {topic}</MessageItem>
          ))}
        </MessageList>
      </Section>

      <Section>
        <Heading>Mensagens Recebidas</Heading>
        <MessageList>
          {messages.map((msg, index) => (
            <MessageItem key={index}>{msg}</MessageItem>
          ))}
        </MessageList>
      </Section>
    </Container>
  );
};
