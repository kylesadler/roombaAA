import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit {

  constructor(
    private http: HttpClient
	) {}

  strings; 
  input;

  ngOnInit() {
    this.getStrings();
    setInterval(()=> { this.getStrings() }, 1500);
  }

  getStrings(){
    let req =  this.http.get('/api/getTexts').subscribe(response => {
      console.log(response);
      this.strings = response;
    });
  }

  

  submit(s: String){
    
    console.log('string submitted: ' + s);
    let formData = {};
    formData['text'] = s;
    
    (<HTMLInputElement>document.getElementById("string")).value = "";

    let h = this.http.post('/api/submit', formData).subscribe((response) => {
      console.log(response);
      this.getStrings();
    });
  }


  keyDownFunction(event, s : String) {
    if(event.keyCode == 13) {
      this.submit(s);
      return false;
    }
  }

}
