import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card[title][description][logoLink]',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() privacyPolicyLink?: string;
  @Input() logoLink!: string;
  @Input() googlePlayLink?: string;
  @Input() appleStoreLink?: string;
  @Input() amazonStoreLink?: string;
}
