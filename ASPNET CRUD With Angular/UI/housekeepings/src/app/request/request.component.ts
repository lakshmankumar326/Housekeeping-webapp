import { Component, OnInit } from '@angular/core';
import { HouseKeeping } from '../models/houseKeeping.model';
import { HouseKeepingsService } from '../service/house-keepings.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
   houseKeepings:HouseKeeping[]=[];
  //searchText:any;
  
  // filteredHouseKeepings:HouseKeeping[];
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

  constructor(private houseKeepingsService:HouseKeepingsService , private router : ActivatedRoute , private routes : Router) { }

  ngOnInit() {
    this.getAllHouseKeepings();
    // console.log(this.router.snapshot.paramMap.get('id'));
    this.houseKeepingsService.getCurrentData(this.router.snapshot.paramMap.get('id')).subscribe((response) => {
      this.houseKeeping = response;
    })
  }
   getAllHouseKeepings()
  {
    this.houseKeepingsService.getAllHouseKeepings()
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
      this.houseKeeping.serviceRequest="In Progress";
      console.log(`Updating ... ${this.houseKeeping}`);
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
         this.routes.navigate(['/Dashboard'] );
      }
    );
    }else{
     this.updateHouseKeeping(this.houseKeeping);
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
  updateHouseKeeping(houseKeeping:HouseKeeping)
  {
    this.houseKeepingsService.updateHouseKeeping(houseKeeping)
    .subscribe(
      response => {
        this.getAllHouseKeepings();
         this.routes.navigate(['/Dashboard'] );
      }
    )
  }


}
