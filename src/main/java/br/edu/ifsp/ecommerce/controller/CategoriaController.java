package br.edu.ifsp.ecommerce.controller;

import br.edu.ifsp.ecommerce.domain.Categoria;
import br.edu.ifsp.ecommerce.repository.CategoriaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @GetMapping
    public List<Categoria> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Categoria salvar(@Valid @RequestBody Categoria categoria) {
        return repository.save(categoria);
    }
}