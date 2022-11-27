Feature: Register

    Feature Description

    Background: Acesso ao site
        Given que o usuário acessa o site Automation Demo Site 
        When vai para a página de registro
        Then está apto para preencher o formulário de registro

    Scenario: Preencher Formulário de Registro
        Given que o usuário está na página de registro
        And preenche o formulário com dados válidos
        
        When clica em Submit para enviar o formulário

        Then Cadastro finalizado

        
