# Githuber 

Aplicação beaseada em um projeto do repositório [app-ideas](https://github.com/florinpop17/app-ideas). 

## A ideia

Utilizar a [api do github](https://developer.github.com/v3/) para buscar e exibir dados sobre perfis do github. 

## Features propostas: 

- [x] Entrar com o usuário a ser pesquisado em um campo de `input`;
- [x] Apresentar: avatar, username, número de repositórios e número de seguidores do usuário pesquisado;
- [x] Apresentar o top 4 de repositórios com mais estrelas do usuário;
- [x] Exibir um aviso caso o username digitado não seja válido;
- [x] Poder alternar para o modo noturno, caso desejado pelo usurio. **(Feature Bônus)**
- [x] Guardar a informação do modo perferido pelo usurio no último acesso e exibi-lo logo ao reabrir a aplicação. **(Feature Bônus)**


## Acréscimos: 

- Caso o usuário possua menos de 4 repositórios com mais de uma estrela, será apresentado o número de repositórios com mais de uma estrela. Como a ideia é estabelecer um ranking, não faz sentido exibir repositórios com estrelas zeradas.
- A maior dificuldade do projeto girou em torno de manter o escolhido pelo usuário mesmo após o realod da página. Após algumas pesquisas, resolvi usar o método descrito [aqui](https://markoskon.com/dark-mode-in-react/). Ele utiliza um hook personalizado, o `useLocalStorage()`. 


## Resultado final: 

![Tema escuro](https://user-images.githubusercontent.com/14362970/78850035-84793480-79ec-11ea-87cb-d0b53ba929d0.png)

![Tema claro](https://user-images.githubusercontent.com/14362970/78850064-93f87d80-79ec-11ea-9ffa-4907fb4a4ad3.png)

![Usuário tema claro](https://user-images.githubusercontent.com/14362970/78850131-ca35fd00-79ec-11ea-907c-25f208076d0d.png)

![Usuário tema escuro](https://user-images.githubusercontent.com/14362970/78850154-dde16380-79ec-11ea-9247-6f8b6a6c61c1.png)

