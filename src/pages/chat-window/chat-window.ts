import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Content} from 'ionic-angular/index';


/**
 * Generated class for the ChatWindowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat-window',
  templateUrl: 'chat-window.html',
  
})
export class ChatWindowPage {
 
userName:any;
ownUser:any="";
indexValue:any;
messageValue:any;
passWord:any;
messages:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
    //this.ngxAutoScroll.forceScrollDown();
   // window.scrollTo(0, document.body.scrollHeight);
    //window.location.hash = '#end';
    this.passWord=this.navParams.get('pwd');
    this.userName=this.navParams.get('name');
    if(this.passWord=="natpu@fip"){
    this.db.list('/GBOX').subscribe(data=>{
    this.messages=data;
  })  
}
else if(this.passWord=="spokenenglish"){
    this.db.list('/ENG').subscribe(data=>{
    this.messages=data;
  })  
}
else if(this.passWord=="MHR"){
    this.db.list('/MHR').subscribe(data=>{
    this.messages=data;
  })  
}
else if(this.passWord=="rest"){
    this.db.list('/REST').subscribe(data=>{
    this.messages=data;
  })  
  }
  }
  
  eventHandler(code){
    if(code==13){
      this.sendMessage();
    }
  }
  sendMessage(){
    
    var re = /fuck/gi;
    
    if(this.messageValue){
      if(this.messageValue.search(re)>=0){
        this.messageValue="********(text decrypted)";
      //this.showAlert("Bad Boy!!","Please enter Your name");
    }
    if(this.passWord=="natpu@fip"){
    this.db.list('/GBOX').push({
      username:this.userName,
      message:this.messageValue
    })
    this.messageValue="";
    //var itemList = document.getElementById("msgComplete");
   //itemList.scrollTop = itemList.scrollHeight;
    }
   else if(this.passWord=="spokenenglish"){
    this.db.list('/ENG').push({
      username:this.userName,
      message:this.messageValue
    })
    this.messageValue="";
    //var itemList = document.getElementById("msgComplete");
   //itemList.scrollTop = itemList.scrollHeight;
    }
   else if(this.passWord=="MHR"){
    this.db.list('/MHR').push({
      username:this.userName,
      message:this.messageValue
    })
    this.messageValue="";
    //var itemList = document.getElementById("msgComplete");
   //itemList.scrollTop = itemList.scrollHeight;
    }
   else if(this.passWord=="rest"){
    this.db.list('/REST').push({
      username:this.userName,
      message:this.messageValue
    })
    this.messageValue="";
    //var itemList = document.getElementById("msgComplete");
   //itemList.scrollTop = itemList.scrollHeight;
    }
    }
  }
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ChatWindowPage');
  }

}
