import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-di-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
