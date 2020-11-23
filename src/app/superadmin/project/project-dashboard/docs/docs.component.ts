import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  filesToUpload = [];
  constructor() { }
  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"],
    ]
    
  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

  DetailsText = ''
  ngOnInit() {
  }

}
