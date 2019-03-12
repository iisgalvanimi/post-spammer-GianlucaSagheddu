import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  
  articles = new Array<string>();
  addSpam(spamt: HTMLInputElement, spamn: HTMLInputElement): boolean{
    let cont = Number(spamn.value);
    for(let i:number =1; i<= cont; i++) {
      this.articles.push(i + " " + spamt.value);
    }
    return false;
  }
}
