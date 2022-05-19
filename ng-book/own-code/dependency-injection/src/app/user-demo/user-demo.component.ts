import { Component, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
})
export class UserDemoComponent {
  userName: string;
  userService: UserService;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService = injector.get(UserService);
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray',
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
