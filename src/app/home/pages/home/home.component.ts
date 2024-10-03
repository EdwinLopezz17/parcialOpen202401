import {Component, OnInit} from '@angular/core';
import {ToolbarComponent} from "../../../share/toolbar/toolbar.component";
import {TranslateModule, } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
