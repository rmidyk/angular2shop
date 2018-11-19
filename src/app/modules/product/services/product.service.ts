import { Injectable } from '@angular/core';
import { IProductModel, ProductModel } from '../models/product.model';
import { Category } from '../enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProductModel[];

  getProducts() {
    return this.products;
  }

  constructor() {
    this.products = [
      new ProductModel("Harley-Davidson Fat Bob FXDF 2009", "это мощный Dark Custom с впечатляющими пропорциями! Как и подобает настоящему кастому, он имеет массивный руль, что делает его похожим на гоночного монстра для дрэг-рейсинга.", "https://cdn2.riastatic.com/photosnew/auto/photo/harley-davidson_fat-bob__250723392fx.webp", 15000, true, Category.Chopper),
      new ProductModel("KTM Duke 390 (Abs) 2016", "это мотоцикл класса \"Стрит\", который сочетает в себе максимальное удовольствие езда с оптимальными техническими характеристиками.", "https://cdn2.riastatic.com/photosnew/auto/photo/ktm_duke__238298427fx.webp", 5150, true, Category.Street),
      new ProductModel("BMW F 650GS 2008", "мотоцикл-универсал с мощным двигателем, способный буквально на все! Это настоящий друг, в компании которого вы проведете много времени: от первых уроков езды до серьезного путешествия по гравийным направлениям, горным перевалам и автострадам. ", "https://cdn3.riastatic.com/photosnew/auto/photo/bmw_f-650gs__250751053fx.webp", 6999, false, Category.AllRound),
      new ProductModel("KTM 690 Enduro R", "это модель класса \"Эндуро\", которая безусловно оставила свой след в истории этой категории. Низкий вес, мощность, максимально надежные внедорожные способности всегда будут в цене для мотоцикла такого класса.", "https://topkarting.ru/wp-content/uploads/2017/06/%D0%9A%D0%A2%D0%9C-690-%D1%8D%D0%BD%D0%B4%D1%83%D1%80%D0%BE-492x280.png", 2999, true, Category.Enduro)
    ];
  }
}
