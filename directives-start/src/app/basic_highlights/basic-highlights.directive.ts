import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlights]'
})
export class BasicHighlightsDirective implements OnInit {

  constructor(private elRef: ElementRef) {

  }
  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }

}
