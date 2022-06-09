import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "./user.model";

/**
 * UserService manages our current user
 */
 @Injectable()
export class UsersService {
  // `currentUser` contains the current user
  currentUser: Subject<User|null> = new BehaviorSubject<User|null>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [
    UsersService
];