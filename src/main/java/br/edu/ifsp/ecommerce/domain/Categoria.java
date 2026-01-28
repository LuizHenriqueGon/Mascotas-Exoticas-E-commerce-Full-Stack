package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome da categoria é obrigatório")
    @Column(unique = true)
    private String nome;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore // Evita que o JSON entre em loop infinito ao listar categorias
    private List<Produto> produtos;
}