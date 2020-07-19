# challenge-warren
Este repositório contém a solução para o desafio da Warren.

## TOC

- [Desafio](#Desafio)
- [Observações](#Observações)
- [Desenho da arquitetura](#Desenho-da-arquitetura)
- [Diagrama de classes](#Modelagem-de-dados)
- [Testes e cobertura](#Testes-e-cobertura)
- [Instalação](#Instalação)
- [Configuração](#Configuração)

## Desafio

Implementar um Web Scraper que receba o login e senha de uma conta de um banco qualquer e mostre para o usuário todas as informações que conseguir coletar.

#### Como

Usando NodeJS, criar um app de uma única pagina usando Express. A pagina precisa conter apenas campo de login,senha e botão de enviar. Concluída a consulta, o app deve retornar as informações na tela do usuário.

Não precisa ser nada mega complexo e tão pouco se preocupar com design e layout.
Podendo ser com qualquer banco, Itau, Nubank, etc. Nos links úteis existem alguns exemplos em outras linguagens.

#### O que será avaliado

- Capacidade de “se virar” e “Get shit done”;
- Lógica, organização e clareza de código;
- ReadMe;
- Arquitetura da solução;
- Se conseguir extrair dados interessantes, melhor;

#### Interessante, mas não fundamental

- Guardar os dados em um banco MongoDB usando Mongoose.
- Preocupação com segurança (apenas um teste);

#### Entrega

- Mandar o link do repositório com o código.

#### Links úteis:

Wikipedia https://en.wikipedia.org/wiki/Web_scraping

Python https://github.com/AndreCGusmao/bankscraper.git

Ruby https://github.com/buccolo/itau_bot/tree/master/lib

#### Quem usa isso?

Guia Bolso https://www.guiabolso.com.br/

Meu Dinheiro https://www.meudinheiroweb.com.br/

## Observações

-  

## Desenho da arquitetura

![Architecture design](https://iili.io/dB2KrB.jpg)

## Diagrama de classes

![Class diagram]()

## Testes e cobertura

A API possui testes de unidade e integração que cobrem **** do código. Isto pode ser convertido em uma confiabilidade de que há apenas **** de chances de liberação de bugs, caso ocorressem novas manutenções nesse desafio.

![Test coverage]()