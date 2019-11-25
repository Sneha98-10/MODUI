import { Component, OnInit } from '@angular/core';
import { SuserService } from '../services/suser.service';
import { Cuser } from '../models/cuser';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  item:Cuser;
  list:Cuser[];
  msg:string;
  constructor(private _service:SuserService) { 
    this.item=new Cuser();
    this._service.GetUser().subscribe(k=>this.list=k)
   
  }

  ngOnInit() {
  }
  public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }
  public Block(Id:number)
  {
    this._service.Block(Id).subscribe(k=>this.msg);
  }
  public UnBlock(Id:number)
  {
    this._service.UnBlock(Id).subscribe(k=>this.msg);
  }
}
