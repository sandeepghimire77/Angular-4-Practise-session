import { Directive, ElementRef, Renderer2,HostListener, HostBinding,  NgModule,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";
  private ishovering:boolean;

  constructor(private elRef:ElementRef, private renderer:Renderer2) {
  }

  ngOnInit() {

  }
  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "red");
    //this.ishovering = true;
    //the fourth arguments can be a flags that is implemented
    this.backgroundColor = "red";
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    //this.ishovering = false;
    this.backgroundColor = "transparent";
  }




}
