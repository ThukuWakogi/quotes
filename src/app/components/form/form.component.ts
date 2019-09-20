import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonFab } from '@ionic/angular'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isFabListOpen = false

  toggleFab(): void {
    this.isFabListOpen = !this.isFabListOpen
    console.log('lol')
  }

  constructor() {}

  ngOnInit() {}

}
