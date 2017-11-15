# backend-test

Recebi esse teste de um amigo e resolvi testar meus conhecimentos em JS = S2 => AMOR.
Sendo assim, fiz o teste mas não está completo por falta de tempo mesmo. 
Acredito que ainda falta refatorar o mesmo e aplicar o requisito de Teste do codigo.

### Instalação e Execução
Para executar o projeto é simples.    
1 baixar o projeto do repositorio     
2 ``` cd backend-test/app && npm i ```   
3 ``` npm start ```  

### Testando
Execute o teste pela terminal LINUX, Postman ou qualquer aplicação client rest.     
Coloque no lugar ```<ip host : 5000>``` seu IP e porta. exemplo: ```http://localhost:5000```

Buscando vagas por *title* e ordenando salario por *asc* "Acrescente"
- curl "<ip host test>/api/v1/jobs?title=Recepcionista&sort=asc"

Buscando vagas por *title* e ordenando salario por *desc* "Decrescente"
- curl "<ip host : 5000>/api/v1/jobs?title=Recepcionista&sort=desc"

Buscando vagas por *description* e ordenando salario por *asc* "Acrescente"
- curl "<ip host : 5000>/api/v1/jobs?description=Auxiliar&sort=asc"

Buscando vagas por *description* e ordenando salario por *desc* "Decrescente"
- curl "<ip host : 5000>/api/v1/jobs?description=Auxiliar&sort=desc"

Buscando vagas por *cidade* e ordenando salario por *asc* "Acrescente"
- curl "<ip host : 5000>/api/v1/jobs?cidade=Joinville&sort=asc"

Buscando vagas por *cidade* e ordenando salario por *desc* "Decrescente"
- curl "<ip host : 5000>/api/v1/jobs?cidade=Joinville&sort=desc"

### Implementações Futura
- como executar os testes (comportamental e/ou de unidade);

### Referencia para estudo e execução
[JavaScript — Quando usar map, filter ou reduce? Com exemplos!](https://medium.com/@osuissa/javascript-quando-usar-map-filter-ou-reduce-31aa10e33e9)