import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) { }
  public accordianData: any;

  ngOnInit(): void {
    this.httpClient.get("assets/JSONData/event.json").subscribe(data =>{
      this.accordianData = data;
    })
  }
}
