#Página mobile do formulário


  A página index do projeto Sorteador de Lista foi criada para disponibilizar um formulário ao usuário do Sorteador para que aquele coloque seus dados na roleta a partir de um dispositivo móvel e assim participe com seu nome no sorteio 
  de nomes. Essa página abrirá para o usuário através de um QRCode gerado na página inicial do sorteio. As tecnologias utilizadas foram HTML5. CSS3 e JavaScript.
  
                                                                                                                  
##HTML da página Index




  Foi criada uma estrutura em HTML com um formulário para que o usuário inscreva seus dados (nome, equipe e supervisão) na lista que será sorteada. Nessa página, também serão exibidos os dados do proprietário da litas (empresa, departamento,
  data e turno de trabalho).



       
  A tag <head> funciona como um container onde colocamos as configurações do código e metadados. Fornece instruções e dados importantes para renderização e um bom funcionamento da página.
  Recebe metadados (dados sobre dados que fornecem contexto ou descrevem dados) para informar o browser como deve interpretar e exibir o conteúdo da página.
	Há um metadado que define o padrão que suporta caracteres especiais, emojis e acentos para quase todos os idiomas. E um metadado que define configurações de responsividade para dispositivos móveis, 
  fazendo com que a largura da página se ajuste ao tamanho da tela do dispositivo.
	Também há o carregamento do css do Boostrap de uma rede de distribuição de conteúdo (CDN). Utilizamos aqui o framework Boostrap versão 5.3.2.
	A tag <link rel href> carrega um arquivo css personalizado que complementa os estilos do Boostrap.

![inicio](https://github.com/user-attachments/assets/6c2439ac-705a-493d-9e55-b09047ad17ae)


Este código define um container que envolve toda a estrutura do cabeçalho onde deve constar os dados da empresa responsável pelo sorteio. Esses dados são dinâmicos, ou seja, eles serão provenientes do bando de dados.
Na parte do header o código indica o título da página principal, sendo que my-4 indica a margem(m) vertical(y) com tamanho 4, que em boostrap significa aproximadamente 16 pixels.
Ainda neste trecho os dados da empresa serão carregados do banco de dados após o carregamento da página. Enquanto não carrega o conteúdo do cabeçalho o spinner exibirá a mensagem de estado de carregamento.
No código há ainda um ID que facilita a identificação da divisão no javascript e no css, com margem inferior no tamanho 4 (bootstrap). O text-center deixa ainda o conteúdo da div centralizado.
Os atributos: “spinner” (classe do bootstrap) mostra uma animação de carregamento; o text-primary define o spinner como azul padrão do bootstrap. E ainda o “status” e o “span” propiciam acessibilidade para deficientes 
visuais já que o usuário poderá ouvir que o cabeçalho dinâmico está em carregamento.                	
Define ainda que a cor secundária será cinza e a margem será no topo no tamanho 2 ou 8  pixels.

![cabecalho](https://github.com/user-attachments/assets/40dc13fb-6791-45ad-b043-11d7a2051edd)

Nesta parte do código foi criado um formulário para preencher nome, equipe e supervisão, além de um botão de enviar e outro para limpar o que foi preenchido.
Esses dados coletados irão para o bando de dados para montar a lista de nomes a ser sorteada. Nesse sentido, cada vendedor do departamento irá colocar seu nome na lista através desse 
formulário que será aberto no dispositivo móvel através do QRCode gerado na página desktop.
O “form-container” é um container para o formulário com uma classe para estilização e organização do layout.
Já o “cadatstroForm” Essa tag define o formulário. E aqui foi usado um ID para facilitar a estilização.           
A classe mb-3 serve para espaçar os campos verticais e significa uma margin-botton (margem inferior) de tamanho 3. É uma classe de estilização do Boostrap.           
A tag label vincula um nome a um input (campo onde o usuário vai inserir os dados). Nessa label foi vinculado o ID do input para melhor manipulação da label.A classe form-label é do Boostrap e serve para estilizar a label.
O input cria um campo para preenchimento de dados do tipo texto, nesse caso. Ele é estilizado pela classe do Bootstrap com largura 100% e bordas estilizadas. Possui o identificador “nome” assim como na label. O placeholder 
adiciona um texto exemplo dentro do campo e o atributo “required” torna o preenchimento obrigatório para o envio do formulário.
Aqui cria-se o botão de enviar, sendo do tipo “submit” para enviar os dados ao banco de dados quando clicado. Ele foi padronizado pelo Bootstrap no padrão azul. Pode se adicionar mais estilos ao botão com a classe padrão “btn-custom”.

![formulario](https://github.com/user-attachments/assets/8cf2447e-b0f6-46cb-b28e-4168da9f8891)

O componente modal serve para mostrar mensagens (como uma janela flutuante), nesse caso vai exibir e mensagem “Dados enviados com sucesso!”. E devido ao “fade” essa janela vai desaparecer suavmente da tela.
Controla largura e posicionamento e é responsivo de forma automática
Aqui o modal fade vai fazer com que o pou up saia suavemente da tela. O ID identifica o componente para manipulação com javascript
O modal também se divide em 3 seções para organização do código: cabeçalho, body e footer.

![modal](https://github.com/user-attachments/assets/03c3e15b-a7ce-4e79-990a-5de8d4e47e23)


Este código é uma importação do JavaScript do Bootsrap por meio de rede de distribuição de conteúdo gratuita. Dessa forma, o código tem todos os componentes do Boostrap.

![script_bootstrap](https://github.com/user-attachments/assets/e6ef2408-1ef7-4e88-8a56-9dc37b2ab0f6)


Código de importação do arquivo formulario.js.

![script](https://github.com/user-attachments/assets/ef6cb7c3-f2cc-437f-8fa3-e4280714c927)


##CSS da página Index


                                                                                                  
Este é o arquivo CSS que define estilos para página index.html complementando os estilos do Bootstrap. 
Ele foi dividido em 7 blocos de estilos: cabeçalho; body; títulos e textos; formulário; alertas e mensagens e regras de responsividade.



O cabeçalho foi estilizado para ser cinza claro, com espaçamento interno em 20 pixels , cantos arredondados e uma sombra sutil, além da fonte ser da cor preta.
                                                                                                  
![css_cabecalho](https://github.com/user-attachments/assets/667148d9-af08-4469-8d08-4179dbe63ce9)


No body o espaçamento interno entre o conteúdo e sua borda é de 20 pixels e a cor de todoo body é cinza claro.

![css_body](https://github.com/user-attachments/assets/71cded6f-0850-47e4-b78a-b4ef5cb8fc4f)



Os títulos e textos são azul padrão do Boostratp e centralizados, com fonte Arial.
Já a parte do formulário tem o fundo branco , espaçamento interno de 20 pixes, os inputs têm bordas arredondadas e um pouco de sombreamento.

![css_titulo](https://github.com/user-attachments/assets/a52ab655-f9a3-46be-995a-de0ed60a7d73)


O formulário tem fundo branco, bordas arredondadas (inputs), espaçamento interno de 20 pixels, borda sutil e margin-botton( distancia entre o elemento e o próximo elemento abaixo dele) de 20 pixels.

![css_formulario](https://github.com/user-attachments/assets/02f6dbcf-b752-49f7-9eb9-48e72284651b)



Os botoẽs foram customizados de forma que utilizem todo o espaçamento e com distancia entre o elemento de cima de 15 pixels.


![css_btn](https://github.com/user-attachments/assets/6ae0cc74-a7be-4425-8785-9e8cfd5021c3)


##JavaScript da página Index



 Neste caso, o código dentro dessa função só é executado depois que todo o HTML da página tiver sido carregado, ou seja, todos os elementos DOM 
 (Document Object Model - Modelo de Objeto de Documento) estiverem devidamente disponíveis.

 ![JSDOM](https://github.com/user-attachments/assets/58a36c88-4322-4576-b2f4-7ce804505bf0)
 

 Foram criadas constantes de configuração em que usa-se um valor booleano (verdadeiro ou falso) para controlar  fluxo de execução, nesse caso a flag USE_API que vai puxar os dados ficitícios, de exemplo usados no código.
 E flag API_URL vai puxar os dados reais ou dados mockados (simulados) para apresentação, por meio de uma URL. 


![css_cabecalho](https://github.com/user-attachments/assets/cc88441c-a281-49f6-af0d-f2f900c39b54)



Aqui foi usada uma função assíncrona que vai carregar os dados do cabeçalho da página.

![JS_funcassinc](https://github.com/user-attachments/assets/587e6a92-3020-4c7b-a353-0dd351c26dc8)


Nesta parte do código serão exibidos os dados mockados quando a constante USE_API for falsa. 	Caso a constante USE_API for verdadeira, será feita uma requisição usando um método fetch().
Caso a resposta seja bem sucedida os dados serão apresentados. A estrutura try tenta executar operações que podem falhar e a estrutura  catch captura e trata qualquer erro identificado. 
Os dados serão convertidos em JSON (JavaScript Object Notation), que um formato mais leve de troca de dados para facilitar a comunicação entre sistemas.

![JS_mock](https://github.com/user-attachments/assets/bd9c1c9e-8d59-4246-b365-d56147f67bec)


Esta parte do código é responsável por transformar os dados em conteúdo HTML visível na página. Dessa forma, foi feita a formatação dos dados, 
convertendo a data do formato original para o formato brasileiro. Utiliza titulo, parágrafose destaques em negrito:


![JS_renderizar](https://github.com/user-attachments/assets/84b4a6e5-4521-41e7-90ae-780d42409097)


Este trecho de código valida o formulário HTML e exibe mensagens de sucesso ou erro através de um pop up. O formulário recebe uma referência com o ID cadastroForm. Coleta dados do formulário, com o formato de data no padrão brasileiro. 
E o .trim() remove espaços em branco no início e no fim. Valida também os dados através da função validaForm() para verificar se todos os campos foram preenchidos, sendo que se estiver válido mostra um pop up de sucesso 
e limpa o formulário e se for inaválido mostra um pop up de erro. Aqui também será feito o redicioramento para paǵina seguinte, no caso espera.html, após preenchidos os dados com sucesso e pop up aparecer:


![JS_validar](https://github.com/user-attachments/assets/7b21a84b-9c61-4acb-80b9-ec35b6dabcc6)



Neste trecho de código serva para verificar se todos os campos do formulário foram preenchidos. Retorna "verdadeiro" para todos os campos preenchidos e "falso" caso não estejam preenchidos, mostrando uma mensagem de erro.


![JS_funcauxiliar](https://github.com/user-attachments/assets/e17b745a-d0eb-49d4-905a-68166845da87)


Este código implementa um alternador de tema (claro ou escuro).


![JS_tema](https://github.com/user-attachments/assets/d52eb2c8-5580-41cb-a0c3-eb042b5d9fca)


O seguinte trecho faz o processo de inicialização da página, chamando a função assim que conteúdo da página estiver totalmente carregado.

![JS_iniciar](https://github.com/user-attachments/assets/3467cb79-8079-4215-9831-7ed26485c28f)












