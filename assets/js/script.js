/* $(document).ready(function() {
    $('ul.navbar-nav > li')
        .click(function(e) {
            $('ul.navbar-nav > li')
                .removeClass('active');
            $(this).addClass('active');
        });
}); */


class Mensagem {

    constructor() {

    }

    geraId() {
        return Math.floor(Math.random() * 1000)
    }

    gravarMsg() {
        this.mensagens = [];
        this.formname = document.getElementById('nomeform').value;
        this.formmail = document.getElementById('mailform').value;
        this.formmsg = document.getElementById('msgform').value;

        this.novaMensagem({ id: this.geraId(), nome: this.formname, email: this.formmail, msg: this.formmsg })
        this.nova = '';
    }

    novaMensagem(msg, nova = true) {

        this.mensagens.push(msg);

        console.log(this.mensagens)
        if (nova) {
            localStorage.setItem('mensagem', JSON.stringify(this.mensagens));
        }

    }
}

var mensagem = new Mensagem();