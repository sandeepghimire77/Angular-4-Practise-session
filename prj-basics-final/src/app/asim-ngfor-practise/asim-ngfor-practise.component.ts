import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asim-ngfor-practise',
  templateUrl: './asim-ngfor-practise.component.html',
  styleUrls: ['./asim-ngfor-practise.component.css']
})
export class AsimNgforPractiseComponent implements OnInit {
  group: any[]= [
    {
    country_name: "UK",
      people: [
      {
      name: "sandeep"
      },
      {
        name: "Aishu "
      },
      {
        name: "sandesh"
      },
    ]
  },
    {
      country_name: "Germany",
      people: [{
        name: "meike",
      },
        {
        name: "sandra",
      },
        {
          name: "max",
        },
        {
          name: "maik"
        },
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
