import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nivel2',
  templateUrl: './nivel2.component.html',
  styleUrls: ['./nivel2.component.css']
})
export class Nivel2Component implements OnInit {

  sumasForm;
  @ViewChild("modalRetroalimentacion", { static: false })
  modalRetroalimentacion!: TemplateRef<any>;


  constructor(private formBuilder: FormBuilder, public modal: NgbActiveModal, private modalService: NgbModal) { 
    this.sumasForm = this.formBuilder.group({
      primero: this.primero,
      segundo: this.segundo,
      tercero: this.tercero,
      cuarto: this.cuarto,
    })
  }
  
  respuesta: boolean = false;
  
  infoModal = {
    ejercicio: '',
    valor: 0,
    operacion: '',
    validacion: false
  }
  
  public primero = new FormControl('', Validators.required);
  public segundo = new FormControl('', Validators.required);
  public tercero = new FormControl('', Validators.required);
  public cuarto = new FormControl('', Validators.required);
  
  uno!: boolean;
  dos!: boolean;
  tres!: boolean;
  cuatro!: boolean;

  

  mostrar_modal!: boolean;

  ngOnInit(): void {

  }

  OnSubmit(){
    if(parseInt(this.sumasForm.value.primero!) == 4){
      this.uno = true;
    }else{
      this.uno = false;
    }

    this.primero.disable();
    
    if(parseInt(this.sumasForm.value.segundo!) == 10){
      this.dos = true;
    }else{
      this.dos = false;
    }
    
    this.segundo.disable();

    if(parseInt(this.sumasForm.value.tercero!) == 5){
      this.tres = true;
    }else{
      this.tres = false;
    }

    this.tercero.disable();

    if(parseInt(this.sumasForm.value.cuarto!) == 8){
      this.cuatro = true;
    }else{
      this.cuatro = false;
    }

    this.cuarto.disable(); 

    this.respuesta = true;
    console.log(this.uno, this.dos, this.tres, this.cuatro);

  }

  OnRetroalimentacion(ejercicio: string, valor: number, validacion: boolean, operacion: string){
      this.infoModal = {
        ejercicio: ejercicio,
        valor: valor,
        operacion: operacion,
        validacion: validacion
      };
  }
}