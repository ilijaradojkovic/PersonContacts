import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contactmanager-app',
  templateUrl: './contactmanager-app.component.html',
  styleUrls: ['./contactmanager-app.component.css']
})
export class ContactmanagerAppComponent implements OnInit {
  showFiller = false;
  //load icons once pa zato radimo ovde,sanitizer koristimo da bi bile trusty
  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'))
  }

  ngOnInit(): void {
  }

}
