package br.edu.ifsp.ecommerce.controller;

import br.edu.ifsp.ecommerce.domain.Produto;
import br.edu.ifsp.ecommerce.service.ProdutoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
// ESSA LINHA É O QUE RESOLVE O ERRO DE REDE/CORS:
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    // 1. Listar todos os animais (GET http://localhost:8080/produtos)
    @GetMapping
    public List<Produto> listar() {
        return service.listarTodos();
    }

    // 2. Buscar um animal específico pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscar(@PathVariable Long id) {
        Produto produto = service.buscarPorId(id);
        return ResponseEntity.ok(produto);
    }

    // 3. Cadastrar novo animal (POST http://localhost:8080/produtos)
    @PostMapping
    public Produto cadastrar(@Valid @RequestBody Produto produto) {
        return service.salvar(produto);
    }

    // 4. Atualizar um animal existente (PUT http://localhost:8080/produtos/{id})
    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @Valid @RequestBody Produto produto) {
        Produto atualizado = service.atualizar(id, produto);
        return ResponseEntity.ok(atualizado);
    }

    // 5. Remover um animal (DELETE http://localhost:8080/produtos/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }
}