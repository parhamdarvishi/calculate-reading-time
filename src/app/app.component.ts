import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(){
  }

  public calcRT($event){
        const wordsPerMinute = 200; // Average case.
        let result;
        
        let textLength = $event.target.value.split(" ").length; // Split by words
        if(textLength > 0){
          let value = Math.ceil(textLength / wordsPerMinute);
          result = `~${value} min read`;
        }
        document.getElementById("readingTime").innerText = result;
  }
  
}
