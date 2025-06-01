import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const API_KEY = environment.apiKey; 
    this.genAI = new GoogleGenerativeAI(API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "MODEL_GEMINI" }); 
  }

  async gerarResposta(mensagem: string): Promise<string> {
    try {
      const result = await this.model.generateContent(mensagem);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      return 'Desculpe, ocorreu um erro ao processar sua solicitação.';
    }
  }
}