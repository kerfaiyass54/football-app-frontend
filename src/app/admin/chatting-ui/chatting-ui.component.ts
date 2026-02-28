import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import {PORTS} from "../../Shared/constants/service-ports";
import {PreviousButtonComponent} from "../../components/buttons/previous-button/previous-button.component";

interface Message {
  role: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-chatting-ui',
  standalone: true,
  imports: [CommonModule, FormsModule, PreviousButtonComponent],
  templateUrl: './chatting-ui.component.html',
  styleUrl: './chatting-ui.component.css'
})
export class ChattingUiComponent {

  messages = signal<Message[]>([]);
  inputText = signal('');
  thinking = signal(false);
  serviceName!: string;
  port!: String;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {
    effect(() => {
      this.serviceName = this.route.snapshot.paramMap.get('service')!;
      const found = PORTS.find(p => p.service === this.serviceName);

      if (!found) {
        throw new Error('Service not found');
      }

      this.port = found.port;
    });
  }

  sendMessage() {
    const text = this.inputText().trim();
    if (!text) return;

    this.messages.update(m => [...m, { role: 'user', content: text }]);
    this.inputText.set('');
    this.thinking.set(true);

    this.chatService.sendMessage(this.port, text).subscribe({
      next: (res) => {
        this.messages.update(m => [
          ...m,
          { role: 'ai', content: JSON.stringify(res, null, 2) }
        ]);
        this.thinking.set(false);
      },
      error: () => {
        this.messages.update(m => [
          ...m,
          { role: 'ai', content: '⚠️ Error contacting service.' }
        ]);
        this.thinking.set(false);
      }
    });
  }

  exportConversation() {
    const content = this.messages()
      .map(m => `${m.role.toUpperCase()}:\n${m.content}`)
      .join('\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.serviceName}-conversation.txt`;
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
