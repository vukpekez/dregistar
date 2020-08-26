import { Component, OnInit, AfterViewInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const L: any

interface Location {
  lat: number,
  lon: number
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input() id: string
  @Input() location: Location
  @Output() distance: EventEmitter<{ i: number, value: number }> = new EventEmitter<{ i: number, value: number }>()

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    var map = L.map('map' + this.id, {
      center: [this.location.lat, this.location.lon],
      zoom: 16
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; DRegistar'
    }).addTo(map);
    L.marker([this.location.lat, this.location.lon]).addTo(map);
  }

  async ngOnInit() {
    const distance = await this.http.get<any>('https://api.geoapify.com/v1/routing?waypoints=48.261712774007066,10.98564147949219|48.20911695037711,11.334800720214844&mode=drive&apiKey=a5301f516d19497980e31d4ca801c80f').toPromise()
    this.distance.emit({ i: +this.id.substr(3), value: distance.features[0].properties.distance / 1000 })
  }

}
