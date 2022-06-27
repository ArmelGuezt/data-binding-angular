import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos Novos!"

  produto = {
    descricao: "Playstation5",
    preco: 4500,
    quantidade: 1,
    Image: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

  precoComDesconto (preco: number) {
    return preco * 0.90;
  }

  comprar() {
    alert("produto comprado com sucesso!");
  }

  clicoutag() {
    alert("você clicou em um produto")
  }

  passoumouse() {
    alert("você passou o mouse encima de uma tag")
  }

  pressionoutecla(event: any) {
   console.log(event.target.value)
  }

  obterprecodesconto() {
    this.produto.preco = this.produto.preco * 0.90;
  }
}
