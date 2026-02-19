import { Component } from '@angular/core';
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";
import {ActionsUiComponent} from "../../../../Shared/shared-ui/actions-ui/actions-ui.component";

@Component({
  selector: 'app-builders-actions',
  imports: [
    PreviousButtonComponent,
    ActionsUiComponent
  ],
  templateUrl: './builders-actions.component.html',
  styleUrl: './builders-actions.component.css',
})
export class BuildersActionsComponent {


}
