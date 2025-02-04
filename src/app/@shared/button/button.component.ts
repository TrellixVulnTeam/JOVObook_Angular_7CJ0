import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() text!:string;
  @Input() color!:string;
  @Input() IDbutton!:number;
  @Output() giveID=new EventEmitter()

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  getMyID() {
    this.giveID.emit(this.IDbutton);
  };


}
