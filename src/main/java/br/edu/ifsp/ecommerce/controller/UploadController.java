package br.edu.ifsp.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "http://localhost:3000")
public class UploadController {

    // Pasta onde as fotos ficarão salvas (na raiz do projeto)
    private static final String PASTA_UPLOAD = "uploads/";

    @PostMapping
    public ResponseEntity<String> uploadImagem(@RequestParam("file") MultipartFile file) {
        try {
            // 1. Cria a pasta se não existir
            Path pastaPath = Paths.get(PASTA_UPLOAD);
            if (!Files.exists(pastaPath)) {
                Files.createDirectories(pastaPath);
            }

            // 2. Gera um nome único para não substituir fotos iguais (ex: foto_1234.jpg)
            String nomeArquivo = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();

            // 3. Salva o arquivo na pasta
            Path caminhoArquivo = pastaPath.resolve(nomeArquivo);
            Files.copy(file.getInputStream(), caminhoArquivo, StandardCopyOption.REPLACE_EXISTING);

            // 4. Retorna a URL completa para o Frontend usar
            String urlFinal = "http://localhost:8080/imagens/" + nomeArquivo;
            return ResponseEntity.ok(urlFinal);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Erro ao salvar imagem: " + e.getMessage());
        }
    }
}