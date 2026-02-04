package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    // REMOVEMOS A LISTA DE PRODUTOS ABAIXO PARA PARAR O ERRO
    // POIS O PRODUTO AGORA USA "GRUPO" E NÃO MAIS ESSA CATEGORIA
}