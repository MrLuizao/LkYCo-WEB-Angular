import { Component, OnInit } from '@angular/core';
import Ws from '@adonisjs/websocket-client'

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  urlSocket: any;
  channel: any;
  reciveMsg: string[] = [];
  emitMsg: string;

  ngOnInit(): void {
    
    this.urlSocket = Ws("ws://localhost:3333", {
      path: "ws"
    });

    this.urlSocket.connect();
    this.channel = this.urlSocket.subscribe("chatServer");

    this.channel.on( "message", (data:any) => {
      this.reciveMsg.push(data)
    })

  }

  sendMessage(){
    this.channel.emit( "message", this.emitMsg );
    this.reciveMsg.push( this.emitMsg );
    this.emitMsg = '';
  }

}
