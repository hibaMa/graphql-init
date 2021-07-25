import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';

export const createApollo = (httpLink: HttpLink) => {
  return {
    link: httpLink.create({uri: 'http://localhost:3040/luna/graphql'}),
    cache: new InMemoryCache(),
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(protected httpLink: HttpLink,
              protected apollo: Apollo) {
    this.apollo.createDefault(createApollo(this.httpLink));
  }

}
