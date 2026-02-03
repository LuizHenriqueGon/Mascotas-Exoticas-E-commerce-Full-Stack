package br.edu.ifsp.ecommerce.repository;

import br.edu.ifsp.ecommerce.domain.Pedido;
import br.edu.ifsp.ecommerce.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    // Busca todos os pedidos onde o campo 'usuario' é igual ao passado
    List<Pedido> findByUsuario(Usuario usuario);

}