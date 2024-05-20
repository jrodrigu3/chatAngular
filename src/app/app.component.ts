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
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  providers: [ChatService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chatAngular';
  message = '';
  messages: { user: string, text: string }[] = [];


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.sendMessage().subscribe((response) => {
      console.log(response);
      debugger;
    });
  }


  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ user: 'You', text: this.message });
      this.chatService.sendMessage(this.message).subscribe(
        (response) => {
          this.messages.push({ user: 'Bot', text: response.response });
        },
        (error) => {
          this.messages.push({ user: 'Error', text: 'Error processing your request' });
        }
      );
      this.message = '';
    }
  }

}
