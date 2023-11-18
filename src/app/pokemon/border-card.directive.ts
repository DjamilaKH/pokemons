import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
// Nous avons importés HostListener depuis la librebie core d'angulare puis nous avons utilisé l annotation @Host Listener pour détécter les événnements mouseenter et mouseleave, @HostListener: permet de lier une methode de notre directive a un événement donné 
export class BorderCardDirective {
  private initialColor: string='#F5F5F5';
  private defaultColor: string='#009688';
  private defaultheight: number= 300;

  constructor( private el: ElementRef ) 
  // un element qui permet de présenter une référence vers l'element dedom dans  une carte de pokémon sur le quel on va appliqué la directive
  {this.setHeight(this.defaultheight);
  this.setBorder(this.initialColor); }

@Input('pkmnBorderCard') borderColor: string; // avec alias

// @Input() pkmnBorderCard : string; // sans  alias

  // on va définir deux méthodes setBorder et setHeight pour la bordure et la hauteur commune pour tous les éléments
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#009688')
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5')
  }
 private setHeight( height: number ){
    this.el.nativeElement.style.height =`${height}px`
  }
 private setBorder(color:string){
  let border='solid 4px '+ color;
    this.el.nativeElement.style.border= border;
  }
}
