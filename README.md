# 🦎 Mascotas Exóticas - E-commerce Full Stack

<p align="center">
  <strong>Uma plataforma completa para a venda de animais exóticos, integrando um ecossistema robusto com Backend em Java e Frontend dinâmico em React.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.2.2-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot 3.2.2">
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19.2.4">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Status-Completo-green?style=for-the-badge" alt="Status: Completo.">
</p>

<p align="center">
  <a href="https://youtu.be/feL6nFwgk0s" title="Clique para assistir à apresentação final">
    <img src="https://img.shields.io/badge/Apresentação%20Final-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Assista à Versão Final">
  </a>
</p>

-----

## 📖 Sobre o Projeto

O **Mascotas Exóticas** é uma evolução académica desenvolvida no **IFSP - Câmpus Bragança Paulista**. Diferente de projetos anteriores baseados em PHP (como o Animalist), esta aplicação adota uma arquitetura de microsserviços desacoplada, utilizando **Java 21** com **Spring Boot** para uma API de alta performance e **React 19** para uma interface de utilizador reativa e moderna.

-----

## ✨ Funcionalidades

O sistema foi projetado para oferecer uma experiência fluida tanto para clientes quanto para administradores.

### Para Clientes:
- 🖼️ **Vitrine Dinâmica:** Listagem de animais exóticos consumindo a API em tempo real.
- 🔍 **Filtro por Categorias:** Navegação reativa entre diferentes espécies.
- 🛒 **Carrinho de Compras:** Adição e remoção de itens com cálculo de total automático.
- 📱 **Design Responsivo:** Interface intuitiva focada em UX (User Experience).

### Para Administradores:
- 🛠️ **Painel Administrativo:** Dashboard completo (CRUD) para gestão de stock, preços e novos produtos.
- 📈 **Gestão de Stock:** Lógica de negócio integrada para controlo de disponibilidade.

-----

## 🚀 O que foi Melhorado?

Este projeto representa um salto de qualidade técnica e maturidade:

* **Arquitetura Moderna:** Transição de um modelo monolítico para uma separação clara entre **Frontend (SPA)** e **Backend (REST API)**.
* **Segurança e Tipagem:** O uso de Java 21 e Spring Boot 3.2.2 traz uma robustez e segurança de tipos superior.
* **Documentação Profissional:** Integração do **Swagger (OpenAPI 3)** para documentação automática dos endpoints.

-----

## 🧠 Dificuldades Enfrentadas

Durante o desenvolvimento, superámos desafios cruciais de integração:
1.  **Configuração de CORS:** Ajustar a comunicação segura entre o React (porta 3000) e o Spring Boot (porta 8080).
2.  **Mapeamento Objeto-Relacional:** Configurar o Hibernate para gerir corretamente as relações entre Categorias e Produtos.
3.  **Ambiente de Dados:** Padronização do MySQL na porta 3307 para compatibilidade de ambiente.

-----

## 🔐 Credenciais de Acesso

Utilize as seguintes contas para testar os diferentes níveis de permissão:

| Perfil | E-mail | Senha |
| :--- | :--- | :--- |
| **Administrador** | `admin@email.com` | `admin123` |
| **Utilizador Comum** | `henrique@email.com` | `senha123` |

-----

## 🛠️ Tecnologias Utilizadas

### **Backend**
- **Linguagem:** Java 21
- **Framework:** Spring Boot 3.2.2
- **Persistência:** Spring Data JPA / Hibernate
- **Base de Dados:** MySQL
- **Documentação:** SpringDoc OpenAPI (Swagger) 2.3.0
- **Utilitários:** Lombok

### **Frontend**
- **Biblioteca:** React 19.2.4
- **Roteamento:** React Router Dom 7.13.0
- **Integração API:** Axios 1.13.4
- **Estilização:** CSS-in-JS (modular)

-----

## ⚙️ Começando

### 1. Base de Dados
Crie o banco de dados no seu MySQL:
```sql
CREATE DATABASE db_mascotas_exoticas;

```

### 2. Configuração do Backend (Spring Boot)

Certifique-se de que as credenciais no ficheiro `src/main/resources/application.properties` estão corretas:

* **URL:** `jdbc:mysql://localhost:3307/db_mascotas_exoticas`
* **User:** `root`
* **Password:** `luuizhen`

Importe o projeto na sua IDE e execute a classe: `br.edu.ifsp.ecommerce.EcommerceMascotasApplication`.

* A API estará ativa em: `http://localhost:8080`.
* Aceda à documentação Swagger em: `http://localhost:8080/swagger-ui.html`.

### 3. Configuração do Frontend (React)

Navegue até a pasta do frontend e inicie o servidor:

```bash
cd frontend
npm install
npm start

```

---

## 👨‍💻 Autor

Desenvolvido por **Luiz Henrique**
*Estudante de Análise e Desenvolvimento de Sistemas*
**IFSP - Câmpus Bragança Paulista**

---

<p align="center">
<img width="1898" height="868" alt="Preview" src="https://github.com/user-attachments/assets/28fd5a1a-4353-418e-8720-fb4cf50b863f" />
</p>

© 2026 Mascotas Exóticas. Todos os direitos reservados.

