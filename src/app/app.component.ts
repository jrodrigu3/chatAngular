import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ChatService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chatAngular';


  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.ChatService.sendMessage().subscribe((response) => {
      console.log(response);
      debugger;
    });
  }

}
