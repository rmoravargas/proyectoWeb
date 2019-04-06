import { Injectable } from '@angular/core';
import user from '../../assets/data/users.json';
import { User } from '../interfaces/index';
import { DataStorageService } from '../services/data-storage.service';
import { constant } from '../constant-data/constant.js';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = user as User[];
  constructor(private _dataStorage: DataStorageService) { }

  getUser(): User {
    return this._dataStorage.getObjectValue(constant.USER);
  }

}