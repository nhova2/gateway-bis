import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-follow-history',
  templateUrl: './follow-history.component.html',
  styleUrls: ['./follow-history.component.scss']
})
export class FollowHistoryComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen:boolean = true;
  public links = [
    { name: 'Suivi Historique Option1', href: 'option1', icon: '' },
    { name: 'Suivi Historique Option2', href: 'option2', icon: '' },
    { name: 'Suivi Historique Commande ', href: 'order', icon: '' },
    { name: 'Suivi Historique Savegarde', href: 'save', icon: '' },
    { name: 'Suivi Historique Notations', href: 'notations', icon: '' },
    { name: 'Suivi Historique Gestion Demande', href: 'demand-management', icon: '' },
    { name: 'Suivi Historique Encheres', href: 'auction', icon: '' },
    { name: 'Suivi Historique Livraions', href: 'delivery', icon: '' },
    { name: 'Suivi Historique Devis ', href: 'quotation', icon: '' },
    { name: 'Suivi Historique Credit', href: 'credit', icon: '' }, 
    { name: 'Suivi Historique pret', href: 'loan', icon: '' }
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
