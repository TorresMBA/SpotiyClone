import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import * as mockRaw from '../../../data/user.json'

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }
  let mockCookieService;

  beforeEach(() => {
    mockCookieService = jasmine.createSpyObj('CookieService', ['get','check', 'set', 'delete']);
    mockCookieService.check.and.returnValue(true);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(mockCookieService, httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    //TODO: Prueba del sendCredentials
    //!DEPRECATED: Se comento metodo de ejecución de llamado de api porque este tiene una logica
    //!diferente al curso, ya que el que tenemos usa pipe y cookieservice, en el curso fue por otra
    //!alternativa que explico.
    /*it('Debe de retornar un objecto con "data" y "tokenSession"',
    (done: DoneFn) => {

      //TODO: Arrange

      const user: any = mockUser.userOk
      const mockResponse = {
        data: {},
        tokenSession: '0x0x0x'
      }

      httpClientSpy.post.and.returnValue(
        of(mockResponse) //TODO: ✔✔✔ ya es observable
      )

      //TODO: Act
      service.sendCredentials(user.email, user.password)
        .subscribe(responseApi => {//TODO ['data','tokenSession']
          const getProperties = Object.keys(responseApi)
          expect(getProperties).toContain('data')
          expect(getProperties).toContain('tokenSession')
          done()
        })

    })*/


  it('TEST de suma de 2 + 3', () => {

    const a = 2
    const b = 3


    const c = service.suma(a, b)


    expect(c).toEqual(5)

  })
});
