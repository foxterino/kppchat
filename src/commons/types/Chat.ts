export enum ChatEvents {
  join = 'join',
  roomsUpdate = 'roomsUpdate',
  message = 'message'
}

export interface JoinMessage {
  event: ChatEvents.join;
  username: string;
}
