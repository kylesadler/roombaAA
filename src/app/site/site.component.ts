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

  ngOnInit() {
    this.getStrings();
  }

  getStrings(){
    return this.http.get('api/getStrings').subscribe(response => {
      console.log(response);
      this.strings = response;
    });
  }


  submit(s: String){
    console.log('string submitted: ' + s);
    let formData = {};
    formData['string'] = s;
    return this.http.post('api/submit', formData).subscribe(response => {
      console.log("submitted string");
      this.getStrings();
    });
  }

}
