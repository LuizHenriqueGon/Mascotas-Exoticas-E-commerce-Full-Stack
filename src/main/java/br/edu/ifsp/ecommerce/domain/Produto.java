package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String nomeCientifico;
    private String grupo;
    private Double preco;
    private Integer estoque;
    private String urlImagem;

    // --- NOVOS CAMPOS ---
    private String localOrigem; // Ex: Austrália, Andes Chilenos
    private String criador; // Ex: Criadouro Legalizado Aves do Sul
    // --------------------

    @Column(length = 4000) // Aumentamos para caber textos bem detalhados
    private String descricao;

    @Column(length = 4000)
    private String alimentacao;

    @Column(length = 4000)
    private String habitat;
}