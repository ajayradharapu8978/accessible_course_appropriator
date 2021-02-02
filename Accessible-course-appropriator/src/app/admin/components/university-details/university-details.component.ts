import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.SetUniversityToForm();
    console.log(this.id);
    
  }

  SetUniversityToForm(){
    this.route.params.subscribe(params => {
      this.id = params.id;
      if (!this.id) {
        return;
      }
  });
}


}
