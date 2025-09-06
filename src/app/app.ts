import { Component, signal, OnInit } from '@angular/core';
import {Router, NavigationEnd, Event } from '@angular/router';
import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('cv-eleazar');
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
}
