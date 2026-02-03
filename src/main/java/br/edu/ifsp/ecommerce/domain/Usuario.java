package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true) // Garante que não existem dois emails iguais
    private String email;

    private String senha; // Em um projeto real, isso seria criptografado!

    private boolean admin; // Define se é Administrador (true) ou Cliente (false)
}