import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  private _introExpanded: boolean;
  private _theBasicsExpanded: boolean;
  private _chartsExpanded: boolean;

  public constructor() {
    this._introExpanded = false;
    this._theBasicsExpanded = false;
    this._chartsExpanded = false;
  }

  ngOnInit() { }

  public onIntroHeaderClick(): void {
    this._introExpanded = !this._introExpanded;
  }

  public onTheBasicsHeaderClick(): void {
    this._theBasicsExpanded = !this._theBasicsExpanded;
  }

  public onChartsHeaderClick(): void {
    this._chartsExpanded = !this._chartsExpanded;
  }

  public get introExpanded(): boolean {
    return this._introExpanded;
  }

  public get theBasicsExpanded(): boolean {
    return this._theBasicsExpanded;
  }

  public get chartsExpanded(): boolean {
    return this._chartsExpanded;
  }

}
