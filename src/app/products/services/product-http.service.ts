import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';
import { ConfigOptionsModel } from 'src/app/core/models/config-options.model';
import { IProductModel } from '../models/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsServicesModule } from '../products-services.module';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductHttpService {
  private config: ConfigOptionsModel;
  private route: string = "products";

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService) {
    this.appSettings.getOptions().then(x => this.config = x);
  }

  getProducts() {
    return this.http
      .get<IProductModel[]>(`${this.config.apiUrl}/${this.route}`)
      .pipe(catchError(this.handleObservableError));
  }

  getProduct(id: number): Promise<IProductModel> {
    return this.http.get(`${this.config.apiUrl}/${this.route}/${id}`)
      .toPromise()
      .then(resp => <IProductModel>resp)
      .catch(this.handlePromiseError);
  }

  createProduct(model: IProductModel): Promise<IProductModel> {
    return this.http.post(`${this.config.apiUrl}/${this.route}`,
      JSON.stringify(model), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).toPromise()
      .then(resp => <IProductModel>resp)
      .catch(this.handlePromiseError);
  }

  updateProduct(model: IProductModel): Promise<IProductModel> {
    return this.http.put(`${this.config.apiUrl}/${this.route}/${model.id}`,
      JSON.stringify(model), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      })
      .toPromise()
      .then(resp => <IProductModel>resp)
      .catch(this.handlePromiseError);
  }

  deleteProduct(model: IProductModel): Promise<IProductModel> {
    return this.http.delete(`${this.config.apiUrl}/${this.route}/${model.id}`)
      .toPromise()
      .catch(this.handlePromiseError);
  }

  private handleObservableError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
        }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private handlePromiseError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
