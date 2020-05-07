import { socketUrl } from '../../api';
import { noop } from '../../commons/Utility';
import { Message, RoomsMessage } from '../../state/ducks/Chat/Types';
import { ChatEvents, JoinMessage } from '../../commons/types';

interface ChatServiceProps {
  handleMessage: (message: any) => void;
  handleRoomsUpdate: (rooms: any) => void;
}

class ChatServiceClass {
  private readonly baseURL: string;

  private socket: WebSocket | null = null;
  private onMessage: (message: Message) => void = noop;
  private onRoomsUpdated: (rooms: any) => void = noop;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private readonly openConnection = () => {
    this.socket = new WebSocket(`${this.baseURL}`);
  };

  private readonly onMessageListener = (message: MessageEvent) => {
    const data: RoomsMessage | Message = JSON.parse(message.data);
    const { event } = data;

    if (data.event === ChatEvents.message) {
      this.onMessage(data);
    }

    if (event === ChatEvents.roomsUpdated) {
      this.onRoomsUpdated(data);
    }
  };

  private readonly addListeners = () => {
    this.socket?.addEventListener('message', this.onMessageListener);
  };

  private readonly removeListeners = () => {
    this.socket?.removeEventListener('message', this.onMessageListener);
  };

  public subscribe = (props: ChatServiceProps) => {
    const { handleMessage, handleRoomsUpdate } = props;

    this.unsubscribe();

    this.onMessage = handleMessage;
    this.onRoomsUpdated = handleRoomsUpdate;
    this.openConnection();
    this.addListeners();
  };

  public unsubscribe = () => {
    if (this.socket) {
      this.removeListeners();
      this.socket.close();
      this.socket = null;
    }
  };

  public send = (data: RoomsMessage | Message | JoinMessage) => {
    this.socket?.send(JSON.stringify(data));
  };
}

export const ChatService = new ChatServiceClass(socketUrl);
