package br.edu.ifsp.ecommerce.controller;

import br.edu.ifsp.ecommerce.domain.Pedido;
import br.edu.ifsp.ecommerce.domain.Produto;
import br.edu.ifsp.ecommerce.domain.Usuario;
import br.edu.ifsp.ecommerce.repository.PedidoRepository;
import br.edu.ifsp.ecommerce.repository.ProdutoRepository;
import br.edu.ifsp.ecommerce.repository.UsuarioRepository; // Novo import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin(origins = "http://localhost:3000")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository; // Injetamos o repositório de usuários

    @PostMapping
    @Transactional
    public ResponseEntity<?> realizarPedido(@RequestBody Pedido pedido) {

        // --- VÍNCULO DO USUÁRIO ---
        // Se o frontend mandar o usuario com ID, buscamos no banco para garantir
        if (pedido.getUsuario() != null && pedido.getUsuario().getId() != null) {
            Usuario usuarioReal = usuarioRepository.findById(pedido.getUsuario().getId()).orElse(null);
            pedido.setUsuario(usuarioReal);
        }
        // --------------------------

        List<Produto> produtosAtualizados = new ArrayList<>();

        // Validação de Estoque (Mantida)
        for (Produto item : pedido.getProdutos()) {
            Produto produtoNoBanco = produtoRepository.findById(item.getId())
                    .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

            if (produtoNoBanco.getEstoque() > 0) {
                produtoNoBanco.setEstoque(produtoNoBanco.getEstoque() - 1);
                produtosAtualizados.add(produtoNoBanco);
            } else {
                return ResponseEntity.badRequest().body("Erro: O produto '" + produtoNoBanco.getNome() + "' está esgotado!");
            }
        }

        produtoRepository.saveAll(produtosAtualizados);
        Pedido novoPedido = pedidoRepository.save(pedido);
        return ResponseEntity.ok(novoPedido);
    }

    // Histórico Geral (Só Admin deve ver, mas deixamos aberto por enquanto)
    @GetMapping
    public List<Pedido> listarHistoricoGeral() {
        return pedidoRepository.findAll();
    }

    // --- NOVO: Endpoint para buscar pedidos de um usuário específico ---
    @GetMapping("/meus-pedidos/{usuarioId}")
    public ResponseEntity<List<Pedido>> listarMeusPedidos(@PathVariable Long usuarioId) {
        Usuario u = new Usuario();
        u.setId(usuarioId);

        // O Spring Data JPA faz a busca automática usando o objeto Usuario
        List<Pedido> pedidos = pedidoRepository.findByUsuario(u);
        return ResponseEntity.ok(pedidos);
    }
}