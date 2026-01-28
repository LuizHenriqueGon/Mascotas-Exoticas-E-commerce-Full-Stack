package br.edu.ifsp.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceMascotasApplication {

    public static void main(String[] args) {
        // Este comando inicia toda a estrutura do Spring Boot e liga o servidor
        SpringApplication.run(EcommerceMascotasApplication.class, args);
    }
}