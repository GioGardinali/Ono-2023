import cabecalho from './cabecalho.svg';
import bottom from './bottom_city.svg'
import ono from './foto_ono.png'
import './App.css';


function App() {
    document.title = 'Feliz Aniversário ONO'
    return ( <
        div className = "App" >
        <
        head >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin / >
        <
        link rel = "preconnect"
        href = "https://fonts.googleapis.com" / >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin / >
        <
        link href = "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Montserrat:wght@400;700&family=Nunito:wght@400;600;700&display=swap"
        rel = "stylesheet" / >

        <
        /head> <
        header >
        <
        img src = { cabecalho }
        className = "img_header"
        alt = "imagem de cabecalho" / >
        <
        div className = 'inicio' >
        <
        h1 className = 'titulo' > Parabéns!! < /h1> <
        p id = 'texto_desculpa1' > Aqui é para ficar algo super legal, ou pelo menos eu achei beeem divertido e memorável. < /p> <
        p id = 'texto_desculpa2' > Como não temos um script da vida, infelizmente tive problemas com o conteúdo da página, mas não se preocupe!Em breve você conseguirá ver!! < /p> <
        /div> <
        div className = 'gif_1' >
        <
        img src = 'https://thumbs.gfycat.com/HandyCrispBorderterrier-size_restricted.gif'
        alt = 'fica ok'
        width = "40%" / >
        <
        /div> <
        /header> <
        section >
        <
        div className = 'meio' >
        <
        h2 id = 'titulo2' > A entrega já está pertinha, logo mais você conseguirá acessar corretamente a partir do dia 14 / 02! < /h2> <
            p id = 'texto_previsao' > Então fica sussa e aproveite para baixar a sua imagem e poupar tinta de baleia😎😎 < /p> <
            /div> <
            div className = 'final' >
            <
            a className = 'download_foto'
        href = { ono }
        download > FOTO DA MONTAGEM < /a> <
        /div> <
        /section> <
        footer >
        <
        img className = 'img_footer'
        src = { bottom }
        alt = 'imagem de footer' / >
        <
        /footer>


        <
        /div>
    );
}

export default App;