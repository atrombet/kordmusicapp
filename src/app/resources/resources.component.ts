import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  @ViewChild('collapsed') private _addIcon: TemplateRef<any>;
  @ViewChild('expanded') private _removeIcon: TemplateRef<any>;

  constructor() { }

  ngOnInit() { }

  public get addIcon(): TemplateRef<any> {
    return this._addIcon;
  }

  public get removeIcon(): TemplateRef<any> {
    return this._removeIcon;
  }

}
