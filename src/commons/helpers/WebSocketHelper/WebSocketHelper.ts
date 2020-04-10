import { socketUrl } from '../../../api';
import { noop } from '../../Utility';

class WebSocketHelper {
  private readonly baseURL: string;

  private socket: WebSocket | null = null;
  private onMessage: (message: any) => void = noop;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private readonly openConnection = () => {
    this.socket = new WebSocket(`${this.baseURL}`);
  };

  private readonly onMessageListener = (message: MessageEvent) => {
    this.onMessage(JSON.parse(message.data));
  };

  private readonly addListeners = () => {
    this.socket?.addEventListener('message', this.onMessageListener);
  };

  private readonly removeListeners = () => {
    this.socket?.removeEventListener('message', this.onMessageListener);
  };

  public subscribe = (onMessage: (message: any) => void) => {
    this.unsubscribe();

    this.onMessage = onMessage;
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

  public send = (data: object) => {
    this.socket?.send(JSON.stringify(data));
  };
}

export default new WebSocketHelper(socketUrl);
