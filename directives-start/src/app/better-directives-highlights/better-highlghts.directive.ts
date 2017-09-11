import { Directive, ElementRef, Renderer2 , OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlghts]'
})
export class BetterHighlghtsDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }
  ngOnInit() {
  this.renderer.setStyle(this.elRef.nativeElement,"background-color", "blue");
    //the fourth arguments can be a flags that is implemented
  }

}
