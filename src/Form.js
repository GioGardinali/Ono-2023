import React, { Component } from "react";
import "./App.css";
class Form extends Component {
    
    state = {
        email: '',
        assunto: '',
        mensagem: ''
    }

    handleInputChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let {email, assunto, mensagem} = this.state

        email = email
        assunto = assunto
        mensagem = mensagem

        console.log('funcionou', email, assunto, mensagem)
    }

    render(){
        function enviado(){
            alert("Formulário enviado 😉")
        }

        function enviarWhatsApp() {
            var assunto = document.getElementById("assunto").value;
            var mensagem = document.getElementById("mensagem").value;
            var quebra = "\n";
            quebra = window.encodeURIComponent(quebra);
            window.open(
              "https://web.whatsapp.com/send?phone=11996364389&text=Olá! É o Ono, e te procurei pois quero conversar sobre: " + quebra +
                assunto + quebra + mensagem,
              "_blank");
            }
    
            function enviado(){
                alert("Formulário enviado 😉")
            }
        return (
            <section className="forms">
                <form className="formulario" id="formulario" action="https://formsubmit.co/giovannagardinali11@gmail.com" method="post" onSubmit="">
                <label for="email">E-mail</label><br/>
                <input onChange={this.handleInputChange} type="email" className="email" name="email" id="email" required/><br/>

                <label for="assunto">Resumo da solicitação</label><br/>
                <input type="text" name="assunto" className="assunto" id="assunto" required/><br/>

                <label for="mensagem">Como posso te ajudar?</label><br/>
                <textarea rows="" cols="" id="mensagem" className="mensagem" name="mensagem" required></textarea><br/>

                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                <label for="mensagem2" className="mensagem2">Por onde deseja enviar a mensagem?</label><br/>
                <div className="socialButton">
                <button type="submit" id="btn-email" value="" onClick={enviado}></button>
                <input type="button" id="btn-wpp" className="btn-wpp" value="" onClick={enviarWhatsApp}/>   
                </div>
                <input type="hidden" name="_template" value="box"/>
        </form>
            </section>
        )
    }
}

export default Form;
