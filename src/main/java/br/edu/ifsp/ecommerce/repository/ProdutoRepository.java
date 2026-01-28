package br.edu.ifsp.ecommerce.repository;

import br.edu.ifsp.ecommerce.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    // Permite buscar produtos pelo nome se precisar no futuro
}