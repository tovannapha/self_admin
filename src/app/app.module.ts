import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { Apollo } from 'apollo-angular';

/*
 * Guard Security
 */
import { AuthGuard } from './service/auth.service';
import { AclGuard } from './service/acl.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

//add Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyCOUZ0e_FYZdNT5t2cFz8gSZltlgrH6MP0",
  authDomain: "selfordering-cafc3.firebaseapp.com",
  databaseURL: "https://selfordering-cafc3.firebaseio.com",
  projectId: "selfordering-cafc3",
  storageBucket: "selfordering-cafc3.appspot.com",
  messagingSenderId: "489460233359"
};

// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
     uri: 'http://localhost:3000/graphql'
    //uri: 'http://54.169.228.139:3000/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule.forRoot(provideClient),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    AuthGuard,
    AclGuard
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
