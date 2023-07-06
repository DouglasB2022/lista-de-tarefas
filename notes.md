# LISTAS DE TAREFAS
Uma aplicação frontend HTML, CSS, JS puro para gerir tarefas.
No backend vamos ter uma API NodeJs + Express + Mysql para servir o frontend.
# BASE DE DADOS
    users
        id
        username
        password
        created_at
        updated_at

    tasks
        id
        id_user
        tasks_text
        tasks_status(new | in progress | canceled | done)


# TAREFAS A DESENVOLVER NO PROJETO
> criar a estrutura inicial 
    -  base de frontend (html,css,js | bootstrap)
    -  base do backend ( node + express + mysql) com uma resposta padrão.

> no frotend 
    - páginas necessárias para a navegação na nossa app.    
    - pequenos testes de comunicação entre front + backend - utilização de Ajax ( XHTMLhttpRequest | fetch API )

    - estrutura base de cada pagina
        bootstrap (slate) bootswatch
        fontawesome

> ver tarefas
    titulo
    filtro para escolher tarefas que queremos ver (select)
    botao para adicionar tarefas 
    (mensagem sobre o fato de não existirem tarefas)
    caixa para tarefas 
        - possibilidade de alterar o status, editar tarefa e elimina-las 
        - paragrafo com o total de tarefas disponiveis (de acordo com o filtro)

    - adicionar tarefa
        input: text com o texto da tarefa 
        botao para cancelar
        botao para adicionar tarefa

    - editar tarefa 
    input: text para editar o texto da tarefa 
    botao para cancelar 
    botao para submeter alteraçao

    (eliminar sera feito com uma modal)