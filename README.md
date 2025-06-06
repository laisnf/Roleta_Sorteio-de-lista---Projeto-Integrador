#Páginas mobile 


					#Página Index


A página index.html faz parte do projeto “Sorteador de lista”. É a primeira página a ser exibida quando o acesso for em dispositivos móveis. Esse acesso ocorrerá por meio do escaneamento do QRCode na página desktop do proprietário da lista a ser sorteada.    
Dessa forma, acessando por esse código de barras o vendedor insere seus dados na lista que será sorteada através do formulário. Será necessário que adicione nome, equipe e supervisão e ao clicar em “enviar” esses dados serão inseridos na lista e a página será direcionada à página seguinte: espera.html. Caso clique em “Apagar”, os dados serão apagados do formulário. A página vai apresentar também um cabeçalho onde vão constar os dados: empresa, empreendimento/departamento, data e período. Esses dados serão inseridos de forma automática pela API do backend. Nessa página foram usadas as tecnologias Bootstrap 5.3.2, HTML5, CSS3 e JavaScript.
Para a construção do cabeçalho foi usado divisão (containers) e classe “spinner” de forma que enquanto o backend não traz os dados o sistema mostra que está em carregamento. Assim, foi criada uma constante que traz a URL da API do backend e uma função assíncrona que vai chamar esses dados da API.
O formulário onde serão inseridos os dados do vendedor foi feito utilizando tags HTML “label” e “input”, sendo que a data foi formata para o padrão do Brasil. Esses dados serão validados por meio de um evento (listener).
Nessa página há também dois botões, onde ao clicar “Enviar” surge um pop up que informa se houve sucesso no envio ou não. E ao clicar “Apagar”, o conteúdo do formulário é apagado. Em seguida, ao concluir o cadastro a página é redirecionada para a página espera.html. Isso ocorre por meio da propriedade do JavaScript “window.location.href = 'espera.html'”.




![formulario](https://github.com/user-attachments/assets/3c07b510-af4e-4c45-952f-23efbd3bbc61)

					#Página “erro”

Esta página vai sempre mostrar um erro quando o usuário colocar um nome que já tenha sido cadastrado no banco de dados, sendo que o sistema vai desconsiderar, portanto, maiúscula e minúscula ou cedilha.
Para isso, foi utilizado uma divisão de classe container para informar o erro.
Foi disponibilizado também um botão para que o usuário retorne à página de formulário para realizar um novo cadastro. Para a construção desse botão foi usado o evento addEventListener em JavaScript que vai retornar a constante fallbackURL que vai retornar para a página index.html.







  A página index do projeto Sorteador de Lista foi criada para disponibilizar um formulário ao usuário do Sorteador para que aquele coloque seus dados na roleta a partir de um dispositivo móvel e assim participe com seu nome no sorteio 
  de nomes. Essa página abrirá para o usuário através de um QRCode gerado na página inicial do sorteio. As tecnologias utilizadas foram HTML5. CSS3, JavaScript e framework Bootstrap 5.3.2.


  ![error](https://github.com/user-attachments/assets/54ba4cfc-c854-4e73-926d-bd0b42d92e0d)


					#Página Espera

Essa página solicita ao usuário que aguarde o sorteio terminar para que apresente a posição que ele está na lista sorteada.
Para isso, foi usada uma animação de quadrado que gira infinitamente até que o sorteio da lista seja concluído. Essa animação foi construída através da função “setTimeout ()”. E uma função assíncrona vai verificar o resultado a cada três segundos. Quando o sorteio for concluído a página será redirecionada para a página resultado.html que vai mostrar a posição do vendedor na lista que foi sorteada. Esse redirecionamento será possível através da propriedade JavaScript “window.location.href = "resultado.html".


![Espera](https://github.com/user-attachments/assets/7836ac64-aa16-43df-be1c-cfd36bd72148)


					#Página “resultado”


Esta página será apresentada ao usuário após este concluir o cadastro com sucesso e assim que o sorteio for realizado. Ela vai mostrar a posição do usuário na lista já sorteada. Para que isso ocorra foi inserido no código JavaScript a rota do backend. A posição será exibida ao usuário através da função obterNomeUsuario ().
Nesta página, o usuário também poderá optar por baixar o a lista sorteada no formato PDF, ou, sair da página, através dos botões “Salvar” e “Sair”.

![resultado](https://github.com/user-attachments/assets/13df7e49-77c4-4e59-9121-49a170bebd26)


					#Página “agradecimento”

A página agradecimento.html é a última página do aplicativo mobile, onde apre-senta uma animação de agradecimento ao usuário que utilizou o serviço do sorteador de lista. Em 20 segundos após a exibição a página será redirecionada para a página desktop inicial index.html, onde consta o QRCode para um novo escaneamento para que possa abrir um novo formulário para preenchimento. 


![agradecimento](https://github.com/user-attachments/assets/36dae2b8-c0cb-473b-9997-176a1f7d6f84)




##Estrutura HTML da página Index





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







#Página mobile de espera do sorteio






Esta página tem por objetivo avisar o usuário para que aguarde o sorteio para que a posição dele na lista sorteada seja exibida.



##EStrutura HTML da página de espera.html


Esta é a seção inicial de uma página HTML, com idioma definido para português brasileiro, sendo que o objetivo principal da função é fornecer instruções ao navegador de como a página deve ser carregada e exibida. Aqui também é definida a codificação que perita acentos, emojis e caracteres especiais. Proporciona responsividade à página ajustando a largura à tela de dispositivos móveis. Também é nesta seção que é definida o título do navegador. E aqui ainda é importado o framework Bootstrap 5.3.2 e também o arquivo de estilos personalizados do CSS.

![image](https://github.com/user-attachments/assets/830141d3-97ae-419b-91cb-4ccc50cfdefa)


O seguinte código é a estrutura da página de carregamento, enquanto o sorteio é processado. Ele usa um conatiner principal do Boostrap que centraliza e organiza com margens automáticas. Cria ainda o titulo da página. 
Utiiza-se margin-botton (margem inferior) automática do Bootstrap.
Há ainda uma animação de carregamento (spinner) e ainda role="status" para acessibilidade para deficientes visuais. O sistema mostra ainda uma mensagem ao usuário pedindo que não fecha a página para que se processe o sorteio. 
Há também um contador para que mostre um tempo de espera. 



![div_espera](https://github.com/user-attachments/assets/7d831b9c-93c5-4ac2-9e44-e358eb1553a2)

Aqui um script importa o JavaScript do Bootstrap 5.3.2 a partir de uma CDN (Content Delivery Network), permitindo o uso de componentes dinâmicos do Bootstrap (como modais, carrosséis, entre outros).
Ocorre aqui ainda ocorre o carregamento do arquivo JavaScript personalizado.


![image](https://github.com/user-attachments/assets/1f37c53d-d3e7-4163-a1ce-c108f56b34ec)




##CSS da página de espera.html


Nesta parte do código foram utilizados alguns códigos CSS para complementação do Boostrap



Este trecho do código define o estilo visual para o container principal da seção "aguarde" da página. Logo, a cor de fundo do referido container é cinza claro. 
A borda é arredondada em 10 pixels e aciona um espaçamento interno de 30 pixels em todos os lados, o que afasta o conteúdo das bordas. Há uma sombra leve ao redor e 
espaçamento superior (margin-top) de 20 pixels, afastando o container do elemento acima.


![espera_conteiner](https://github.com/user-attachments/assets/7c1db35a-fa4f-4894-9333-25383f1454c6)




Aqui é feita a estilização da mensagem a ser exibida ao usuário. Dessa forma, a mensagem é centralizada horizontalmente com uma margem vertical de 30 pixels acima e abaixo do elemento. 
A mensagem será exibida em cor preta e espessura média de 500. A cor do título principal é azul e está centralizado.



![espera_mensagem](https://github.com/user-attachments/assets/d5ad3932-2216-41eb-ab0c-e8796f5fdacc)



A classe contador define bloco quadrado que possui espaçamento superior de 20 pixels; dimensões de 100x100 pixels,  formando um quadrado, com bordas arredondadas (border-radius) e 20 pixels, 
inicialmente com fundo vermelho e fonte branca de tamanho 15 pixels e em negrito. O conteúdo é centralizado. E a animação é aplicada no quadrado girando por 2 segundos de forma infinita e mudando de cor.
Todo elemento é centralizado horizontalmente na página.


![espera_contador](https://github.com/user-attachments/assets/203c4f53-a68e-473b-8bda-4b72a597a618)



O seguinte código é responsável por definir uma animação personalizada denominada "rotateColor", usando a regra @ketframes.  
O objetivo é aplicar uma rotação de 360 graus e alterar a cor de fundo em ciclos infinitos, ou seja, o quadrado vai girar e mudar de cor (tons de azul, vermelho e verde) continumente. 



![espera_keyframe](https://github.com/user-attachments/assets/2e261427-e790-4e72-bd6d-1f76a0a6d0a5)


Aqui implementamos a responsividade para adaptar o layout da página para dispositivos móveis. Nesse caso, aplica estilos quando a largura da tela for menor ou igual a 768 pixels ou também quando for menor ou igual a 480 pixels. Reduzindo o padding (preenchimento) para 20 pixels ou para 15 pixels e ajusta o container e o rotateColor.


![espera_768](https://github.com/user-attachments/assets/fed400d6-2e74-481e-92e8-c85b630fdeb1)



![espera_480](https://github.com/user-attachments/assets/3479917f-d519-47f9-b8af-57378d521f52)


##JavaScript da página espera.html


Nesta parte do código ocorre uma simulação de carregamento de 3 segundos exibindo uma mensagem de sucesso, substituindo a animação de carregamento por um ícone de texto, mudando a cor para verde como um feedback ao usuário. 
Inicialmente, o document.add espera o carregamento completo da página HTML. O "const quadrado" e "const spinner" guardam em variáveis os elementos HTML que poderão ser manipulados com JavaScript.


![espera_js_simulacao](https://github.com/user-attachments/assets/f117a486-a3da-457a-b077-9d4abf452ad4)


Esse trecho de código define uma função assíncrona chamada verificarSorteioConcluido, que serve para verificar se um sorteio foi finalizado e, se sim, 
redirecionar o usuário para uma nova página com o resultado. 
A função assíncrona executa tarefas mais lentas sem travar a página, esperando a resposta de requisição.
O "fetch()" faz a requisição e a rota deve trazer o status do sorteio, enquanto que o "await" faz o código esperar a resposta. 
Se houver erro o sistema vai para o catch que exibirá o erro o console. Caso não tenha erro  e o sorteio for finalizado redireciona automaticamente para a página resultado.html.


![js_espera_assincrona](https://github.com/user-attachments/assets/8be2b286-b4f6-4f42-8ec1-8a1ebd0f6b49)


Essa função executa repetidamente, a cada 3 segundos, a verificação com o servidor se o sorteio foi concluído, sendo que se foi concluído será automaticamente redirecionado para a página seguinte.


![js_espera_verificar](https://github.com/user-attachments/assets/c53b6d21-05da-45d2-9418-9d710f1f0fc1)




#PÁGINA resultado.html


##Estrutura HTML da página resultado.html





Esta é a seção inicial de uma página HTML, com idioma definido para português brasileiro, sendo que o objetivo principal da função é fornecer instruções ao navegador de como a página deve ser carregada e exibida. Aqui também é definida a codificação que perita acentos, emojis e caracteres especiais. Proporciona responsividade à página ajustando a largura à tela de dispositivos móveis. Também é nesta seção que é definida o título do navegador. E aqui ainda é importado o framework Bootstrap 5.3.2 e também o arquivo de estilos personalizados do CSS.



![inicio_resutado](https://github.com/user-attachments/assets/2ef61aa5-a1f0-44ce-807f-b9048f310ebc)

Neste trecho do código foi criado um container centralizado através de bootstrap. A página exibe o título "Sorteador de Lista" de forma centralizada horizontalmente e com margem vertical “my-4” (margem do eixo vertical y – topo e base).
Esse bloco mostra a mensagem final do sorteio com um emoji de comemoração (classe party-popper). Há a exibição da mensaem "Parabésn". E também aqui será exibida a posição do usuário na lista sorteada.


![image](https://github.com/user-attachments/assets/9b323f4d-062c-4fb6-bbb1-033198d040e9)

Este bloco é usado para oferecer feedback visual (confete) e permitir que o usuário salve ou saia da página após ver o resultado do sorteio. Ele melhora a experiência do usuário com interatividade e opções claras. Aqui neste trecho há a opção de salvar uma cópia da lista sorteada. Há uma adição de margem superior para espaçamento visual. Há dois botões, um para salvar cópia da lista ou outro para sair da página. Nesse caso, ao clicar em "sair" ou após o download ser completado a página deve ser redirecionada para a página de agradecimento.

![image](https://github.com/user-attachments/assets/e2eb507c-63fd-4d3e-966e-8ea25563e69b)


Este código trata-se da importação das bibliotecas de JavaScript. E também a importação do script personalizado resultado.js


![resultado_bibliot](https://github.com/user-attachments/assets/e7e7dff1-5c9a-4d38-a841-578c5040d2ea)


##Estrutura CSS da página resultado.html


Este trecho é responsável pela estilzação do container principal onde estará a informação do resultado do sorteio, mais especificamente vai mostrar a posição que o usuário está na lista sorteada. O fundo do container será branco, com bordas arredondadas em 10 pixels, com espaço interno de 30 pixels, com sombra leve, margem superior de 20 pixels (espaço acima do container). O texto de dentro do container fica centralizado horizontalmente e o carregamento visual desse bloco é de 0,5 segundos. 


![resultado_container](https://github.com/user-attachments/assets/171d7aa5-3f4a-43ac-82bb-d88d9c6a983e)



Define um espaço interno (padding) de 20 pixels em todos os lados do conteúdo dentro da #mensagem-resultado. 
Isso garante que o texto e os demais elementos internos não fiquem colados nas bordas do bloco, melhorando a legibilidade.


![resultado_padding](https://github.com/user-attachments/assets/ed7d5356-bbba-4dc9-aa7a-b02f85b770fd)


Aqui foram usadas classes para aplicar estilos à animação. O tamanho da fonte (no caso o emoji) é quatro vrezes o tamanho da fonte-base. A animação tem uma duração de 0,5 segundo por ciclo. tem velocidade suavizada pelo "ease", ela se repete infinitamente e alterna a direção indo para cima e para baixo.


![image](https://github.com/user-attachments/assets/a213bf35-5b0e-4d0a-87aa-08c9c4bb07e8)

Nesta parte, o CSS aplica estilo ao texto que mostra o resultado, ou seja, a posição do usuário na lista, fonte tem 1,5 vezes o tamanho padrão, a cor do texto é preto e o espaçamento vertical é de 20 pixels acima e abaixo do elemento, separando visualmente dos demais itens.


![image](https://github.com/user-attachments/assets/e21994d8-ba16-4d73-a3fd-8384594b1d58)


Esta parte do código estliza o elemento que mostrará a posição do resultado. A informação vai aparecer em negrito com cor de tom azul (padrão do Boostratp) e o tamanho da fonte será de duas vezes mais o tamanho padrão. 

![image](https://github.com/user-attachments/assets/adeee041-c6d2-4dda-9469-c3c0cadb0518)

Aqui foi definido o estilo das opções de "salvar" e "sair". Foi adicionado um espaço acima do bloco e também um espaço interno no topo, 
criando uma separação entre a borda e o conteúdo interno. Foi inserida também uma linha no topo que funciona como uma divisão visual entre o conteúdo de cima e as opções.  

![image](https://github.com/user-attachments/assets/7d5f1b5f-cade-44c2-b69d-1a1f11744b25)

Esta parte do código estiliza o container dos botões. Onde foi aplicado layout flexbox, centraliza horizontalmente os botões dentro do container e define um espaço de 15 pixels entre os dois botões.

![image](https://github.com/user-attachments/assets/93be1c53-3a2a-4a6a-9dc1-b132ec513a2a)


Aqui implementamos a responsividade para adaptar o layout da página para dispositivos móveis. Nesse caso, aplica estilos quando a largura da tela for menor ou igual a 768 pixels ou também quando for menor ou igual a 480 pixels.

![image](https://github.com/user-attachments/assets/72d1dc5f-7c11-474d-ba76-0f98e21abc86)


A animação de confeti foi estilizada com @Keyframes. Nesse caso, foi utilizado um efeito de transição, onde o elemento ganha um efeito de "surgimento" com a estilização da opacidade e leve deslizamento. Move o elemento verticalmente para 15 pixels acima e para sua posição original.


![image](https://github.com/user-attachments/assets/24574b5b-e2dc-4f38-915c-30f517a754c5)


##Estrutura JavaScript da página resultado.html



Este trecho do código garante que todo o conteúdo da página seja totalmente carregado. Essa parte também faz referência aos botões "salvar" e "sair".

![image](https://github.com/user-attachments/assets/e4259cd2-e033-4bf0-b34c-311ab99651cc)



Este trecho de código realiza uma simulação de sorteio de uma posição e a exibe em um elemento da página. Nessa caso, a função que simula o sorteio de uma 
posição retorna um valor que representa a posição sorteada.O valor retornado é armazenado na variável "posição" e esse valor é exibido no elemento HTML como um <span>.


![image](https://github.com/user-attachments/assets/73c5e505-4e51-4964-b176-89f0a02bdbd0)


Neste trecho, o código adiciona eventos ao clique dos botões "salvar" e "sair". Quando o botão "salvar" é acionado, a função salvarLista() é executda. Quando o botão "sair" é acionado a função redireciona o usuário para a página agradecimento.html.

![image](https://github.com/user-attachments/assets/a816f759-0eba-42ef-bfe6-b242adf81581)

O código é acionado quando a página termina de carregar e adiciona uma ação ao botão "salvar". Quando o botão é clicado ele chama a função gerarPDF() de forma assíncrona (async/await). Caso seja bem sucedido ele redireciona o usuário para a página download.html. Se der erro exibe no console sem redirecionar o usuário.

![image](https://github.com/user-attachments/assets/ed58f29a-66d1-4841-80cc-9432a8808a16)


Ness trecho de código, ao clicar "sair" o usuário é redirecionado para a página de agradecimento.

![image](https://github.com/user-attachments/assets/259d3f5c-b930-45dc-8ab3-ba0a5002581a)


#Página download.html


##Estrutura HTML da página download.html



Esta é a seção inicial de uma página HTML, com idioma definido para português brasileiro, sendo que o objetivo principal da função é fornecer instruções ao navegador de como a página deve ser carregada e exibida. Aqui também é definida a codificação que perita acentos, emojis e caracteres especiais. Proporciona responsividade à página ajustando a largura à tela de dispositivos móveis. Também é nesta seção que é definida o título do navegador. E aqui ainda é importado o framework Bootstrap 5.3.2 e também o arquivo de estilos personalizados do CSS.


![image](https://github.com/user-attachments/assets/110dbeaa-68a7-4fb2-b2e7-f5656f415ac9)



Aqui a tag <header> representa o cabeçalho de uma seção da página e contém o título "Sorteador de Lista". E a tah <h1> defini o título principal da página. O texto é centralizado devido ao atriibuto "text-center" e "my-4" aplica uma margem vertical (topo e base) de nível 4 (em uma escala de 0 a 5, espaçando o título. E o código está ainda dentro de uma div para separar o título do conteúdo que aparece logo abaixo (mensagens ao usuário).


![titulo_down](https://github.com/user-attachments/assets/ca3463ed-d74a-48e7-82fc-74f00e41c03b)



Este código cria um container para exibir uma mensagem de download em adamento, indicando um caregamento. Para isso, o conteúdo foi envolvido por uma div  e uma margem inferior foi inserida. Foi adicionado também um spinner de carregamento fica de forma circula e tem cor de tonalidade azul.
Os textos de mensagem foram definidos pela tag <h3> com uma margem superior e há um parágrafo com texto secundário  em cor mais leve.



![mensagem_down](https://github.com/user-attachments/assets/68067d8c-cd6f-4f08-9c89-9b96ce05bada)


Este trecho de código cria um elemento visual animado com um ícone de presente. Fida dentro de um container div e possui um identificador "'quadrado-status". A classe do ícone é definida por "icone", sendo que a estilização independe container principal.

![image](https://github.com/user-attachments/assets/90b4c608-7ad0-4ca8-b0f8-1747c26a5184)

Esta parte do código cria um botão para cancelar o download que estaria em andamento. Nesse caso usa um identificador para tornar fácil a estilização com CSS e JavaScript. Aqui é definido ainda a cor cinza do botão e ele muda de cor ao passar o mouse. Posssui ainda margem superior para espaçamento entre elementos, para que não fique colado com elementos acima.

![image](https://github.com/user-attachments/assets/249b2d77-3962-4f3a-a22b-d9d56c0fca33)

Este código trata-se da importaçao das bibliotecas de JavaScript.

![image](https://github.com/user-attachments/assets/9f8e0033-5a82-4894-9484-45c8b3815e6f)


Este trecho do código define o estilo visual do container que mostra o carregamento do download. Define o background como branco, com bordas arredondadas em 10 pixels sombra sutil e espaçamento interno de 30 pixels, distanciando o conteúdo das bordas. A margem superior é de 20 pixels e  o alinhamento é central.

![image](https://github.com/user-attachments/assets/a21ed96d-e67a-4e57-b774-7520cb4aa9b3)


Nesta parte do código ocorre a personalização do títula h3 dento do container de mensagens. Dessa forma, a cor do h3 será preta, com espessura negrita, espaçamento inferior de de 10 pixels, melhorando a organização do espaço.


![image](https://github.com/user-attachments/assets/7f9642db-b0a2-40a2-ad14-fbca4a4318ee)


Aqui define o estilo do elemento da classe "icone" que foi usado com um emoji de presente. Então, o tamanho ícone em 5rm que equivale a cinco vezes o tamanho da fonte raiz. A margem inferior é de 20 pixels e serve para separar o ícone dos elementos abaixo. Display inline-block permite que o ícone se comporte como um bloco aceitando margens e dimensionamento. E ainda deixa o ícone grande, com espaçamento adequado em relação aos outros elementos.

![image](https://github.com/user-attachments/assets/ccd51785-aeff-42fd-ac6e-2f40cddf6483)


Aqui implementamos a responsividade para adaptar o layout da página para dispositivos móveis. Nesse caso, aplica estilos quando a largura da tela for menor ou igual a 768 pixels ou também quando for menor ou igual a 480 pixels.


![image](https://github.com/user-attachments/assets/fde6ede8-a68f-472c-a5dc-79e2b159e8b2)

Este trecho é executado quando todo o conteúdo HTML da página é totalmente carregado. Seleciona também elementos para posterior manipulação. Controla e exibição visual do progresso de download, a interação do usuário (cancelamento)

![image](https://github.com/user-attachments/assets/6eaaaa16-e837-4e9b-9720-f366e20f9720)

Esta parte do código simula o processo de download.

![image](https://github.com/user-attachments/assets/5fafd0bf-fc95-490c-9874-9bb67ff0629e)

Este código implementa um sistema de download real em JavaScript, substituindo a simulação por uma requisição HTTP que baixa um arquivo e exibe o progresso em tempo real.


![image](https://github.com/user-attachments/assets/8023c807-5a27-41c8-8346-476be1ebbd36)
![image](https://github.com/user-attachments/assets/83462737-d513-4e99-8275-c4ce9d0f321f)


Este trecho de código JavaScript adiciona um event listener ao botão de cancelar (btnCancelar), permitindo que o usuário interrompa um download em andamento. Quando clicado, ele executa as seguintes ações: interrompe o processo, atualiza a interface, exibe a mensagem de cancelamento, remove o spinner e oculta o botão cancelar. 

![image](https://github.com/user-attachments/assets/d58a5a24-0b15-48f1-a0c9-bb3dbb2e9614)








