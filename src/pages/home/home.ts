import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import{ChatWindowPage} from '../chat-window/chat-window';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:any=null;
password:any=null;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  
  showAlert(titleValue,messageValue) {
    let alert = this.alertCtrl.create({
      title: titleValue,
      subTitle: messageValue,
      buttons: ['OK']
    });
    alert.present();
  }
  login(){
    if(this.password=="MHR" || this.password=="natpu@fip" || this.password=="rest" || this.password=="spokenenglish"){
    var re = /fuck/gi;
    if(this.username==null){
      this.showAlert("So Funny!!!","Please enter ur name");
    }
    else if(this.username.search(re)>=0){
      this.showAlert("Bad Fellow!!!","Please enter Your name");
    }
    else if(/^[a-zA-Z][a-zA-Z ]+$/.test(this.username)){
      this.navCtrl.push(ChatWindowPage,{
        name:this.username,
        pwd:this.password
      })
      console.log("username is"+this.username);
    }
    else{
      this.showAlert("My Bad!!!","My Friend, Enter some valid name");
    }
  }
  else{
      this.showAlert("Authorization Denied!!!","Kindly enter valid password");
      }
  }

}
