import { Component, OnInit ,Optional} from '@angular/core';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService } from '../../services/constants.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  constructor(@Optional() private configService: ConfigOptionsService,
     private constantsService: ConstantsService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

}
