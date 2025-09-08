# Projeto Express Aula0809

Este projeto é um exemplo simples utilizando o framework Express para Node.js. Ele serve como base para aprender a criar APIs REST, testar endpoints e expandir funcionalidades.

## Como clonar e rodar o projeto

1. **Clone o repositório:**
   ```powershell
   git clone <URL_DO_REPOSITORIO>
   cd aula0809
   ```
2. **Instale as dependências:**
   ```powershell
   npm install
   ```
3. **Inicie o servidor:**
   ```powershell
   node index.js
   ```
   O servidor estará rodando normalmente na porta definida no código (ex: 3000).

## Testando endpoints com Insomnia

1. Baixe e instale o [Insomnia](https://insomnia.rest/download).
2. Abra o Insomnia e crie uma nova requisição do tipo GET, POST, PUT ou DELETE conforme o endpoint desejado.
3. Informe a URL do endpoint, por exemplo:
   ```
   http://localhost:3000/seu-endpoint
   ```
4. Clique em "Send" para ver a resposta da API.

## Como criar novos endpoints

Abra o arquivo `index.js` e adicione um novo endpoint. Exemplo para exibir informações de um usuário:

```js
app.get('/usuario', (req, res) => {
  res.json({ nome: 'Renan', idade: 30 });
});
```

Você pode criar endpoints para qualquer informação que desejar, mudando o caminho (`/usuario`, `/produtos`, etc.) e o conteúdo retornado.

## Como fazer sua própria variação e subir para o GitHub

1. Faça alterações no código conforme desejar (adicionando endpoints, mudando respostas, etc).
2. Salve as alterações.
3. Inicialize um novo repositório (se ainda não tiver):
   ```powershell
   git init
   git add .
   git commit -m "Minha variação do projeto"
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin master
   ```

Pronto! Agora você tem sua própria versão do projeto publicada no GitHub.

## Dicas para expandir
- Crie endpoints que retornem listas, objetos ou mensagens personalizadas.
- Teste diferentes métodos HTTP (GET, POST, PUT, DELETE).
- Use o Insomnia para simular requisições e validar suas respostas.

---

Se tiver dúvidas, consulte a documentação do Express ou peça ajuda!
