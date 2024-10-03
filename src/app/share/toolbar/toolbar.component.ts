import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{

  languages = ['en', 'es']

  constructor(private _translateService: TranslateService) {

  }

  ngOnInit(): void {
    const defaultLange = 'es'
    this._translateService.setDefaultLang(defaultLange);
    this._translateService.use(defaultLange);
  }

  changeLanguage(language: string):void {
    this._translateService.setDefaultLang(language);
    this._translateService.use(language);
    localStorage.setItem('language',language);
    alert(language);
  }
}
