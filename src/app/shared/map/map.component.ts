import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare const L: any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input() id: string

  constructor() { }

  ngAfterViewInit(): void {
    var map = L.map('map' + this.id, {
      center: [51.505, -0.09],
      zoom: 13
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
  }
  ngOnInit() { }

}
