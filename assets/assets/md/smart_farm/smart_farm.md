# **Smart Farm e a aplicação de Internet das Coisas (IoT) na agricultura de precisão**

|                   |                 |                 |                   |
| ----------------- | --------------- | --------------- | ----------------- |
| Adrine Nascimento | Beatriz Menezes | Cláudio Ramos   | Daniely Araújo    |
| Déborah Barbosa   | Janielson Moura | João Carvalho   | Luan Rebelo       |
| Lucas Marinho     | Kevin Martins   | Marcus Aguiar   | Pedro Marinho     |
| Pedro Maia        | Riquelmy Silva  | Ronald Cordeiro | Vinícius Mendonça |

# **RESUMO**

Agricultura de precisão está associada à utilização de aparelhagem de tecnologia avançada para avaliar e acompanhar de maneira mais precisa as condições das áreas de atividades agronômicas baseada no princípio da variabilidade do solo e clima. Na pesquisa desenvolvida foi aplicado o referencial bibliográfico onde foi realizado a recolha para a temática: agricultura de precisão, análise e monitoramento de dados, Internet das Coisas (IoT). Com a pesquisa foi desenvolvido um protótipo de sistema que possui o objetivo de monitorar e coletar dados de variações climáticas e pedológicas, dessa forma é possível obter informações precisas para o cultivo gerando aumento significativo na produtividade da lavoura.

**Palavras-chave:** Internet das Coisas, Agricultura 4.0, Agricultura de Precisão, Análise de Dados.

#### **ABSTRACT**

Precision agriculture is associated with the use of advanced technology equipment to more accurately assess and monitor the conditions of areas of agronomic activities based on the principle of soil and climate variability. In the developed research, the bibliographic reference was applied, where the collection was carried out for the theme: precision agriculture, data analysis and monitoring, Internet of Things (IoT). With the research, a prototype system was developed that aims to monitor and collect data on climatic and pedological variations in this

way it is possible to obtain accurate information for cultivation, generating a significant increase in crop productivity.

**Keywords:** Internet of Things, Agriculture 4.0, Precision Agriculture, Data Analysis.

# **INTRODUÇÃO**

Smart Farm é um sistema construído para monitorar o campo de cultivo com a ajuda de sensores (luminosidade, temperatura e umidade). Os trabalhadores podem inspecionar as condições do campo de qualquer lugar, eles também podem selecionar entre opções manuais e automatizadas para realizar as ações necessárias com base nesses dados. Por exemplo, se o nível de umidade do solo diminuir, o agricultor pode implantar sensores para iniciar a irrigação. A agricultura inteligente baseada em IoT (Internet das Coisas) é altamente eficiente quando comparada com a abordagem convencional.

A expressão _Internet_ of _Things_ (IoT), ou Internet das Coisas, não possui uma definição única, mas há uma constância em seus diversos significados: a existência de uma realidade em que tudo é conectado. A internet deixa de estar disponível somente em computadores e se torna presente também em vários objetos, fazendo a comunicação entre eles, seu sensoriamento e controle remoto, além da análise dos dados por eles obtidos.

A abordagem de usar a tecnologia IoT para garantir a aplicação ideal de recursos para obter altos rendimentos das culturas e reduzir os custos operacionais é chamada de **agricultura** de **precisão**. É notória a utilização dessa inovação em dedicação às mais diversas áreas da convivência humana, a agricultura sendo uma das áreas que mais crescem no cenário mundial passou a demonstrar grande interesse em buscar novas tecnologias. As soluções de IoT estão focadas em ajudar os agricultores a garantir altos rendimentos, lucratividade e proteção ao meio ambiente.

A agricultura inteligente baseada em tecnologias de IoT permite que produtores e agricultores reduzam o desperdício e aumentem a produtividade, desde a quantidade de fertilizante utilizada até o número de viagens que os veículos agrícolas farão, permitindo a utilização eficiente de recursos como água, eletricidade, etc. Afirmam Moraes et al. (2017), que a agricultura de precisão pode usar o gerenciamento de recursos apoiado pela tecnologia, para transformar investimento em maneiras de aumentar a produção e reduzir os custos operacionais, isso tudo graças ao avanço de muitas tecnologias e principalmente em termos de tecnologia IoT.

Foi observado que na produção agrícola atual, vários problemas podem existir, dentre eles destacam-se: alto custo para aprimoramento, falta de mão-de-obra especializada, fraca mecanização e automação de tarefas, impactos naturais resultantes de condutas inadequadas e de aplicação de substâncias de formas incorretas e demasiadas, dentre outros. Em meio a essas realidades existentes no âmbito agrícola mundial, é possível identificar que há a necessidade de uma medida a ser aplicada para amenizar esse quadro, para isso propôs-se a

aplicação de Internet das Coisa (IoT) na agricultura a fim de se obter a quebra dessas problemáticas como: o esgotamento da água, o empobrecimento da fertilidade do solo com as altas taxas de aplicação de insumos e a necessidade de excelência ao se produzir alimentos, dentre outros.

O presente artigo objetiva documentar o desenvolvimento da aplicação para atuar na agricultura de precisão utilizando Internet das Coisas (IoT) a fim de monitorar e coletar dados referentes à luminosidade, temperatura e umidade, obtendo informações precisas destes para aumentar a produtividade na lavoura.

# **MATERIAIS** E **MÉTODOS**

#### **MATERIAIS**

Durante o planejamento foi definido que o sistema fosse desenvolvido em linguagem C para que a placa do Arduino Esp32 pudesse ser integrada ao Wi-Fi se comunicando via MQTT (protocolo para sensores).

![](assets/md/smart_farm/_page_2_Picture_5.jpeg)

Figura 1 - Placa Esp 32 WROOM-32 WIFI

- **Fonte: Saravati**
  A placa Esp 32 WROOM-32 WIFI (figura 1) é uma placa com wireless embutida utilizada para embarcar o firmware, este lê os dados dos sensores e envia as informações para o _broker_ MQTT.

Figura 2 - Sensores DHT11 e DHT22

![](assets/md/smart_farm/_page_3_Picture_1.jpeg)

#### **Fonte: Eletrogate**

```
Os sensores DHT11 E DHT22 (figura 2) medem a umidade e a temperatura do ar.
```

Figura 3 - Sensor de umidade do solo

![](assets/md/smart_farm/_page_3_Figure_5.jpeg)

#### **Fonte: Amazon**

Quanto à umidade do solo é utilizado o sensor Hygrometer Soil (figura 3).

Figura 4 - Sensor de luminosidade

![](assets/md/smart_farm/_page_3_Picture_9.jpeg)

**Fonte: Eletrogate**

O sensor BH1750 (figura 4) tem a função de captar a luminosidade do ambiente.

Figura 5 - Jumper irá conectar os sensores ao Esp 32

![](assets/md/smart_farm/_page_4_Figure_1.jpeg)

**Fonte: Tecmundo**

O jumper (figura 5) conecta todos os sensores à placa Esp 32.

Figura 6 - Protoboard 400 furos utilizado para montagem do circuito

![](assets/md/smart_farm/_page_4_Figure_5.jpeg)

#### **Fonte: Mercado Livre**

O protoboard (figura 6) é uma placa de ensaio que funciona como protótipo de um aparelho eletrônico utilizado para montar o circuito.

![](assets/md/smart_farm/_page_4_Figure_8.jpeg)

![](assets/md/smart_farm/_page_4_Picture_9.jpeg)

**Fonte: D-Link**

O roteador D-Link (figura 7) cria uma rede segura onde os dispositivos se comunicam.

# **MÉTODOS**

Para elaboração do estudo foi realizada uma pesquisa documental tendo como base artigos e livros que possuíam temas referentes à: agricultura de precisão, variações climáticas, redes sem fio, análise de dados e internet das coisas.

Figura 8 - Quadro Kanban do projeto SmartFarm

![](assets/md/smart_farm/_page_5_Picture_4.jpeg)

**Fonte: Autoria própria (2022)**

Quanto à distribuição de tarefas na elaboração do projeto, foi utilizado o quadro Kanban para controle do fluxo de atividades, como mostra a figura 8.

#### **DESENVOLVIMENTO** DA **APLICAÇÃO**

O sistema e suas alterações foram devidamente registrados e seccionados em repositórios no Github seguindo as divisões: firmware, middleware, API e Web. O decorrer do projeto foi dividido em duas fases: elaboração do sistema Smart Farm e criação de um ambiente com elementos do cenário rural para simulação e testes.

O que consiste em quatro sistemas funcionando em conjunto como mostra a figura 9.

Figura 9 - Representação gráfica da Smart Farm

![](assets/md/smart_farm/_page_6_Figure_1.jpeg)

**Fonte: Autoria própria (2022)**

De acordo com a figura 9 seguem-se as seguintes definições do funcionamento do sistema Smart Farm.

1 - **Firmware**: sistema embarcado da placa Esp 32 feito em C e tem a função de ler os dados dos sensores, se conectar ao Wi-Fi e enviar informações ao MQTT.

2 - **Middleware:** desenvolvido em Java, será o interceptador do _broker_ (Mosquito). Tem a função de ler as mensagens que são enviadas ao _broker_ e salvá-las no banco de dados para que possam ser utilizadas na API.

3 - **API:** desenvolvido em Java Spring Boot com a função de acessar e tratar os dados que se encontram no BD.

4 - **Web:** desenvolvido em Javascript com React com a função de exibir as informações climáticas de forma intuitiva ao usuário.

Após a especificação de programas e linguagens a serem utilizadas no projeto, foi realizada a união dos serviços - Web, API, Middleware, Mosquitto, Banco de dados e Firmware - ao sistema.

Ao realizar a integração dos sensores de luminosidade, temperatura e umidade ao sistema da Smart Farm foi possível a execução de todas as funcionalidades do mesmo: comunicação do firmware com o middleware, recepção de dados dos sensores, e comunicação da API com a aplicação Web.

Foi criado o _Docker-compose_ a fim de integrar todos os sistemas como mostra a figura 9, em seguida realizada a junção do firmware ao Wi-Fi para que as informações fossem enviadas ao MQTT.

![](assets/md/smart_farm/_page_7_Picture_1.jpeg)

Figura 10 - Integração dos sensores de umidade e temperatura

**Fonte: Autoria própria (2022)**

Dessa forma, ensejando posteriormente a integração do firmware com o servidor Mosquito via MQTT, consonante a isso os sensores de umidade e temperatura também foram integrados como mostra a figura 10.

# **RESULTADOS**

#### **TESTES** DE **SENSORES** EM **AMBIENTE EXTERNO**

Após a integração dos sensores de umidade (figura 11) e temperatura (figura 12) foram realizados testes fora do ambiente de simulação adequado para verificar se os mesmos estavam funcionando.

Figura 11 - Resultado do teste com o sensor de umidade do ar em ambiente externo

![](assets/md/smart_farm/image11.png)

**Fonte: Autoria própria (2022)**

O sensor de umidade do ar obteve sucesso e atendeu ao esperado exibindo no sistema Web algumas variações encontradas em ambiente externo como mostra a figura 11.

Figura 12 - Resultado do teste com o sensor de temperatura em ambiente externo

![](assets/md/smart_farm/image12.png)

**Fonte: Autoria própria (2022)**

O sensor de temperatura teve êxito durante os testes e no sistema Smart Farm

apresentou algumas variações relativas ao ambiente externo como mostra a figura 12.

Figura 13 - Sensor de luminosidade em funcionamento na luz ambiente

![](assets/md/smart_farm/_page_8_Picture_10.jpeg)

**Fonte: Autoria própria (2022)**

Foi realizada a integração do sensor de luminosidade e verificado que estava em pleno funcionamento como mostra a figura 13.

#### **AMBIENTE** DE **SIMULAÇÃO RURAL** E **INTEGRAÇÃO** AO **SISTEMA** WEB

Após averiguar a funcionalidade dos sensores, foi criado um ambiente de testes (figura 14) simulando as condições de umidade, temperatura e solo para verificar a eficácia e aplicabilidade dos sensores em conjunto ao sistema Web. Dentro de uma bacia de alumínio foi colocado adubo e plantas artificiais para ilustrar o cenário rural dividindo espaços com placas de isopor.

Figura 14 - Ambiente para teste e simulação da Smart Farm

![](assets/md/smart_farm/_page_9_Picture_4.jpeg)

#### **Fonte: Autoria própria (2022)**

Posterior à criação do ambiente e simulação rural (figura 14) foi realizada a montagem da placa Esp 32 com os sensores como mostra a figura 15.

> Figura 15 - Estrutura com a placa Esp 32 montada junto aos sensores de luminosidade, temperatura e umidade.

![](assets/md/smart_farm/_page_9_Picture_8.jpeg)

**Fonte: Autoria própria (2022)**

A estrutura com os sensores (figura 15) foi montada e corretamente disposta sobre a maquete para realizar os testes de medição das variabilidades.

O sistema Web através do sensor DHT11 mede a temperatura (figura 16).

Figura 16 - Tela de exibição com gráficos da medição de temperatura e luminosidade

![](assets/md/smart_farm/image16.png)

**Fonte: Autoria própria (2022)**

O sensor BHT1750 é responsável pela medição de luminosidade do ambiente como mostra a figura 16.

Figura 17 - Tela de exibição com gráficos da medição de umidade de ar e solo

![](assets/md/smart_farm/image17.png)

**Fonte: Autoria própria (2022)**

E o DHT22 comunica a umidade de ar enquanto o Hygrometer Soil informa a umidade do solo (figura 17).

#### **CONSIDERAÇÕES FINAIS**

A agricultura de precisão com a integração da Internet das Coisas (IoT) tornou-se uma realidade que está ao alcance de todos, já que a proposta em torno dessa ideia apresenta benefícios à produção agrícola com custos reduzidos.

O sistema teve como problema norteador a falta de informações climáticas que possam ser aproveitadas a favor de melhorias na agricultura como: melhor época para plantar, melhor época para aplicação de insumos, redução do desperdício de recursos (água, insumos, mão de obra). Isso põe em aplicabilidade a Agricultura de Precisão (AP), que demonstra cada vez mais a importância da agregação do desenvolvimento tecnológico para a agricultura.

É possível desenvolver tecnologias capazes de realizar leituras de diferentes variações climáticas, com muitos componentes que podem ser adquiridos através da Internet e de baixo custo, como demonstrado ao longo desta revisão. Os dados que são capturados pelos sensores e processados pela central demonstram-se informações de grande valor para os agricultores que tanto buscam por desenvolvimento.

Faz-se necessário destacar também que o sistema Smart Farm limitou-se a capturar dados climáticos por meio de sensores e aplicação de IoT e armazená-los, é primordial que trabalhos futuros deem sequência aos apontamentos aqui feitos, tais como melhoria da rede com aplicação de outros protocolos além do Wi-Fi, maior autonomia elétrica, aplicação de análises preditivas e estatísticas ao dataset criado, são algumas possibilidades de continuidade

#### **REFERÊNCIAS BIBLIOGRÁFICAS**

ARTUZO, Felipe D.; SOARES, Caroline; WEISS, Claudete Rejane. **Inovação** de **Processo:** O **Impacto Ambiental** e **Econômico** da **Adoção** da **Agricultura** de **Precisão.** Revista Espacios, v. 38, n. 2, p. 1-6, 2017. Disponível em: <https://www.revistaespacios.com/a17v38n02/a17v38n02p06.pdf>. Acesso em: 23 mai. 2022.

ASHTON, Kevin. **That 'Internet** of **Things' Thing:** In the **Real World, Things Matter more than Ideas**. RFiD Journal, 2009. Disponível em: <https://www.rfidjournal.com/that-internet-of-things-thing>. Acesso em: 19 mai. 2022.

BRITO, Lucas L. F.; MIRANDA NETO, Milton; OLIVEIRA, Monica R. F.; MORAES, Ígor A.; MUNIZ, Vinicius Angelo O. **Protocolos** de **Comunicação para Internet** of **Things (IoT).** Intercursos Revista Científica, Ituiutaba, v. 17, n. 1, p. 57-73, jan.-jun., 2018.

Disponível em:

https://revista.uemg.br/index.php/intercursosrevistacientifica/article/view/3712/2089>. Acesso em: 22 mai. 2022.

CHASE, Jim. The **Evolution** of the **Internet** of **Things**. Texas Instruments, v. 1, p. 1-7, 2013. Disponível em: <https://www.researchgate.net/publication/273513489_Automatisierungssysteme_mit_Web

Technologien>. Acesso em: 19 mai. 2022.

COSTA, Cainã L.; OLIVEIRA, Letícia; MÓTA, Léia Michele S. **Internet** das **coisas (IOT):** um **estudo exploratório** em **agronegócios**. In: SIMPÓSIO DA CIÊNCIA DO AGRONEGÓCIO, 6., Porto Alegre, 2018. Disponível em: <https://www.ufrgs.br/cienagro/wp-content/uploads/2018/10/Internet-das-coisas-IOT-um-estu do-explorat%C3%B3rio-em-agroneg%C3%B3cios.docx-Cain%C3%A3-Lima-Costa.pdf>. Acesso em: 21 mai. 2022.

EVANS, Dave. A **Internet** das **Coisas: Como** a **Próxima Evolução** da **Internet está Tudando Tudo.** Disponível em:

<https://www.cisco.com/c/dam/global/pt_br/assets/executives/pdf/internet_of_things_

iot_ibsg_0411final.pdf>. Acesso em: 19 mai. 2022.

IOT Solutions World Congress (Barcelona). IOT **TRANSFORMING** THE **FUTURE** OF **AGRICULTURE.** [S. l.], 2020. Disponível em: https://www.iotsworldcongress.com/iot-transforming-the-future-of-agriculture/#:~:text=IoT% 20solutions%20are%20focused%20on,costs%20is%20called%20precision%20agriculture. Acesso em: 23 mai. 2022.

GONÇALVES, Claudiana F. B.; CAMPOS, Maria Eduarda; ROCHA, Náguila; OLIVEIRA, João Paulo L. Um **Estudo Sobre** a **Influência** da IoT no **Agronegócio.** Revista Gestão, inovação e empreendedorismo, Ribeirão Preto,v. 1, n. 1, p. 25-35, 2018. Disponível em: <http://ojs.faculdademetropolitana.edu.br/index.php/revista-gestao-inovacao/article/view/9/2 >. Acesso em: 24 mai. 2022.

LAMPARELLI, Rubens Augusto C. **Agricultura** de **Precisão.** Disponível em:

<https://www.agencia.cnptia.embrapa.br/gestor/cana-de-acucar/arvore/CONTAG01_72_711 00516719.html>. Acesso em: 23 mai. 2022.

LEITE, JR Emiliano; MARTINS, Paulo S.; URSINI, Edson L. A **Internet** das **Coisas (IoT): Tecnologias** e **Aplicações.** In: Brazilian Technology Symposium. 1., Campinas, dezembro de 2017. Disponível em:

<https://www.lcv.fee.unicamp.br/images/BTSym-17/Papers/76926.pdf>. Acesso em:

25 mai. 2022.

MOLIN, José Paulo. **Tendências** da **Agricultura** de **Precisão** no **Brasil**. In: CONGRESSO BRASILEIRO DE AGRICULTURA DE PRECISÃO, Piracicaba, 2004. Disponível em: < http://www.ler.esalq.usp.br/download/TEC%202004.12.pdf>. Acesso em: 20 mai. 2022.

PRADO, Henrique. **Precisão** na **Agricultura**. Revista Fonte, Belo Horizonte, v. 15, n. 20, p. 46-48, dez. 2018. Disponível em: <https://www.prodemge.gov.br/images/com_arismartbook/download/26/revista_20.p>. Acesso em: 22 mai. 2022.

RIBEIRO, Josiana G.; MARINHO, Douglas Y.; ESPINOSA, Waldo M. **Agricultura 4.0: Desafios** à **Produção** de **Alimentos** e **Inovações Tecnológicas.** In: SIMPÓSIO DE ENGENHARIA DE PRODUÇÃO, 2018, Catalão, 2018. Disponível em: <https://files.cercomp.ufg.br/weby/up/1012/o/AGRICULTURA_4.0_DESAFIOS_%C3%80_ PRODU%C3%87%C3%83O_DE_ALIMENTOS_E_INOVA%C3%87%C3%95ES_TECNO L%C3%93GICAS.pdf>. Acesso em: 23 mai. 2022.

SANTOS, Bruno P. et al. **Internet** das **Coisas:** da **Teoria** à **Prática.** In: Minicursos SBRC-Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos, 31., 2016. Disponível em:

<https://homepages.dcc.ufmg.br/~mmvieira/cc/papers/internet-das-coisas.pdf>. Acesso em: 20 mai. 2022.

SUNDMAEKER, Harald. et al. **Internet** of **Food** and **Farm 2020.** In: O. Vermesan, &

P. Friess (Eds.), Digitizing the Industry: Internet of Things Connecting the Physical,

Digital and Virtual Worlds. River Publishers, 2016, p. 129-150. Disponível em: <http://www.internet-of-things-research.eu/pdf/Digitising_the_Industry_IoT_IERC_2016_Cl uster_eBook_978-87-93379-82-4_P_Web.pdf#Page=154>. Acesso em: 25 mai. 2022.

VASCONCELOS, Mariana. A Era da **Agricultura 4.0.** Revista Fonte, Belo Horizonte,

v. 15, n. 20, p. 85-89, dez. 2018. Disponível em: <https://www.prodemge.gov.br/images/com_arismartbook/download/26/revista_20.p df>. Acesso em: 23 mai. 2022.

VILLAFUERTE, Andrés. **Agricultura 4.0: Estudo** de **Inovação Disruptiva** no **Agronegócio Brasileiro.** In: INTERNATIONAL SYMPOSIUM ON TECHNOLOGICAL INNOVATION, 9., 2018, Aracaju. Anais eletrônicos [...]. Aracaju: API/UFS, p. 150-162, 2018. D.O.I.: 10.7198/S2318-3403201800010018. Disponível em: <http://www.api.org.br/conferences/index.php/ISTI2018/ISTI2018/paper/download/56 7/276>. Acesso em: 21 mai. 2022.
