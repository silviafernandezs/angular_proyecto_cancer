import { Component, OnInit } from '@angular/core';
import { publicaciones} from './datos';
@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.component.html',
  styleUrls: ['./prevencion.component.css']
})
export class PrevencionComponent implements OnInit {

  datos : Array<any> = publicaciones;

  constructor() { }

  ngOnInit() {
  }

}
