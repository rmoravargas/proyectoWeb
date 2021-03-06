import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { News } from '../interfaces/index';
import { constant } from '../constant-data/constant';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _dataStorage: DataStorageService) { }

  getNews(): News[] {
    return this._dataStorage.getObjectValue(constant.NEWS) as News[];
  }

  getNewsById(id: number): News {
    return (this._dataStorage.getObjectValue(constant.NEWS) as News[]).find(n => n.idNews == id);
  }

  saveNew(news: News) {
    let index: number = -1;
    let news_list = this._dataStorage.getObjectValue(constant.NEWS) as News[];
    let last_id = this._dataStorage.getObjectValue(constant.IDNEWS) as number;
    news_list.forEach((item, index_list)=>{
      if (item.idNews == news.idNews) {
        index = index_list;
      }
    });
    if (index >= 0) {
      news_list[index] = news;
    } else {
      news.idNews = last_id + 1;
      news_list.push(news);
    }

    this._dataStorage.setObjectValue(constant.NEWS, news_list);
    this._dataStorage.setObjectValue(constant.IDNEWS, last_id + 1);
  }
  deleteNew(id: number): boolean {
    let news_list = this._dataStorage.getObjectValue(constant.NEWS) as News[];
    let indix = news_list.findIndex(item => item.idNews == id);
    news_list.splice(indix, 1);
    this._dataStorage.setObjectValue(constant.NEWS, news_list);
    return true;
  }
}
