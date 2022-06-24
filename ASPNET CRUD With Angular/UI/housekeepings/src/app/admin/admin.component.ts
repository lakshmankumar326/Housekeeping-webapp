import { Component, OnInit } from '@angular/core';
// import { HouseKeeping} from '../models/houseKeeping.model';
import { HouseKeepingsService } from '../service/house-keepings.service';
import { Router } from '@angular/router';
import { HouseKeeping } from '../models/houseKeeping.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   houseKeepings:HouseKeeping[]=[];
  //feedbacks:Feedback[]=[]
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

  constructor(private houseKeepingsService:HouseKeepingsService) { }

  ngOnInit() {
    this.getAllHouseKeepings();
  }


  getAllHouseKeepings()
  {
    this.houseKeepingsService.getAllHouseKeepings()
    .subscribe(
      response =>
      {
        //console.log(response);
        this.houseKeepings=response;
        //console.log(this.houseKeepings);
      
      }
    );
  }

  // onSubmit()
  // {
  //   if(this.houseKeeping.id==='')
  //   {
  //       this.houseKeepingsService.addHouseKeeping(this.houseKeeping)
  //   .subscribe(
  //     response => {
  //       this.getAllHouseKeepings();
  //        this. houseKeeping={
  //           id:'',
  //           name:'',
  //           date:'',

  //           timeReq:'',
  //           timeIn:'',
  //           timeOut:'',
  //           feedback:'',
  //           complaint:'',
  //           serviceRequest:'',
  //           serviceIsApproved:'',
  //       }
  //     }
  //   );
  //   }else{
  //   //  this. updateHouseKeeping(this.houseKeeping);
  //   }
    
  // }
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
  updateHouseKeepingServiceApproved(houseKeeping:HouseKeeping)
  {
    this.houseKeeping = houseKeeping;
    this.houseKeeping.serviceRequest = "Approved";
    console.log(`Updating service request ${this.houseKeeping.serviceRequest}`);
  //  this.routes.navigate([`/Update/${id}`] );

       
    this.houseKeepingsService.updateHouseKeeping(this.houseKeeping)
    .subscribe(
      response => {
        this.getAllHouseKeepings();
      }
    )
  }

  updateHouseKeepingServiceRejected(houseKeeping:HouseKeeping)
  {
    this.houseKeeping = houseKeeping;
    console.log(this.houseKeeping.serviceRequest);
    this.houseKeeping.serviceRequest = "Rejected";
    console.log(`Updating service request ${this.houseKeeping.serviceRequest}`);
  //  this.routes.navigate([`/Update/${id}`] );

       
    this.houseKeepingsService.updateHouseKeeping(this.houseKeeping)
    .subscribe(
      response => {
        this.getAllHouseKeepings();
      }
    )
  }

}
