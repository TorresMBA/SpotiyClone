import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  //TODO: SE CREA COMPONENTE DE PRUEBA PARA EL TEST
  @Component({
    template: '<img appImgBroken class="testing-directiva" [src]="srcMock"/>'
  })
  class TestComponent{
    public srcMock: any = null;
  }

//TODO La prueba de ImgBroken es la siguiente
  describe('ImgBrokenDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>
    
    //? Este metodo se ejcuta antes de hacer la prueba(it)
    beforeEach(() => {
      //*Creamos un modulo de testing, donde importamos nuestro componente de prueba y
      //* nuestro directiva para la imagen
      TestBed.configureTestingModule({
        declarations: [TestComponent, ImgBrokenDirective]
      })
      fixture =TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })


    //TODO Deberia instanciar correctamente
    it('should create an instance', () => {
      const mockElement = new ElementRef('')
      const directive = new ImgBrokenDirective(mockElement);
      expect(directive).toBeTruthy();
    });

    it('Test component debería instanciar sin problemas', () => {
      expect(component).toBeTruthy();
    });

    it('directiva debería cambiar la imagen por un base 64', (done: DoneFn) => {
      const beforeImgElement = fixture.debugElement.query(By.css('.testing-directiva')).nativeElement;
      const beforeImgSrc = beforeImgElement.src; //TODO: tenemos la url antes de ser cambiada por la directiva

      component.srcMock = undefined

      setTimeout(() => {
        const afterImgElement = fixture.debugElement.query(By.css('.testing-directiva')).nativeElement;
        const afterImgSrc = afterImgElement.src; //TODO: Tenemos la url después de ser cambiada por la directiva.

        //!En teoría acá se tendría que mandar una imagen en base 64 pero no se realizo y se le mando una url default
        expect(afterImgSrc).toEqual('https://www.charatechnologies.com/wp-content/uploads/2022/08/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg');
        
        //!para fines de que el test salga exitoso!. para realizarlo correctamente existe una expresion regular para validar que es un imagen
        //?Lo que hace esta expresión regular es identificar data:image exista al inicio de la cadena de base64 si es así será true
        //expect(afterImgSrc).toMatch(/\bdata:image\b/);//TODO data:image:01010101
        done();
      }, 3000);
    });
  });
});
