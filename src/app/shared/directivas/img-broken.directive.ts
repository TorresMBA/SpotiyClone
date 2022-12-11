import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;

  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    if (this.customImg) {
      elNative.src='https://www.charatechnologies.com/wp-content/uploads/2022/08/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
    } else {
      //?adasd
      //!asdasd
      //*asdasda
      //TODO: EN ESTA LINA SE DEBERÍA PONER UNA IMAGEN ALMACENADO EN NUESTRO LOCAL APUNTANDO A LA RUTA DE ESTA MISMA O
      //TODO: UNA IMAGEN CONVERTIDA EN BASE64 COMO LO HIZO EN EL CURSO
      elNative.src='https://www.charatechnologies.com/wp-content/uploads/2022/08/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
    }
  }

  constructor(private elHost: ElementRef) { }


}
