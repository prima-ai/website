import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  tags = 'yikes';
  constructor() { 
    
  }

  ngOnInit() {
    this.fillTags();
  }

  fillTags() {
    let tagsection = document.getElementById('tags');
  }

}
