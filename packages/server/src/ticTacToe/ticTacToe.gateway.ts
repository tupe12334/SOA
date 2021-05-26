import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class TicTacToeGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;
  private logger = new Logger('TicTacToeGateway');
  @SubscribeMessage('send_message')
  listenForMessages(@MessageBody() data: string) {
    this.server.sockets.emit('receive_message', data);
  }

  @SubscribeMessage('joinRoom')
  listenForRoomJoin(
    @MessageBody() data: { email: string; room: string },
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.log('New client connected');
    console.log(client);

    console.log('sdafdsafds');
    console.log(data);
    return data;
    // this.server.sockets.emit('receive_message', data);
  }
  handleConnection() {
    // console.log('sdafasdfafds');
  }
}
