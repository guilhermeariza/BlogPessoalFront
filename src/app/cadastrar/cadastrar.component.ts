import { AuthService } from './../service/auth.service';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  userLogin: UserLogin = new UserLogin
  confirmarSenha:string
  tipoUsuario:string

  constructor(
    private AuthService:AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      this.router.navigate(['/entrar'])
      alert('As senhas estão incorretas')
    }
    else{
      this.AuthService.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        alert("Usuário cadastrado com sucesso!!!")
      })
    }
  }

}
