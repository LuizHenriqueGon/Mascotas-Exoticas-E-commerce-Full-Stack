package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Data
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do produto é obrigatório")
    @Size(min = 3, max = 100)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @NotNull(message = "O preço deve ser informado")
    @Positive(message = "O preço deve ser maior que zero")
    private Double preco;

    @NotNull(message = "A quantidade em estoque deve ser informada")
    @Min(0)
    private Integer estoque;

    private String urlImagem;

    // Relacionamento que criaremos a seguir
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}