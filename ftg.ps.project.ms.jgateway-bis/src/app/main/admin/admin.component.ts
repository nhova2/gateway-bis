import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen:boolean = true;
  public links = [
    { name: 'Admin Dashboard', href: 'dashboard', icon: 'dashboard' },
    { name: 'Statistique', href: 'statistic', icon: '' },
    { name: 'Suivi Historique', href: '/follow', icon: '' },
    { name: 'Alerte', href: 'alert', icon: '' },
    { name: 'Logout', href: '/sign-in', icon: 'power_settings_new' },    
  ];
  constructor(public router:Router) { }

  ngOnInit() {
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
    };
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        if(window.innerWidth < 960){
          this.sidenav.close(); 
        }
      }                
    });
  }

}
