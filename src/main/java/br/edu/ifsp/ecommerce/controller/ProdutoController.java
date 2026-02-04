package br.edu.ifsp.ecommerce.controller;

import br.edu.ifsp.ecommerce.domain.Produto;
import br.edu.ifsp.ecommerce.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    // Listar todos
    @GetMapping
    public List<Produto> listar() {
        return repository.findAll();
    }

    // Buscar por ID (Usado na página de detalhes)
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(produto -> ResponseEntity.ok(produto))
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar novo
    @PostMapping
    public Produto salvar(@RequestBody Produto produto) {
        return repository.save(produto);
    }

    // --- NOVO: Atualizar existente ---
    @PutMapping
    public ResponseEntity<Produto> atualizar(@RequestBody Produto produto) {
        // Se não tiver ID, é erro
        if (produto.getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        // Salva por cima (atualiza)
        Produto atualizado = repository.save(produto);
        return ResponseEntity.ok(atualizado);
    }
    // ---------------------------------

    // Excluir
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}