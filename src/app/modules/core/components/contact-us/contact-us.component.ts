import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService } from '../../services/constants.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { GeneratorService } from '../../services/generate.service';

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
  constructor(@Optional() private configService: ConfigOptionsService,
    private constantsService: ConstantsService,
    private localStorageService: LocalStorageService,
    @Inject('token') private randomToken: string) { }

  ngOnInit() {
    this.app = this.constantsService.App;
    this.version = this.constantsService.Version;
    this.token = this.randomToken;
  }

}
