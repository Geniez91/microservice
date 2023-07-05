import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DiscordService {
  private webhookUrl =
    'https://discord.com/api/webhooks/1126238647440654356/m3XJJuUVuZPc3UYQZzu7x8Uhi_vhs-cjAkHDJUjxIPhKpeqKz9apAZUxi7D2fKNTAlSR';

  async sendNotification(message: string) {
    const payload = {
      content: message,
    };

    try {
      await axios.post(this.webhookUrl, payload);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la notification Discord", error);
    }
  }
}
