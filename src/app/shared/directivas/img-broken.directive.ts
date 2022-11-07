import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';

  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    elNative.src='https://www.charatechnologies.com/wp-content/uploads/2022/08/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
  }

  constructor(private elHost: ElementRef) { }


}
