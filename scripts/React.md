REACT

É uma biblioteca de JavaScript criada pelo Facebook para montar interfaces de usuário
  
  Componentização: É a ideia principal em vez de fazer uma página gigante você cria pecinhas soltas componentes como Header Footer e Main e depois junta tudo como se fosse um LEGO  
  
  Virtual DOM: É um sistema que o React usa para ser super rápido atualizando só o que realmente mudou na tela em vez de recarregar tudo  


  react router dom

  Sabe quando você clica em um link e o site carrega rapidinho sem dar aquele refresh piscar na tela toda isso é graças a essa biblioteca ela transforma seu site em uma SPA  onde só o que precisa mudar na tela é trocado para começar a usar você precisa instalar no terminal do projeto: npm i react-router-dom  


  main.jsx: Você deve envolver o seu <App /> com o componente <BrowserRouter> é isso que liga o sistema de rotas no seu app  
  
  App.jsx: Aqui é onde você define o mapa do site você usa as tags <Routes> e <Route> para dizer quando o endereço for /about mostre a página About  
  
  Header (ou Menu): Para criar os links você não usa mais a tag <a> do HTML agora você usa o <Link to="..."> que é o que garante que a página não vai recarregar do zero ao clicar  


   useState é o que permite ao seu componente lembrar de informações e reagir quando elas mudam  
   
   Como funciona: Você define um valor inicial e recebe de volta o valor atual (state) e uma função para mudar esse valor (setState)  
   
   Exemplo real: Quando você digita em um formulário o React usa isso para guardar seu nome e-mail e senha em tempo real  
   
   Dica técnica: O professor recomenda usar o valor anterior (prev) na hora de atualizar para evitar bugs se muitas mudanças rolarem ao mesmo tempo  
   
    useEffect onde a mágica acontece sozinha esse hook serve para lidar com efeitos colaterais ou seja coisas que precisam acontecer fora do fluxo normal de renderização 
    
     Exemplo: Buscar dados de uma API ou mostrar uma mensagem de boas-vindas assim que a página carrega
     
      Regra de ouro: Se você passar um array vazio [] no final dele o código dentro só vai rodar uma única vez logo que o componente aparecer na tela
      
       Manipulando EventosPara capturar o que o usuário faz  
       
       e.target: É o campo input que foi mexido  
       
       e.target.name: Identifica qual campo mudou (ex: se foi o de nome ou de senha)  
       
       e.target.value: É o texto real que a pessoa acabou de digitar