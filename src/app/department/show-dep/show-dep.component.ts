import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:ShareService) { }

  DepartmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditCom!:boolean;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }


  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditCom = true; 
  }

  closeClick(){
    this.ActivateAddEditCom = false;
    this.refreshDepList();
  }

  editClick(item: any) {
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditCom=true;
  }

  deleteClick(item:any) {
    if(confirm("Are you sure you want to delete?")){
        this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
          alert(data.toString());
          this.refreshDepList();
        })
    }
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList = data;
    })
  }

}
