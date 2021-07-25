import { Component } from '@angular/core';
import { GetCurrentUserGQL } from 'src/app/generated-graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graphql-project';

  constructor(private currentUser: GetCurrentUserGQL) {
    this.currentUser.fetch().pipe(
      map(result => result.data.whoAmI),
    ).subscribe(res => console.log(res));
  }
}
