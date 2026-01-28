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
    private ProdutoRepository repository;

    // 1. Listar todos os animais/produtos da vitrine
    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    // 2. Procurar um pet específico pelo ID
    public Produto buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado com o ID: " + id));
    }

    // 3. Cadastrar um novo animal (Salvaguarda a integridade do estoque inicial)
    public Produto salvar(Produto produto) {
        if (produto.getEstoque() == null) {
            produto.setEstoque(0); // Garante que o estoque não seja nulo
        }
        return repository.save(produto);
    }

    // 4. Atualizar dados de um animal (Preço, Descrição ou Estoque)
    public Produto atualizar(Long id, Produto dadosAtualizados) {
        Produto produtoExistente = buscarPorId(id);

        // Atualiza apenas os campos permitidos
        produtoExistente.setNome(dadosAtualizados.getNome());
        produtoExistente.setDescricao(dadosAtualizados.getDescricao());
        produtoExistente.setPreco(dadosAtualizados.getPreco());
        produtoExistente.setEstoque(dadosAtualizados.getEstoque());
        produtoExistente.setUrlImagem(dadosAtualizados.getUrlImagem());

        // Verifica se a categoria foi enviada para atualizar
        if (dadosAtualizados.getCategoria() != null) {
            produtoExistente.setCategoria(dadosAtualizados.getCategoria());
        }

        return repository.save(produtoExistente);
    }

    // 5. Remover um animal da loja
    public void excluir(Long id) {
        Produto produto = buscarPorId(id);
        repository.delete(produto);
    }

    // 6. Lógica de Negócio: Baixa de estoque ao vender
    public void reduzirEstoque(Long id, Integer quantidade) {
        Produto produto = buscarPorId(id);
        if (produto.getEstoque() < quantidade) {
            throw new RuntimeException("Estoque insuficiente para o animal: " + produto.getNome());
        }
        produto.setEstoque(produto.getEstoque() - quantidade);
        repository.save(produto);
    }
}