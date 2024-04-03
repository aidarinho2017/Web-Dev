import { Component } from '@angular/core';
import { ChatGptService } from 'chatgpt-api'; // Assuming you named the service file as chatgpt.service.ts

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent {
  message= "";
  responseMessage= "";

  constructor(private chatService: ChatGptService) {}

  async sendMessage() {
    if (!this.message) return; // Exit if message is empty
    this.responseMessage = await this.chatService.chat(this.message);
    this.message = '';
