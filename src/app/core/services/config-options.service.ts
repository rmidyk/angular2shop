import { Injectable } from '@angular/core';
import { ConfigOptionsModel } from '../models/config-options.model';

/* @Injectable({
  providedIn: 'root'
}) */
export class ConfigOptionsService {

  private configOptions: ConfigOptionsModel = new ConfigOptionsModel();

  setOptions(configOptions: ConfigOptionsModel) {
    this.configOptions = configOptions;
  }

  getOptions() {
    return this.configOptions
  }
}
