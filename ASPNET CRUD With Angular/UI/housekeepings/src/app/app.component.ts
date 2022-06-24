import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HouseKeeping } from './models/houseKeeping.model';
import { HouseKeepingsService } from './service/house-keepings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'houseKeepings';
  // houseKeepings:HouseKeeping[]=[];
  // searchText:any;
  
  // // filteredHouseKeepings:HouseKeeping[];
  // houseKeeping:HouseKeeping={
  //   id:'',
  //   name:'',
  //   date:'',
  //   timeReq:'',
  //   timeIn:'',
  //   timeOut:'',
  // // }

   constructor() //private houseKeepingsService:HouseKeepingsService
   {

   }
  ngOnInit(): void {
     //this.getAllHouseKeepings();
    
  }

  // getAllHouseKeepings()
  // {
  //   this.houseKeepingsService.getAllHouseKeepings()
  //   .subscribe(
  //     response =>
  //     {
  //       console.log(response);
  //       this.houseKeepings=response;
  //       console.log(this.houseKeepings);
      
  //     }
  //   );
  // }

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
  //       }
  //     }
  //   );
  //   }else{
  //    this. updateHouseKeeping(this.houseKeeping);
  //   }
    
  // }
  // deleteHouseKeeping(id:string)
  // {
  //   this.houseKeepingsService.deleteHouseKeeping(id)
  //   .subscribe(
  //     response => {
  //       this.getAllHouseKeepings();
  //     }
  //   )
  // }

  // populateForm(houseKeeping:HouseKeeping)
  // {
  //   this.houseKeeping=houseKeeping;
  // }
  // updateHouseKeeping(houseKeeping:HouseKeeping)
  // {
  //   this.houseKeepingsService.updateHouseKeeping(houseKeeping)
  //   .subscribe(
  //     response => {
  //       this.getAllHouseKeepings();
  //     }
  //   )
  // }

  // searchText:string='';

  // onSearchTextEntered(searchValue:string)
  // {
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // }

  // Search()
  // {
  //   this.houseKeeping = this.houseKeeping.filter(res=>
  //     {

  //     })
  // }
  
   }
