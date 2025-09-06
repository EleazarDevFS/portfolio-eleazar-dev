import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  activeLink: string = 'home';

  setActiveLink(link: string) {
    this.activeLink = link;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  goHome(){
    this.setActiveLink('home');
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
