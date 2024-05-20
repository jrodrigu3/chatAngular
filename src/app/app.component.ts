import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, CommonModule],
  providers: [ChatService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chatAngular';
  message = '';
  messages: { recipient_id: string, text: string, isChatbotAnswer: boolean }[] = [];
  isOpen = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    /*     this.chatService.sendMessage().subscribe((response) => {
          console.log(response);
        }); */
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ recipient_id: '0', text: this.message, isChatbotAnswer: false });
      this.chatService.sendMessage(this.message).subscribe(
        (response) => {
          response.forEach((msg: any) => {
            this.messages.push({ recipient_id: msg.recipient_id, text: msg.text, isChatbotAnswer: true });
          });
        },
        (error) => {
          this.messages.push({ recipient_id: 'Error', text: 'Error processing your request', isChatbotAnswer: true });
        }
      );
      this.message = '';
    }
  }
}
