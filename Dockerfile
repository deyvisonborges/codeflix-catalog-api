FROM node:20.9-slim

# Usuario padrao, para nao trabalhar com root e nao ter problemas de permissao
USER node

# A aplicacao vai ser armazenada na pasta app, para o usuario node
WORKDIR /home/node/app

# Vai ficar lendo de forma indefinida, mantendo o container de pé
CMD ["tail", "-f", "/dev/null"]