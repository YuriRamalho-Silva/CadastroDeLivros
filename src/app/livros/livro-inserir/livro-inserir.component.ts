import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent {
  @Output() livroAdicionado = new EventEmitter();
  id: string;
  titulo: string;
  autor: string;
  numeroPgs: string;

  onLivroAdicionado($event){
    
  }



  onAdicionarLivro() {
    const cliente = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      numeroPgs: this.numeroPgs
    };
    this.livroAdicionado.emit(cliente);
  }
}
