import { Component, OnInit } from '@angular/core';
import { CssSelector, collectExternalReferences } from '@angular/compiler';
import { createChangeDetectorRef } from '@angular/core/src/view/refs';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  searchInputChanged() {
    console.log('recorderChange');
  }

}
