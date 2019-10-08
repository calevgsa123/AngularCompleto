import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm",{static:false}) clienteForm:NgForm;
  @ViewChild("botonCerrar",{static:false}) botonCerrar:ElementRef;

  constructor(private clienteServicio: ClienteServicio,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(clientes => {
        saldoTotal += clientes.saldo;
      })
    }
    return saldoTotal;
  }

  onAgregar({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Porfavor llene el formulario correctamente', {
        cssClass: "alert-danger",
        timeOut: 4000
      })
    }else{
      this.clienteServicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.botonCerrar.nativeElement.click();
    }
  }
}
