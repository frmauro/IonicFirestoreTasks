import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  template: `
    <ion-button>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-button>
  `
})
export class MenuToggleComponent {
  @Input() menu: string;
}
