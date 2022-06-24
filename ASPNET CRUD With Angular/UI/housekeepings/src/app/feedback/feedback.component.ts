import { Component, OnInit } from '@angular/core';
import { Feedback, HouseKeeping } from '../models/houseKeeping.model';
// import { FeedbackService } from '../service/feedback.service';
import { HouseKeepingsService } from '../service/house-keepings.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  houseKeepings:HouseKeeping[]=[];
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

  constructor(private houseKeepingService:HouseKeepingsService) { }

  ngOnInit() {
    this.getAllHouseKeeping();
  }

   getAllHouseKeeping()
  {
    this.houseKeepingService.getAllHouseKeepings()
    .subscribe(
      response =>
      {
       // console.log(response);
        this.houseKeepings=response;
        //console.log(this.houseKeepings);
      
      }
    );
  }
   onSubmit()
  {
    if(this.houseKeeping.id==='')
    {
        this.houseKeepingService.addHouseKeeping(this.houseKeeping)
    .subscribe(
      response => {
        this.getAllHouseKeeping();
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
    // }else{
    //  this. updateHouseKeeping(this.feedback);
  }
    
  }
  deleteFeedback(id:string)
  {
    this.houseKeepingService.deleteHouseKeeping(id)
    .subscribe(
      response => {
        this.getAllHouseKeeping();
      }
    )
  }

  populateForm(houseKeeping:HouseKeeping)
  {
    this.houseKeeping=this.houseKeeping;
  }
  // updateHouseKeeping(houseKeeping:HouseKeeping)
  // {
  //   this.houseKeepingsService.updateHouseKeeping(houseKeeping)
  //   .subscribe(
  //     response => {
  //       this.getAllHouseKeepings();
  //     }
  //   )
  // }




}
