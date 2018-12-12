import { Injectable } from '@angular/core';
import { ConfigOptionsModel } from '../models/config-options.model';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable()
export class AppSettingsService {
  private settingsKey: string = 'appSettings';
  private settingsFile: string = "assets/app-settings.json";
  private defaultAppSettings: ConfigOptionsModel = new ConfigOptionsModel();
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService) {
    this.defaultAppSettings.apiUrl = "http://localhost:3000";
  }

  getOptions() {
    var appSettings = this.localStorageService.getItem(this.settingsKey);
    if (appSettings) {
      return Promise.resolve(<ConfigOptionsModel>appSettings);
    } else {
      return new Promise<ConfigOptionsModel>((resolve, reject) => {
        this.httpClient.get(this.settingsFile).toPromise()
          .then(resp => {
            appSettings = <ConfigOptionsModel>resp;
            this.localStorageService.setItem(this.settingsKey, appSettings);
            resolve(appSettings);
          })
          .catch(resp => {
            console.log(`Could not load file '${this.settingsFile}': ${JSON.stringify(resp)}`);
            resolve(this.defaultAppSettings);
          });
      });
    }
  }
}
