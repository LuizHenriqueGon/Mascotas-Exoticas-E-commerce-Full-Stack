package br.edu.ifsp.ecommerce.controller;

import br.edu.ifsp.ecommerce.domain.Usuario;
import br.edu.ifsp.ecommerce.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") // Permite conexão com o React
public class AuthController {

    @Autowired
    private UsuarioRepository repository;

    // 1. Endpoint de Login (Verifica email e senha)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario loginData) {
        // Busca o usuário no banco pelo email
        Usuario usuario = repository.findByEmail(loginData.getEmail()).orElse(null);

        // Verifica se o usuário existe e se a senha bate
        if (usuario != null && usuario.getSenha().equals(loginData.getSenha())) {
            return ResponseEntity.ok(usuario); // Retorna os dados (incluindo se é admin ou não)
        }

        return ResponseEntity.status(401).body("Email ou senha incorretos.");
    }

    // 2. Endpoint de Cadastro (MODIFICADO PARA MODO DE TESTE)
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) {
        // Verifica se o email já existe
        if (repository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Este email já está em uso!");
        }

        // --- AQUI ESTÁ O TRUQUE DA OPÇÃO B ---
        // Em vez de false, colocamos true.
        // Assim, quem se cadastrar agora JÁ NASCE ADMIN.
        usuario.setAdmin(true);
        // -------------------------------------

        Usuario salvo = repository.save(usuario);
        return ResponseEntity.ok(salvo);
    }
}