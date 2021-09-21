import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public districts: any[] = [];
  public vietnamData = [
    {city: 'Chọn thành phố', district :[]},
    {
      city: 'Hà Nội',
      district: [
        'Thành phố Hà Nội',
        'Quận Ba Đình',
        'Quận Hà Đông',
        'Quận Tây Hồ',
        'Quận Long Biên',
        'Quận Nam Từ Liêm',
        'Quận Bắc Từ Liêm'
      ]
    },
    {
      city: 'TP. Hồ Chí Minh',
      district: [
        'Sài Gòn',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận 1',
        'Quận 2',
        'Quận Bình Thạnh'
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChangeData(event: any){
    const city = event.target.value
    const search = this.vietnamData.filter(data => data.city === city)
    console.log(search)
    if(search && search.length > 0){
      this.districts = search[0].district;
    }
  }

}
