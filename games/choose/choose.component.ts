import { TypeComponent } from './../type/type.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  component = TypeComponent;
}
