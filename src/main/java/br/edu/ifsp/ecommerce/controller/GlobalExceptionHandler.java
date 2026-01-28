package br.edu.ifsp.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class) // Captura qualquer erro
    public ResponseEntity<String> handleErrors(Exception ex) {
        return ResponseEntity.status(500).body("Erro interno: " + ex.getMessage());
    }
}