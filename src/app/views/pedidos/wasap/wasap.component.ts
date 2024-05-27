import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-wasap',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wasap.component.html',
  styleUrl: './wasap.component.scss'
})
export class WasapComponent {


  message: string = '';
  phoneNumber: string = '5491166370028';

  sendWhatsappMessage() {
    // Lógica para abrir WhatsApp con el mensaje y número de teléfono
    window.open(`https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`, '_blank');
  }
}
