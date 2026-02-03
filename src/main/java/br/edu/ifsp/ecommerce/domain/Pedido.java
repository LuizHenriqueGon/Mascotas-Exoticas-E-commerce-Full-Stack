package br.edu.ifsp.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCliente;

    private LocalDateTime dataPedido = LocalDateTime.now();

    private Double valorTotal;

    // --- NOVO: Vínculo com o Usuário ---
    @ManyToOne
    @JoinColumn(name = "usuario_id") // Cria a coluna usuario_id no banco
    private Usuario usuario;
    // -----------------------------------

    @ManyToMany
    @JoinTable(
            name = "pedido_produtos",
            joinColumns = @JoinColumn(name = "pedido_id"),
            inverseJoinColumns = @JoinColumn(name = "produto_id")
    )
    private List<Produto> produtos;
}