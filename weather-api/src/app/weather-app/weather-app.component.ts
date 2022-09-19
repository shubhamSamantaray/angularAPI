import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})


export class WeatherAppComponent implements OnInit {
  public weatherSearch!: FormGroup;
  public weatherData: any;
  //weathersearch reference to FormGroup:

  // By adding the formBuilder to the constructor, it creates an instance of 
  // the FormBuilder class, allowing you to use it within your component.
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService

  ) { }

  ngOnInit() {
    this.weatherSearch = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

}
