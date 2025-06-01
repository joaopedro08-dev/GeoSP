# GeoSP
<div align="left">
  <img src="https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white" alt="Ionic">
  <img src="https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white" alt="Google Gemini">
</div>

## Sobre o projeto
O GeoSP é um aplicativo de turismo simples e intuitivo, criado para explorar o melhor da cidade de São Paulo, a vibrante capital do estado. Este foi meu primeiro projeto utilizando o template "tabs", um dos mais populares para aplicativos Android e iOS, logo após dominar o template "blank" no Ionic. Além disso, o GeoSP marcou meu primeiro mergulho no uso de inteligência artificial, integrando o Gemini de forma simples, mas empolgante. Outro destaque foi a implementação do Vlibras, uma ferramenta essencial de acessibilidade para pessoas com deficiência, desenvolvida pelo governo federal Brasileiro.

## Funcionalidades
O aplicativo é organizado em cinco abas práticas:

1. **Restaurantes**: Descubra os melhores pontos gastronômicos de São Paulo, com integração ao Google Maps para facilitar sua visita.
2. **Viagens**: Explore os principais destinos turísticos da cidade, também com acesso ao Google Maps.
3. **Aventuras**: Encontre os melhores locais para aventuras e atividades ao ar livre, com navegação direta pelo Google Maps.
4. **Home**: Conheça mais sobre o aplicativo e suas funcionalidades em uma descrição clara e informativa.
5. **Chatbot**: Interaja com um chatbot simples, potencializado pela IA do Gemini, para tirar dúvidas e receber dicas.

## Tecnologias utilizadas
- **Linguagens**: HTML, CSS (Sass), TypeScript
- **Frameworks**: Ionic, Angular
- **Outras ferramentas**: API do Gemini, Google Maps, Google Fonts 

## Estrutura do Projeto
O projeto GeoSP, desenvolvido com Ionic e Angular, gera diversos arquivos. Para manter tudo organizado, a estrutura foi dividida da seguinte forma:

### Pastas
- `/android`: Pasta gerada pelo Capacitor, contendo os arquivos específicos para o projeto Android.
- `/ios`: Pasta gerada pelo Capacitor, contendo os arquivos específicos para o projeto IOS.
- `/resources`: Armazena os ícones do aplicativo e, opcionalmente, a tela de splash screen.
- `/src`: O coração do projeto, onde ficam o arquivo raiz `index.html`, o arquivo de estilos `global.scss` e as subpastas `app`, `assets` e `environments` (onde está configurada a API).
- `/www`: Pasta que recebe automaticamente os dados compilados ao sincronizar ou copiar do navegador para o projeto Android. Não requer alterações manuais.

### Arquivos
- `capacitor.config.ts`: Arquivo onde se define o nome do aplicativo e outras configurações para gerar o projeto Android e IOS.
- `angular.json`: No momento, não exige alterações, mas pode ser usado para melhorias futuras no projeto.
- `tsconfig.json`: Similar ao `angular.json`, não precisa de mudanças, exceto em casos específicos ou urgentes.
---

## Pré-requisitos
Para instalar e executar o GeoSP no seu dispositivo ou configurar o ambiente de desenvolvimento, você precisa dos seguintes requisitos:

## Pré-requisitos
Para instalar e executar o GeoSP no seu dispositivo ou configurar o ambiente de desenvolvimento, você precisa dos seguintes requisitos:

- [**Android Studio**](https://developer.android.com/studio): IDE utilizada para gerar o arquivo `.apk` para dispositivos Android.
- [**Xcode**](https://developer.apple.com/xcode/): IDE necessária para gerar o arquivo `.ipa` para dispositivos iOS.
- [**CocoaPods**](https://cocoapods.org/): Ferramenta essencial para gerenciar dependências no desenvolvimento iOS. Instale com:  
  ```bash
  sudo gem install cocoapods
- [**Visual Studio Code**](https://code.visualstudio.com/): Editor de código recomendado para trabalhar com HTML, CSS (Sass) e TypeScript..
- [**Node.js**](https://nodejs.org/): Necessário para usar o ``npm``, gerenciador de pacotes. Recomenda-se a versão LTS.
- [**Ionic CLI**](https://ionicframework.com/docs/cli): Necessário para desenvolver e compilar o projeto Ionic. Instale-o globalmente com o comando:  
  ```bash
  npm install -g @ionic/cli
---
## Modo de Instalação

### Aplicativo
Siga os passos abaixo para instalar o GeoSP no seu dispositivo Android:

1. **Baixe o APK**: Acesse a seção de releases no GitHub e faça o download do arquivo `geosp.apk`.  
   <a href="https://github.com/joaopedro08-dev/GeoSP/releases/tag/v1.0">Clique aqui</a>

>**Dica**: Certifique-se de que o dispositivo está conectado à internet para aproveitar ao máximo as funcionalidades, como navegação no Google Maps e interação com o chatbot.
---

## Desenvolvimento do Projeto
Se você deseja trabalhar no desenvolvimento do projeto GeoSP, siga as instruções abaixo para configurar e executar o ambiente localmente.

1. Baixar o projeto no github
2. Abrir no Visual Studio Code com pasta do projeto já instalado
3. **Inicie o servidor local:** No Visual Studio Code, abra o terminal (atalho Ctrl + Shift + P, digite "Terminal" e selecione "New Terminal" ou clique em "Terminal" no menu superior) e execute o comando abaixo para visualizar o projeto no navegador:
   ```bash
   ionic serve
4. **Resolução de problemas (opcional):** Caso o projeto não funcione, instale as dependências necessárias com os seguintes comandos:
   ```bash
   npm install
   npm install @google/generative-ai
   npm install @capacitor/assets --save-dev
---

### Desenvolvimento para Android
Se você deseja trabalhar no desenvolvimento web e gerar o aplicativo apenas para **Android**, siga os passos abaixo:

1. **Sincronize os dados:** Para copiar os arquivos do projeto web para a pasta `android` use:
   ```bash
   ionic capacitor copy android
2. **Compile o projeto:** Para gerar um novo build do projeto **Android** (ou recriar a pasta ``android`` do zero), execute:
   ```bash
   ionic capacitor build android
3. **Gere ícones e splash screens (Opcional):** Coloque os arquivos de ícone (recomendado: 1024x1024px) e splash screen (recomendado: 2732x2732px) na pasta ``resources``. Em seguida, execute o comando abaixo após o ``build`` anterior:
   ```bash
   npx capacitor-assets generate
4. **Abra no Android Studio:** Após o **build**, o **Android Studio** será aberto automaticamente, e um aviso para iniciar o aplicativo criado pelo **Capacitor** pode aparecer no canto direito.
5. **Gere o APK:** No **Android Studio**, clique no menu superior em **Build > Build Bundle(s) / APK(s) > Build APK(s)**. Após a geração, clique em **Locate** para encontrar o arquivo ``app-debug.apk`` na pasta de saída.
6. **Instale no dispositivo:** Conecte um dispositivo **Android** ao computador via USB, transfira o arquivo ``app-debug.apk`` para o dispositivo e instale-o. Certifique-se de que a opção "Instalar de fontes desconhecidas" está ativada nas configurações do dispositivo.
> **Dica:** Para uma melhor experiência, verifique se todas as ferramentas (Android Studio, Node.js, Ionic CLI e VSC) estão instaladas e configuradas corretamente antes de iniciar.
---
### Desenvolvimento para iOS
Se você deseja trabalhar no desenvolvimento web e gerar o aplicativo apenas para **iOS**, siga os passos abaixo:

1. **Sincronize os dados:** Para copiar os arquivos do projeto web para a pasta `ios` use:
   ```bash
   ionic capacitor copy ios
2. **Compile o projeto:** Para gerar um novo build do projeto **iOS** (ou recriar a pasta ``ios`` do zero), execute:
   ```bash
   ionic capacitor build ios
3. **Gere ícones e splash screens (Opcional):** Coloque os arquivos de ícone (recomendado: 1024x1024px) e splash screen (recomendado: 2732x2732px) na pasta ``resources``. Em seguida, execute o comando abaixo após o ``build`` anterior:
   ```bash
   npx capacitor-assets generate
4. **Abra no Xcode:** Após o **build**, o **Xcode** será aberto automaticamente. Certifique-se de estar logado em uma conta do **Apple Developer Program** nas configurações do **Xcode** para gerar o arquivo ``.ipa``.
5. **Gere o arquivo .ipa:** No **Xcode**, clique em **Product > Archive** no menu superior. Isso criará um arquivo de **build** para o aplicativo. Siga as instruções na tela para assinar o aplicativo com um certificado válido.
6. **Exporte o arquivo:** Após o arquivamento, a janela de "**Organizer**" será aberta automaticamente. Selecione o arquivo gerado, clique em **Distribute App**, escolha a opção desejada (como "**Ad Hoc**" para testes em dispositivos) e exporte o arquivo ``.ipa.``
7. **Instale no dispositivo:** Conecte um dispositivo **iOS** ao Mac via USB. Use o **Xcode** ou ferramentas como o **Apple Configurator** para transferir e instalar o arquivo ``.ipa`` no dispositivo.
   > **Nota:** A opção "Instalar de fontes desconhecidas" não é necessária no iOS, mas o dispositivo deve estar registrado na conta do Apple Developer associada ao certificado usado no **build**.
> **Dica:** Certifique-se de que todas as ferramentas (Xcode, CocoaPods, Node.js, Ionic CLI, Visual Studio Code) estão instaladas e configuradas corretamente antes de iniciar. Para o iOS, o CocoaPods deve estar instalado com o comando ``sudo gem install cocoapods`` no terminal do Mac.
---
## 🧑‍💻 Author

**João Pedro Dala Dea Mello**
- GitHub: [github.com/joaopedro08-dev](https://github.com/joaopedro08-dev)  
- Email: joaopedrodaladeamello098@gmail.com