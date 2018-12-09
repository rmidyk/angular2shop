export class ConstantsService {
  constructor(public App: string, public Version: string) { }
}
export const ConstantsServiceInstance = new ConstantsService("BikeShop", "1.0");
