export enum ChatEvents {
  join = 'join',
  roomsUpdated = 'roomsUpdated',
  message = 'message'
}

export interface JoinMessage {
  event: ChatEvents.join;
  username: string;
}
