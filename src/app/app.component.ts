import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('fileUpload') fileUpload;

  constructor(
    private http: HttpClient
  ) {


    // const req = new HttpRequest('GET', 'http://ng-poland.pl/app/assets/img/speakers/Ciro-Nunes.png');

    // this.http.request(req).subscribe(event => {
    //   debugger;
    // });

    // this.http.get('https://api.github.com/users')
    //   .subscribe(event => {
    //     debugger;
    //   });

  }

  ngOnInit(): void {
    const input = this.fileUpload.nativeElement;

    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('image', input.files[0]);
      console.log(formData);

    }
  }

  upload() {

  }

}
