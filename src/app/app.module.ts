import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatWindowPage } from '../pages/chat-window/chat-window';
 var config = {
    apiKey: "AIzaSyA4WFVQn_6C2YhR6lj_GEGRJAfRXYOT728",
    authDomain: "gchat-f5eb6.firebaseapp.com",
    databaseURL: "https://gchat-f5eb6.firebaseio.com",
    projectId: "gchat-f5eb6",
    storageBucket: "gchat-f5eb6.appspot.com",
    messagingSenderId: "279436191126"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatWindowPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatWindowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
