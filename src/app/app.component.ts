import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultLang = 'en';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(this.defaultLang);

    let browserLang = translateService.getBrowserLang();
    if (browserLang) {
      translateService.use(browserLang);
    }
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
