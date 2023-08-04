import cabecalho from "./cabecalho.svg";
import bottom from "./bottom_city.svg";
import ono from "./foto_ono.png";
import omo from "./ono-omo.svg";
import idea from "./ono-Idea.svg";
import edifica from "./ono-edificar.svg";
/* import btnClickEmail from "./botao-email-click.svg";
import btnNoClickEmail from "./botao-email-noClick.svg";
import btnHoverEmail from "./botao-email-hover.svg";
import btnClickWpp from "./botao-wpp-click.svg";
import btnNoClickWpp from "./botao-wpp-noClick.svg";
import btnHoverWpp from "./botao-wpp-hover.svg"; */
import caution from "./Caution-Sign-11.svg";
import "./App.css";
import Form from "./Form";

function App() {
  document.title = "Feliz Aniversário ONO";

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Montserrat:wght@400;700&family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>{" "}
      <header>
        
        <img src={cabecalho} className="img_header" alt="imagem de cabecalho" />
        <a className="img4" href="https://drive.google.com/file/d/1g2uSD4Hn6J0GYMkwE9w_UPV60LUvhGvD/view?usp=sharing">
            
  <img
  className="img_4" src={caution} alt="carta apresentação"/>
    </a>
        <div className="inicio">
          <h1 className="titulo"> Parabéns!! </h1>{" "}
          <p className="texto_desculpa1">
            {" "}
            Seu presente foi entregue em partes, e aqui temos oficialmente a Pt.
            2!{" "}
          </p>{" "}
          <p className="texto_desculpa2">
            {" "}
            Aparentemente dia 28 de janeiro é quando uma determinada pessoa faz
            aniversário e que eu particularmente conheci como Ono, o
            sobrenome lembra muito aquela marca de sabão em pó, mas é uma
            pessoa, o que é algo completamente diferente 'acho'.{" "}
          </p>{" "}
        </div>{" "}
        <img className="img_1" src={omo} alt="sabão em pó e Ono"/>
        <div className="gif_1">
        </div>{" "}
      </header>{" "}
      <section>
        
        <div className="meio">
          <p className="titulo2">
            {" "}
            Resolvi enviar este cartão para te desejar muito anos de vida,
            saúde, paz, alegria e tudo que vem em um combo de aniversário, mas
            sem bolo...{" "}
          </p>{" "}
        </div>{" "}
        <div className="meio2">
          <p className="texto_2">
            {" "}
            Que você continue sendo essa pessoa determinada que sempre tem uma
            solução para algo e com grande foco acompanhado de uma xícara de
            café, garrafa de água e uma enroladinha no cabelo para ligar o modo
            ON!
          </p>{" "}
        </div>
        <img className="img_2" src={idea} alt="pensativo tomando cafe" />
        <div className="meio3">
          <p className="texto_3">
            Não esquecendo de se alimentar para repor todas as energias que
            gastou só pensando na solução de um problema, ou só porque tá com
            fome mesmo.
          </p>
        </div>
        <div className="meio4">
          <p className="texto_4">
            Mas lembrando, use com moderação se autodeclarar como burro para se
            edificar como pessoa. Você é uma das pessoas mais inteligentes de
            conhecimentos gerais que conheço, e usar isso sem moderação pode
            criar uma construção sem vigas até desmoronar...
          </p>
        </div>
        <img className="img_3" src={edifica} alt="construindo com tijolos"/>
        <div className="meio5">
          <p className="texto_5">
            Enfim, me deixo a disposição para te ajudar, caso precise! Por isso
            o <strong> formulário abaixo </strong>, que basta me mandar o pedido de ajuda e
            disparar por e-mail ou telefone que eu receberei!
          </p>
          <p className="texto_6">
            Fiz isso, pois certamente não estaremos no mesmo ambiente o resto da
            vida e também não espero que estejamos, pois o céu não é o limite
            para mim e pelo pouco que te conheço, também não me parece ser o
            seu.
          </p>
          <p className="texto_7">
            <i>
              *Pode mandar por aqui também os materias de treinamento que te pedi
              para ser entregue em 30/06/2022 'Brincadeiras a parte' haha.
            </i>
          </p>
        </div>
        
        <hr/>
<h2>🦇 Batcanal 🦇</h2>
        <Form />

        <div className="final">
          <a className="download_foto" href={ono} download>
            {" "}
            FOTO DA MONTAGEM{" "}
          </a>{" "}
        </div>{" "}
        
      </section>{" "}
      
      <footer>
      
      </footer>
      
        <img className="img_footer" src={bottom} alt="imagem de footer" />
    </div>
    
  );
}


export default App;
