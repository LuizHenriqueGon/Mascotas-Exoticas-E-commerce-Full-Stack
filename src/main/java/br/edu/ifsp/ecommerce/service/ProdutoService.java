package br.edu.ifsp.ecommerce.service;

import br.edu.ifsp.ecommerce.domain.Produto;
import br.edu.ifsp.ecommerce.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    public Produto salvar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Optional<Produto> buscarPorId(Long id) {
        return produtoRepository.findById(id);
    }

    public void excluir(Long id) {
        produtoRepository.deleteById(id);
    }

    // Se houver algum método de filtro antigo aqui que usava categoria,
    // ele deve ser atualizado ou removido.
    // Exemplo de atualização para o novo padrão:
    /*
    public List<Produto> filtrarPorGrupo(String grupo) {
        // Você precisaria criar este método findByGrupo no Repository antes de usar aqui
        return produtoRepository.findByGrupo(grupo);
    }
    */
}