 # App Meu Time⚽

 ### Sobre📖

<p>Esse projeto realiza consultas na <a target="_blank" href="https://www.api-football.com/documentation-v3">API-FOOTBALL</u></a>
trazendo informações sobre ligas e copas ao redor do mundo.
</p>



<p><strong> ⚠️ ATENÇÃO‼:</strong>  o endpoint que está sendo utilizado para realizar as consultas na API é o a do <strong>RAPIDAPI</strong> para a key ser válida deverá ter sido gerar por <a href="https://rapidapi.com/api-sports/api/api-football/pricing">aqui.</a></p>

```url
https://api-football-v1.p.rapidapi.com/v3/
```
---

### Fluxograma feito no FigmaJam💭

<p>Este fluxograma foi criado com a finalidade de demonstrar a regra de negócio  </p>


* <a href="https://www.figma.com/file/8rDfrB89GmxKBT2jgtZ67F/Flowchart-app-Meu-Time?type=whiteboard&node-id=0%3A1&t=YWsfFQBBk4x9u2Nt-1">Link</a>
![image](https://github.com/Nils0n/meu-time-app/assets/18104883/5573e355-10d2-4d3f-bc17-d0e001696b03)

---

### Protótipo no Figma🎨

<p>Este protótipo foi criado com a finalidade de me basear no que deveria fazer e aonde iria cada componente.  </p>

* <a href="https://www.figma.com/file/PJujsxW8NnJnO5ExHGS4RJ/App-meu-time?type=design&node-id=0%3A1&t=M5W5veE8kz4ugPz6-1">Link</a>

---


## ⚙ Stacks utilizadas

<img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

<img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />

<img width="150px" height="40px" style="background:#000" src="https://styled-components.com/nav-logo.png" />



### 📚Bibliotecas utilizadas

 * <a href="https://axios-http.com/docs/intro">Axios 🔁 </a>
 * <a href="https://recharts.org/en-US/api">Recharts 📊</a>
 * <a href="https://react-select.com/home">React Select 🔎</a>
 * <a href="https://react-icons.github.io/react-icons/">React Icons 😁</a>
 * <a href="https://fkhadra.github.io/react-toastify/introduction">React toastify✅</a>

---

### ▶️ Como rodar o projeto

<p>Para rodar o projeto você precisar ter o <a href="https://nodejs.org/en"><strong> NodeJs</strong></a> instalado.</p>

<p>O projeto foi criado com gerenciador de pacotes <strong> yarn</strong> rode o script abaixo ou utilize o </strong>npm </p>

```bash
npm install --global yarn
```

Clone o projeto


```bash
  git clone
```

Entre no diretório do projeto

```bash
  cd meu-time-app
```

Copie e renomei o arquivo .env-example para .env.local

```bash
cp .env-example .env.local ou para windows: copy .env-example .env.local
```

Instale as dependências

```bash
 yarn  ou npm install
```

Inicie o servidor

```bash
  yarn dev ou npm run dev
```

---


#### Rodando com docker  <img height="40px" width="50x" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
####

Certifique-se de estar na pasta raíz do projeto onde se encontra o arquivo <strong>Dockerfile</strong>

```bash
  cd meu-time-app
```

Crie uma imagem através do Dockerfile, substitua "nome_imagem" pelo nome que desejar

```bash
docker build -t nome_imagem .
```

Agora levante um container através da imagem criada, lembre de utilizar o mesmo "nome_imagem" que você criou e sete a porta como 5173, porta que está configurada no projeto.

```bash
docker run -p 5173:5173  nome_imagem
```
Acesse a url <a href="http://localhost:5173/">http://localhost:5173/</a> e desfrute da aplicação ❤️

---

## Screenshots

![image](https://github.com/Nils0n/meu-time-app/assets/18104883/07009e52-ea46-487c-af3a-f0466d24cf52)
![image](https://github.com/Nils0n/meu-time-app/assets/18104883/19f8175d-9fc9-4d10-9524-8644968bc7fa)
![image](https://github.com/Nils0n/meu-time-app/assets/18104883/c17580bc-7b08-4a31-8e3f-db605a44edb2)
![image](https://github.com/Nils0n/meu-time-app/assets/18104883/3ac02f20-1d10-4981-85b2-9a36331492ff)

