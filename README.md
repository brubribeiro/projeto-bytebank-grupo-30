# Projeto ByteBank - Grupo 30

Este projeto é parte da formação em Engenharia Front-End da FIAP + Alura, utilizando Angular 17 com Angular Material, CDK e renderização SSR. O objetivo da aplicação é simular operações bancárias em um ambiente educativo, explorando boas práticas de desenvolvimento front-end moderno.

---

## 🧰 Tecnologias Utilizadas

- [Angular 17](https://angular.dev)
- [Angular Material + CDK](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [SSR com Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Karma + Jasmine (testes unitários)](https://karma-runner.github.io/latest/index.html), [Jasmine](https://jasmine.github.io/)

---

## 🚀 Como Executar o Projeto

### Requisitos

- [Node.js v18+](https://nodejs.org/en/download/)

- [Angular CLI v17+](https://angular.dev/tools/cli)
  Instale globalmente com:

  ```bash
    npm install -g @angular/cli
  ```

### Instalação

```bash
  npm install
```

### Rodar em modo desenvolvimento consumindo mockon

```bash
  npm run start
```

### Rodar em modo desenvolvimento consumindo db.json para simular CRUD

```bash
  npm run dev:api
```

### Build de produção

```bash
  npm run start
```

### Testes

```bash
  npm run test
```

### Renderização SSR

```bash
  npm run serve:ssr:projeto-bytebank-grupo-30
```

### 📁 Estrutura do Projeto

src/
├── app/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── app.module.ts
├── assets/
├── environments/
└── main.ts

📊 Diagramas do Projeto
Link para os diagramas GitDiagram:
[gitdiagram](https://gitdiagram.com/brubribeiro/projeto-bytebank-grupo-30)

💡 Features Futuras
...

### Figma

- [Figma | Fluxo](https://www.figma.com/design/195jMSq979FiewTWRE0Ltl/Tech-Challenge?node-id=1-166&p=f)  
  Visualização do fluxo de navegação da aplicação, mostrando as principais telas, caminhos do usuário e interações previstas no projeto.

- [Figma | Design System](https://www.figma.com/design/195jMSq979FiewTWRE0Ltl/Tech-Challenge?node-id=0-1&p=f)  
  Biblioteca de componentes visuais, cores, tipografia e padrões de interface utilizados para garantir consistência no design da aplicação.
  Implementado em
  [src/styles](src/styles)

### Mocks com Mockoon

Leia a documentação no link abaixo:
[Mockoon](./src/mocks/README.MD)

### Demo

Capturas de tela e videos do funcionamento do fluxo
[Demo | showcase](showcase/index.md)

### Mobile showcase

![alt text](showcase/release_1.0.0/images/mobile_show_case.gif)

👥 Integrantes do Grupo 30

> Alexsander de Almeida Perusso  
> alexperusso@gmail.com  
> RM364149

---

> Anderson Santos De Lima  
> andersonlimahw@gmail.com  
> RM363575

---

> Bruna Barreto Ribeiro  
> bru.barretoribeiro@gmail.com  
> RM362095

---

> Herbert Rezende Ferreira  
> hrezendeferreira@gmail.com  
> RM363976

---

> Thyago do Nascimento Pereira  
> thyagopereira41@gmail.com
> RM362540
