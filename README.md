# 🦎 Mascotas Exóticas - E-commerce Full Stack

Este é um projeto de e-commerce completo para a venda de animais exóticos, integrando um ecossistema robusto com **Backend em Java/Spring Boot** e um **Frontend dinâmico em React**. A aplicação foi desenvolvida seguindo as melhores práticas de arquitetura em camadas e design de software.

---

## 🚀 Funcionalidades

### **Frontend (Experiência do Utilizador)**
* **Vitrine Dinâmica:** Listagem de animais exóticos consumindo a API em tempo real.
* **Filtro por Categorias:** Navegação reativa entre Répteis, Anfíbios, Aves e Aracnídeos.
* **Carrinho de Compras:** Sistema funcional de adição e remoção de itens com cálculo de total automático.
* **Painel Administrativo:** Dashboard completo (CRUD) para gestão de stock, preços e novos produtos.
* **Design Responsivo:** Interface intuitiva focada em UX (User Experience).

### **Backend (API RESTful)**
* **Arquitetura em Camadas:** Organização baseada no padrão Controller-Service-Repository.
* **Gestão de Stock:** Lógica de negócio integrada para controle de disponibilidade.
* **Documentação Automática:** API documentada de forma interativa com Swagger/OpenAPI.
* **Segurança e CORS:** Configuração para comunicação segura entre o React (Porta 3000) e a API (Porta 8080).

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
* **React.js** (Hooks e Gestão de Estado)
* **Axios** (Integração com a API)
* **React Router Dom** (Navegação SPA)
* **CSS-in-JS** (Estilização modular)

### **Backend**
* **Java 21**
* **Spring Boot 3.2**
* **Spring Data JPA** (Persistência de dados)
* **Hibernate** (ORM)
* **MySQL** (Base de dados relacional)
* **SpringDoc OpenAPI** (Swagger)

---

## 📦 Como Executar o Projeto

### 1. Pré-requisitos
* Java JDK 21 ou superior.
* Node.js (v18+).
* MySQL Server (Configurado na porta 3307).

### 2. Configuração da Base de Dados
No MySQL Workbench ou terminal, crie a base de dados:
```sql
CREATE DATABASE db_mascotas_exoticas;
```

*Nota: Verifique as credenciais em `src/main/resources/application.properties`.*

### 3. Executar o Backend (Spring Boot)

Importe o projeto na sua IDE (IntelliJ IDEA recomendada) e execute a classe:
`br.edu.ifsp.ecommerce.EcommerceMascotasApplication`

A API estará ativa em: `http://localhost:8080`
Documentação Swagger: `http://localhost:8080/swagger-ui.html`

### 4. Executar o Frontend (React)

Navegue até a pasta do frontend e inicie o servidor de desenvolvimento:

```bash
cd frontend
npm install
npm start

```

O site abrirá automaticamente em: `http://localhost:3000`

---
<img width="1898" height="868" alt="Captura de tela 2026-01-28 122752" src="https://github.com/user-attachments/assets/28fd5a1a-4353-418e-8720-fb4cf50b863f" />

---

## 👨‍💻 Autor

Desenvolvido por **Luiz Henrique**
*Estudante de Análise e Desenvolvimento de Sistemas*
**IFSP - Câmpus Bragança Paulista**

---

© 2026 Mascotas Exóticas. Todos os direitos reservados.



