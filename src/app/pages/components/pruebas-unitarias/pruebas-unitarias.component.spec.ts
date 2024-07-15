import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasUnitariasComponent } from './pruebas-unitarias.component';
import { FormGroup } from '@angular/forms';

describe('PruebasUnitariasComponent', () => {
  let component: PruebasUnitariasComponent;
  let fixture: ComponentFixture<PruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasUnitariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    it('debe crear un formulario de registro valido', () => 
      {
        expect(component.registerForm).toBeDefined();
        expect(component.registerForm instanceof FormGroup).toBeTruthy();
        expect(component.registerForm.get('nombre')).toBeDefined();
        expect(component.registerForm.get('usuario')).toBeDefined();
        expect(component.registerForm.get('email')).toBeDefined();
        expect(component.registerForm.get('password1')).toBeDefined();
        expect(component.registerForm.get('password2')).toBeDefined();
        expect(component.registerForm.get('fecha_nac')).toBeDefined();
        expect(component.registerForm.get('direccion')).toBeDefined();
      })
    
    
    
    
      it('debe marcar los campos como invalidos cuando estan vacios',() =>
      {
        const nombreControl = component.registerForm.get('nombre');
        const usuarioControl = component.registerForm.get('usuario');
        const emailControl = component.registerForm.get('email');
        const password1Control = component.registerForm.get('password1');
        const password2Control = component.registerForm.get('password2');
        const fechanacControl = component.registerForm.get('fecha_nac');
        const direccionControl = component.registerForm.get('direccion');
    
        expect(nombreControl?.invalid).toBeTruthy();
        expect(usuarioControl?.invalid).toBeTruthy();
        expect(emailControl?.invalid).toBeTruthy();
        expect(password1Control?.invalid).toBeTruthy();
        expect(password2Control?.invalid).toBeTruthy();
        expect(fechanacControl?.invalid).toBeTruthy();
        expect(direccionControl?.invalid).toBeTruthy();
      })
    
    
      it('debe marcar el campo email como valido con una direccion de correo electronico valido',() =>
      {
        const emailControl = component.registerForm.get('email');
        emailControl?.setValue('test@ejemplo.com');
        expect(emailControl?.valid).toBeTruthy();
      })
    
    
      it('debe marcar el campo password como valido con una contraseña de al menos 6 caracteres',() =>
      {
        const password1Control = component.registerForm.get('password1');
        password1Control?.setValue('@passwordAA234%');
        expect(password1Control?.valid).toBeTruthy();
      })
    
    
    
      it('debe llamar a la funcion submitForm cuando el formulario se envia con datos validos',()=>
      {
        spyOn(component, 'onSubmit');
        const nombreControl = component.registerForm.get('nombre');
        const usuarioControl = component.registerForm.get('usuario');
        const emailControl = component.registerForm.get('email');
        const password1Control = component.registerForm.get('password1');
        const password2Control = component.registerForm.get('password2');
        const fechanacControl = component.registerForm.get('fecha_nac');
        const direccionControl = component.registerForm.get('direccion');
    
    
        nombreControl?.setValue('Juan Pedro');
        usuarioControl?.setValue('jpedro');
        emailControl?.setValue('juanpedro@ejemplo.com');
        password1Control?.setValue('A23wsder@4%');
        password2Control?.setValue('A23wsder@4%');
        fechanacControl?.setValue('03/05/2000');
        direccionControl?.setValue('');
    
        const formsElement: HTMLFormElement = fixture.nativeElement.querySelector('form')
        formsElement.dispatchEvent(new Event('submit'));
        fixture.detectChanges();
        expect(component.onSubmit).toHaveBeenCalled();
    
      });
    });