import { Component, OnInit } from '@angular/core';
import { Feedback, HouseKeeping } from '../models/houseKeeping.model';
import { HouseKeepingsService } from '../service/house-keepings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houseKeepings:HouseKeeping[]=[];
  feedbacks:Feedback[]=[]
  searchText:any;
   houseKeeping:HouseKeeping={
    id:'',
    name:'',
    date:'',
    timeReq:'',
    timeIn:'',
    timeOut:'',
    feedback:'',
    complaint:'',
    serviceRequest:'',
    serviceIsApproved:'',
  }
  feedback:Feedback={
    id:'',
    // name:'',
    // date:'',
    // timeReq:'',
    // timeIn:'',
    // timeOut:'',
    feedback:'',
    complaint:'',
  }

  constructor(private houseKeepingsService:HouseKeepingsService,private routes:Router) { 
    
  }

  

  ngOnInit() {
  this.getAllHouseKeepings()
 
  }
   getAllHouseKeepings()
  {
    this.houseKeepingsService.getAllHouseKeepings()
    .subscribe(
      response =>
      {
        console.log(response);
        this.houseKeepings=response;
        //console.log(this.houseKeepings);
      
      }
    );
  }

  onSubmit()
  {
    if(this.houseKeeping.id==='')
    {
        this.houseKeepingsService.addHouseKeeping(this.houseKeeping)
    .subscribe(
      response => {
        this.getAllHouseKeepings();
         this. houseKeeping={
            id:'',
            name:'',
            date:'',

            timeReq:'',
            timeIn:'',
            timeOut:'',
            feedback:'',
            complaint:'',
            serviceRequest:'',
            serviceIsApproved:'',
        }
      }
    );
    }else{
    //  this. updateHouseKeeping(this.houseKeeping);
    }
    
  }
  deleteHouseKeeping(id:string)
  {
    this.houseKeepingsService.deleteHouseKeeping(id)
    .subscribe(
      response => {
        this.getAllHouseKeepings();
      }
    )
  }

  populateForm(houseKeeping:HouseKeeping)
  {
    this.houseKeeping=houseKeeping;
  }
  updateHouseKeeping(id:string)
  {
    console.log("Naviagting ....");
    this.routes.navigate([`/Update/${id}`] );

       
    // this.houseKeepingsService.updateHouseKeeping(houseKeeping)
    // .subscribe(
    //   response => {
    //     this.getAllHouseKeepings();
    //   }
    // )
  }

}
