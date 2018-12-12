import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { ConstantsService } from '../../../core/services/constants.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { GeneratorService } from '../../../core/services/generate.service';

let tokenFactory = (generator: GeneratorService) => generator.generate(20);

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less'],
  providers: [{ provide: 'token', useFactory: tokenFactory, deps: [GeneratorService] }]
})
export class ContactUsComponent implements OnInit {
  app: string;
  version: string;
  token: string;
  constructor(@Optional() private appSettingsService: AppSettingsService,
    private constantsService: ConstantsService,
    private localStorageService: LocalStorageService,
    @Inject('token') private randomToken: string) { }

  ngOnInit() {
    this.app = this.constantsService.App;
    this.version = this.constantsService.Version;
    this.token = this.randomToken;
  }

}
