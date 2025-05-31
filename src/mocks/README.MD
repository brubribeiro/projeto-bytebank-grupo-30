# 🧪 Integração com Mockon.io - API Fake REST

Este projeto utiliza o [Mockon](https://mockon.io) para simular um backend RESTful de forma rápida e colaborativa durante o desenvolvimento.

---

## 📘 Documentação oficial

📎 [https://docs.mockon.io](https://docs.mockon.io)

---

## 🚀 Passo a passo para usar o Mockoon

### 1. Criar conta ou acessar o painel

- Acesse: [https://mockon.io](https://mockoon.com/docs/latest/server-configuration/cors/)
- Faça login com sua conta GitHub ou email

---

### 2. Criar um novo projeto API

- Clique em **“+ New API”**
- Dê um nome, como `bytebank-api`
- Selecione o tipo **REST**
- Clique em **Create API**

---

### 3. Importar dados de exemplo

1. Acesse a aba **Database** (ou “Data store”)
2. Clique em **“Import JSON”**
3. Cole o conteúdo do arquivo `mockon-bytebank-import.json` (já fornecido neste projeto)
4. Clique em **Save**

Isso criará endpoints como:

- `GET /account`
- `GET/POST/PUT/DELETE /transactions`
- `GET/POST/PUT/DELETE /users`

---

### 4. Obter a URL da sua API

- Vá na aba **Settings > Base URL**
- Exemplo de URL:
  ```
  https://mockon.io/api/YOUR_PROJECT_ID/v1/bytebank
  ```

---

### 5. Configurar o ambiente `.env`

No projeto, configure o arquivo `.env` com sua base URL do Mockon:

```env
API_BASE_URL=https://mockon.io/api
API_BASE_VERSION=/v1
API_NAMESPACE=/bytebank
```

> ✅ Os arquivos `environment.ts` e `environment.prod.ts` são gerados automaticamente com base nesse `.env`.

---

### 6. Gerar os arquivos de ambiente

Execute o script que gera os arquivos de ambiente a partir do `.env`:

```bash
npm run prestart
# ou
npm run prebuild
```

---

### 7. Consumir a API nos services

Exemplo de `BaseService` já configurado:

```ts
protected baseUrl = `${environment.apiBaseUrl}${environment.apiVersion}${environment.apiNamespace}`;
```

Exemplo de uso:

```ts
this.transactionService.findAll().subscribe((data) => {
  console.log(data); // dados simulados do Mockon
});
```

---

## ✅ Dica: Monitoramento em tempo real

Na interface do Mockon, você pode:

- Ver chamadas em tempo real
- Alterar respostas de endpoints sem recompilar o frontend
- Testar falhas e casos limite com facilidade
