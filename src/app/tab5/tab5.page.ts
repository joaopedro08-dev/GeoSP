import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../gemini.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false
})
export class Tab5Page implements OnInit {
  usuarioEntrada: string = '';
  mensagens: { texto: string; eBot: boolean }[] = [];

  constructor(private geminiService: GeminiService) {}

  ngOnInit() {}

  async enviarMensagem() {
    if (this.usuarioEntrada.trim() !== '') {
      this.mensagens.push({ texto: this.usuarioEntrada, eBot: false });
      const mensagemUsuario = this.usuarioEntrada;
      this.usuarioEntrada = '';

      const respostaBot = await this.geminiService.gerarResposta(mensagemUsuario);
      this.mensagens.push({ texto: respostaBot, eBot: true });
    }
  }
}