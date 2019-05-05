import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fillTags(['#epic','#bruhmomentum']);
  }

  createTag(name :string) {
    let tagsection = document.getElementById('tags');
    var cx = document.createElement('div');
    cx.style.display = 'table-cell';
    cx.textContent = name;
    cx.style.backgroundColor = 'rgba(228, 233, 237, 0.9)'
    cx.style.borderRadius = '10px';
    cx.style.padding = '3px 6px';
    tagsection.style.borderSpacing = '5px';
    tagsection.appendChild(cx);
    return tagsection;
  }

  fillTags(tags :string[]) {
    for(var tag in tags) {
      this.createTag(tags[tag]);
    }
  }
}
