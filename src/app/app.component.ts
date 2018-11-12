import { Component, ViewChild, AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.appTitle);
    this.appTitle.nativeElement.innerText='Welcome to Bike shop!';
  }

  title = 'shop';
}
