import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  subscription = new Subscription;
  title: string = 'Start'; 

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.subscription.add(
      this.titleService.setTitle(this.title)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
