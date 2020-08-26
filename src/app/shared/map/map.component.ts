import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { MatOptgroup } from '@angular/material/core';

declare const L: any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() id: string
  constructor() { }
  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
    var map = L.map('map' + this.id, {
      center: [51.505, -0.09],
      zoom: 13
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
  }

  ngOnInit() {
  }

}
