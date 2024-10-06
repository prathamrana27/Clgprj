import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DivbarComponent } from './divbar/divbar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,DivbarComponent,CertificateComponent,ReviewComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clgprj';
  img=["/assets/gallery-1.jpg","/assets/gallery-2.jpg","/assets/gallery-3.jpg","assets/gallery-4.jpg"];
  img1=["/assets/gallery-5.jpg","/assets/gallery-6.jpg","/assets/gallery-7.jpg","assets/gallery-8.jpg"];
}
