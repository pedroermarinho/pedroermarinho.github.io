# **Computação em névoa: uma solução para o desperdício hídrico na indústria**

**Adrine Brandão Teles do Nascimento¹ Pedro Eduardo Rodrigues Marinho¹ Jean Mark Lobo Oliveira² Manfrine Silva Santos²**

# **RESUMO**

Os sistemas de detecção de vazamento hídrico fornecem alerta imediato e localização precisa permitindo que seja encontrado um vazamento antes que a umidade possa danificar quaisquer computadores, conexões elétricas ou outros eletrônicos sensíveis se utilizando de sensores e demais tecnologias emergentes como Internet das Coisas (IOT) e Inteligência Artificial. Na pesquisa desenvolvida foi aplicado o referencial bibliográfico onde foi realizado a recolha para a temática: sistema de detecção de vazamento, computação em névoa, inteligência artificial. Com a pesquisa foi desenvolvido um protótipo de sistema que após os testes realizou seu objetivo de monitorar e coletar dados de picos de vazões de água, dessa forma foi criado um perfil de consumo do usuário acionando um alerta caso houvesse anomalias para operações de contenção hídrica.

**Palavras-chave:** Sistema de detecção de vazamento, Computação em Névoa, Inteligência Artificial.

# **1 INTRODUÇÃO**

O uso eficiente da água pela indústria tem se tornado um desafio para as empresas desde a criação da Lei Nº 9433/97 que rege sobre a utilização de recursos hídricos, o setor de manufatura investe em métodos de reaproveitamento. De acordo com a Confederação Nacional das Indústrias (2017) são consumidos aproximadamente 2,3 milhões de litros de águas fluviais para uso industrial sendo sua maior parte inutilizada devido a vazamentos por utilização de tubulações arcaicas. Dessa forma, urge a necessidade de propostas que inviabilizam o desperdício hídrico, uma vez que é um recurso natural que se torna escasso. Diante desta problemática soluções baseadas em tecnologia podem surgir a fim de monitorar o consumo de água detectando vazões e desvios baseados em um padrão de gasto estabelecido.

Nesse contexto, há capacidade de produzir resultados eficazes e rápidos por meio de sistemas de controle e monitoramento da atividade hídrica emitindo alertas quando um vazamento ocorrer no sistema de tubulação. Diante disso, o emprego de tecnologias que possibilitem inspecionar o escape de água para evitar o desperdício tornou-se uma problemática significativa. Segundo Fuad e Herman (2019) utilizar sensores para monitorar redes de distribuição é o método mais recomendado e facilita o monitoramento de sistemas hídricos, esses dispositivos notificam em tempo real qualquer incidência e o algoritmo prevê vazamentos antes que ocorram.

Ao observar a necessidade de uma resposta rápida em procedimentos de contenção hídrica em ambiente industrial, surge a escolha da computação em névoa visando levar parte do processamento dos dados para mais perto do problema real, assim permitindo que mesmo sistemas que estejam ocasionalmente offline ou com baixa conectividade possam executar soluções de formas independentes. A computação em nuvem possui uma infraestrutura centralizada com grande capacidade de processamento e armazenamento, porém é altamente independente de conexões de internet. Já a névoa emerge como uma extensão desta tecnologia a qual não exige alta conectividade e oferece resultados com maior rapidez. Segundo Adel (2020) essa camada de rede tem a habilidade de lidar com aplicações que exigem dados instantâneos além de reforçar a comunicação, privacidade e segurança.

O presente artigo visa apresentar uma solução para melhoria no processo de utilização dos recursos hídricos na indústria reduzindo desperdícios por meio do uso de Inteligência Artificial com recursos em borda. Através de um sistema descentralizado com estes recursos e aprendizado de máquina utilizando algoritmos de regressão para identificar desvios de padrão

a fim de detectar possíveis vazamentos de água, possibilitando a realização de operações de retenção.

# **2 REFERENCIAL TEÓRICO**

A pesquisa bibliográfica do presente artigo foi subdividida em quatro tópicos: desperdício hídrico na indústria; inteligência artificial na indústria; computação em névoa; sistemas de contenção hídrica.

# **2.1 DESPERDÍCIO HÍDRICO NA INDÚSTRIA**

A indústria é o conjunto de todas as atividades econômicas incluindo empresas, pessoas e organizações envolvidas na produção de bens e serviços para um determinado campo. Geralmente são categorizadas pelos bens e serviços que produzem. Esse setor utiliza água de diversas maneiras, incluindo desde o processo de dissolução de produtos químicos usados na produção dos produtos fabricados até o aquecimento e resfriamento de maquinários para evitar que superaqueça. Nesse contexto há desperdícios devido à vazão de água que ocorre principalmente por utilização de tubulação industrial antiga.

A água é um recurso natural crucial e amplamente mal utilizado, cerca de um terço das empresas de abastecimento hídrico no mundo, tem perdas em cerca de 40% devido a vazamentos (COELHO; GLÓRIA; SEBASTIÃO, 2020). Níveis mais altos de desperdício de água estão extensivamente associados à perda de receita, além de maior estresse no ecossistema aquático devido ao aumento dos níveis de extração hídrica de lagos e rios, redução na confiabilidade do sistema e contribuição para falhas de tubulação. Segundo a _Eltek Appliance,_ em 2018, ocorreram prejuízos financeiros às empresas de variados segmentos um valor equivalente a mais de 32 bilhões de euros no mundo inteiro.

O monitoramento do consumo e a detecção oportuna de respingos e derramamentos são essenciais para minimizar as consequências dos vazamentos de água nas empresas. Além dos custos econômicos e financeiros associados às vazões de água, há uma preocupação com a segurança principalmente em ambientes industriais e de manufatura. Isso é evidente em indústrias como a fabricação de aço, nas quais os fornos são comumente usados. Alabi et al. (2019) ainda aponta que: Atualmente, muitos países do mundo estão enfrentando diversos desafios hídricos, e há a necessidade de adotar tecnologias inovadoras da Indústria 4.0 a fim de melhorar, gerenciar e distribuir a água usando tecnologias inteligentes do século 21 que também são conhecidas como tecnologias disruptivas.

# **2.2 INTELIGÊNCIA ARTIFICIAL NA INDÚSTRIA**

A Inteligência Artificial (IA) é um subcampo da ciência da computação e pode ser definida como a capacidade de uma máquina em imitar o comportamento humano. De acordo com Ertel (2018), a definição mais suficiente é que sua função é resolver problemas o mais próximo da sapiência humana.

Passados 60 anos desde o surgimento da IA em 1956 com John McCarthy finalmente a indústria pôde desencadear uma quarta revolução industrial utilizando-se dessa ferramenta inteligente. Recentemente essa tecnologia tem se destacado, pois os avanços expandiram os limites da automação para além das atividades manuais e operacionais que já ocorrem desde a primeira revolução industrial, enquanto os processos e tarefas intelectuais que são altamente dependentes da cognição foram deixados quase exclusivamente para humanos muito habilidosos. Para Nascimento e Bellini (2018), mesmo que os computadores sejam capazes de fazer cálculos difíceis e decisões estruturadas, eles não são tão complexos quanto lidar com raciocínio abstrato e cenários instáveis - que ainda exigem a presença da agência humana.

A Inteligência Artificial permite o processamento e a análise confiáveis de conjuntos de dados grandes e complexos ao longo de todo o ciclo de vida para melhores produtos, software mais eficiente e produção otimizada. Sistemas que utilizam essa tecnologia podem ser aplicados em diversos cenários, pois são desenvolvidos para recuperar informações sobre a operação, condições e desempenho de qualquer tarefa ou ambiente que possa ser controlado remotamente.

Nos últimos anos, diversos setores da indústria adotaram esses sistemas, por exemplo, petroquímicas, automobilísticas, alimentares, têxtil, metalúrgica, mecânica, etc. Tecnologias inteligentes como a IA também desempenham um papel crucial no crescimento econômico sustentável.

# **2.3 COMPUTAÇÃO EM NÉVOA**

A computação em névoa é um paradigma que estende a computação e os serviços em nuvem, semelhante a esta a névoa fornece serviços de dados, computação, armazenamento e aplicativos para usuários finais. Existem inúmeras organizações investindo consideravelmente em pesquisas como a Cisco.

A computação em névoa é mais avançada e seu desempenho melhor do que a nuvem para lidar com alta demanda de solicitações de usuários e cenários emergentes, além de utilizar recursos de dispositivos de ponta. De acordo com Shakir et al. (2019), entre as características que destacam a névoa pode-se citar:

- Baixa inércia e área de borda: disposição de processamento a fim de fornecer melhor administração para clientes finais na borda da rede.
- Distribuição geográfica: a aplicação, o objetivo e os serviços de computação em névoa são amplamente distribuídos.
- Interações em tempo real: fornece serviços rápidos de interação instantânea na névoa.
- Heterogeneidade: a computação em névoa suporta dispositivos heterogêneos e nós de suporte em uma ampla variedade de ambientes.
- Interoperabilidade: oferece uma ampla gama de serviços para que os dispositivos em névoa sejam incorporados para streaming de serviços.

Com a quarta revolução industrial, observa-se que os custos de comunicação, computação e armazenamento diminuíram notavelmente, o que torna a integração de Inteligência Artificial e Computação em Névoa possível para aplicação econômica globalmente.

# **2.4 SISTEMAS DE CONTENÇÃO HÍDRICA**

Um sistema de detecção de vazamento de água pode responder instantaneamente em determinadas aplicações integradas para que as empresas possam continuar operando sem interrupções no serviço ou necessidade de ficar offline. Esses sistemas utilizam-se de cabos sensores ou por meio de ondas acústicas podem monitorar o ambiente em busca de qualquer derramamento de água que, de outra forma, passaria despercebido. Após detectar um problema, o sistema geralmente dispara um alarme a fim de alertar a equipe de engenharia para que os trabalhadores possam resolver o problema de forma eficiente e oportuna.

As áreas críticas que normalmente implantam sistemas de detecção de vazamento de água incluem data centers, salas de servidores e parques de produção onde o serviço não pode ser interrompido. Para evitar que haja o desperdício de água em qualquer ambiente contendo estrutura de tubulação hídrica é necessário um sistema de detecção de vazamentos não somente para fins sustentáveis, mas também para redução de custos operacionais.

O setor industrial, por exemplo, precisa monitorar constantemente os vazamentos e não pode custear falhas em detectores de vazamento de água, por isso o mercado tem investido cada vez mais nesses sistemas e na sua precisão para tratar erros. Um sistema de contenção de vazamentos é muito importante para a gestão de recursos hídricos (OLIVEIRA, 2018).

A crescente necessidade de se adotar medidas sustentáveis em qualquer setor de produção têm aumentado significativamente a busca por soluções mais acessíveis para

combater o desperdício hídrico. Detectores de vazamento são fáceis de usar e podem ser implantados em qualquer estrutura de tubulação, incluindo tubos de PVC e cloreto de polivinilo. Entre as soluções pode-se citar: sensor de vazamento por vibração acústica (geofone); sensor de inundação; sensor de vazamento a cabo.

De acordo com o relatório mundial da _Research_ and _Markets_ (2022), durante a crise do COVID-19, o mercado global de sistemas de detecção de vazamento de água que outrora era estimado em 4,6 bilhões de dólares no ano de 2022, agora deverá atingir $ 5,9 bilhões de dólares até 2026, crescendo a 5,8% durante o período de análise. A _Active Leak Detector Systems_, um dos segmentos analisados no relatório, deverá crescer até 6% para atingir $ 4,3 bilhões de dólares até o final do período. Atualmente, este segmento responde por uma participação de 30,9% do mercado global de sistemas de detecção de vazamento de água.

## **3 MATERIAIS E MÉTODOS**

A seção foi subdividida em dois tópicos: materiais, apresentando de modo sucinto as ferramentas utilizadas; métodos, explanando as etapas de elaboração do protótipo.

### **3.1 MATERIAIS**

Para melhor compreensão das ferramentas utilizadas no desenvolvimento do protótipo será realizada a divisão entre o hardware que alcança o nível físico e o firmware, software embarcado.

### **3.1.1 HARDWARE**

Para o desenvolvimento do protótipo foi utilizado a placa de prototipação ESP 32 como mostra a figura 1, através dela é possível utilizar tecnologia Wi-Fi para comunicação com o sistema central além de gravar rotinas de programação se integrando com sensores e periféricos.

Figura 1 - Placa Esp 32 WROOM-32 WIFI

![](assets/md/water_containment/_page_6_Picture_0.jpeg)

### **Fonte: Saravati, 2021**

Para medir a vazão hídrica foi utilizado o sensor de fluxo de água de 30 litros por minuto, como mostra a figura 2, a fim de analisar e enviar dados ao sistema principal sobre os vazamentos. Em conjunto foram utilizados dois leds de luz para indicar se o dispositivo está conectado ao sistema e para indicar se estão ocorrendo vazamentos.

Figura 2 - Sensor de fluxo de água 30 l/min

![](assets/md/water_containment/_page_6_Picture_4.jpeg)

**Fonte: DHGate, 2020**

Para finalizar o protótipo a nível físico, foi utilizado uma bateria de 3000 mAh para alimentar o circuito como ilustra a figura 3.

#### Figura 3 - Bateria de 3000 mAh

![](assets/md/water_containment/_page_7_Picture_1.jpeg)

**Fonte: DHGate, 2021**

# **3.1.2 SOFTWARE**

Para construção do sistema foi utilizado o banco de dados PostgreSQL e selecionada a linguagem Java com framework Spring Boot para receber, enviar, gravar e processar esses dados. Para a interface gráfica foi utilizado TypeScript integrado ao React para criar uma campo de interação web a fim de que os dados do hardware do protótipo possam ser visualizados pelo usuário.

# **3.2 MÉTODOS**

O desenvolvimento do protótipo foi dividido em três etapas: elaboração do protótipo, desenvolvimento do sistema central e processamentos dos dados.

# **3.2.1 ELABORAÇÃO DO PROTÓTIPO**

Na primeira etapa foi realizada a seleção dos materiais a serem utilizados para criação do hardware e do firmware. Foi selecionada a placa ESP 32 para prototipação e o sensor de fluxo de água 30 litros por minuto, além da definição de como o firmware seria codificado.

No desenvolvimento do firmware foi escolhida a plataforma Platformio em conjunto com editor de código Visual Studio Code para codificação como mostra a figura 4, esse conjunto proporciona suporte a placa ESP 32 e gerenciamento de dependência.

Figura 4 - Utilização da Platformio no Visual Studio Code
![](assets/md/water_containment/_page_7_Picture_2.jpeg)

### **Fonte: Autores, 2022.**

Para realizar a comunicação com o dispositivo foi utilizada a biblioteca _PubSubClient_ que utiliza o protocolo de comunicação MQTT, através dele é possível mandar e receber dados de forma rápida e com baixo consumo energético, ideal para dispositivos IOT (Internet das Coisas).

A leitura dos dados do sensor de fluxo de água é feita de forma contínua, porém os dados só são enviados caso a vazão da água seja maior que zero, desta forma o módulo de Wi-Fi/Bluetooth fica desligado até que haja dados para serem enviados de modo que a energia seja economizada. O dispositivo possui dois leds indicadores: o vermelho para indicar que estão ocorrendo anomalias no consumo de água como possíveis vazamentos; o azul para indicar que o dispositivo está enviando dados via MQTT.

# **3.2.2 DESENVOLVIMENTO DO SISTEMA CENTRAL**

Na segunda etapa foi decidido os detalhes relacionados ao sistema no nível de desenvolvimento da aplicação como: qual protocolo o firmware iria utilizar para se comunicar com o sistema principal e em qual linguagem seria desenvolvido.

O sistema central é composto por quatro partes que trabalham em conjunto: o Mosquitto como broken MQTT e o PostgreSQL como banco de dados; no back-end com uma API Rest construída em Java e framework Spring Boot; o front-end como o meio pelo qual o usuário pode ter acesso aos dados do sistema. Na construção do sistema foi utilizado o broken MQTT que será responsável por intermediar a comunicação dos dispositivos, há relação de ouvintes/emissores separadas por tópicos.

A API desenvolvida tem como uma de suas funções escrever no tópico _Sensores_ do broken, "escutar" todas as mensagens provenientes dos dispositivos de hardware e armazenar os dados no banco. Outros papéis por ela desempenhados pode-se citar a exposição dos dados armazenados e processados para serem consumidos pelo usuário ou outros sistemas através de uma Rest API. A construção da interface foi desenvolvida em TypeScript e React, onde há comunicação com a API mostrando os dados processados de forma legível para o usuário através de uma interface Web, a qual apresenta informações por meio de gráficos de linha e de velocímetro.

### **3.2.3 PROCESSAMENTO DOS DADOS**

Na terceira etapa foi realizado o tratamento e processamento dos dados onde foi catalogado por minutos, horas e dia, sendo possível definir um perfil de consumo e por fim identificar possíveis vazamentos. Por meio da coleta dos dados foi realizada a média de vazão de água de acordo com as variáveis de tempo, com isso foi definido o perfil de consumo médio.

Portanto os dados são mostrados para o usuário através da interface Web para que ele possa acompanhar interativamente o seu consumo de água. Em intervalos de tempo o sistema central disponibiliza a média dos valores máximos no tópico _ALERTADEVAZAO_ onde esse valor é armazenado no dispositivo e o mesmo os processa em tempo real acionando um alerta de vazamento caso encontre alguma anormalidade. Faz-se necessário ressaltar que o cenário de prototipagem utilizado foi o doméstico mas é possível adaptar para o meio industrial.

### **4 RESULTADOS**

Através dos dados gerados pelo dispositivo ao ser instalado em uma residência doméstica foi possível criar um perfil de consumo hídrico, os dados foram catalogados seguindo os filtros: minutos, horas,diário e mensal. Com base no padrão de gasto hídrico, foi analisada as médias de vazão de água como mostra o gráfico 1, dessa forma foi utilizado aprendizado de máquina para prever a quantidade de consumo considerada normal a ser utilizada.

Gráfico 1 - Picos de vazão de água por dia

![](assets/md/water_containment/_page_10_Figure_0.jpeg)

**Fonte: Autores, 2022**

No gráfico 1 os valores na vertical indicam a quantidade de litros consumidos por minuto e na horizontal os dias do mês correspondente, após a observação de consumo na casa, analisou-se que entre os dias 21 à 25 de outubro houve um aumento de consumo alcançando aproximadamente 14 litros por minuto. Conclui-se que há um padrão onde os dias em que o recurso é bastante utilizado compreendem em sua maioria os fins de semana quando os usuários passam mais tempo em casa.

Por ser um dispositivo alimentado por uma bateria de 3000 mAh o módulo de comunicação do Wi-Fi e a conexão com o broken é desligada até que seja detectada a vazão hídrica, assim economizando em torno de 80mAh ~ 90mAh e possibilitando que o dispositivo opere por mais tempo sem a necessidade de carregamento. Já que o dispositivo não está sempre conectado ao broken não é possível realizar operações de contenção hídrica a partir do sistema central e com isso fez-se necessário trazer parte do processamento para a borda.

Por meio do sistema Web o usuário pode acessar seu perfil de consumo e verificar os períodos de maior consumo de água além de ter acesso ao seu último fluxo registrado como mostra a figura 5, auxiliando no controle do desperdício tanto de recurso hídrico quanto financeiro.

Figura 5 - Aplicação Web

![](assets/md/water_containment/_page_11_Picture_0.jpeg)

**Fonte: Autores, 2022**

A figura 5 mostra o valor no momento exato em que foi registrada a vazão de água no dia correspondente ao exato momento em que o perfil é criado o sistema pode definir uma faixa de consumo ideal para aquele horário e caso o consumo ultrapasse o esperado será emitido um alerta de irregularidade através do velocímetro.

![](assets/md/water_containment/_page_11_Figure_3.jpeg)

![](assets/md/water_containment/_page_11_Figure_4.jpeg)

**Fonte: Autores, 2022**

No gráfico 2 foi registrado que os usuários consumiram um volume significativo de água entre o horário de 13:00 às 16:00. Ao decorrer do tempo em que o sistema compreende que vai alimentando a base de dados, o perfil de consumo do usuário vai se adequando aos novos dados e com isso pode-se obter uma dimensão mais exata.

# **5 CONSIDERAÇÕES FINAIS**

O artigo apresentou uma proposta de solução para a problemática de desperdício hídrico na indústria trazendo um sistema baseado em inteligência artificial em borda capaz de criar um perfil padrão através de aprendizado de máquina. Nessa aplicação foi possível entregar ao usuário a quantidade de água desperdiçada seguindo a média de litros por minuto

exibindo um alerta caso haja anormalidades na vazão hídrica para que um sistema de contenção seja ativado preventivamente.

Segundo El-Zahab e Zayed (2019) no século 21, a pesquisa em detecção de vazamentos obteve inúmeras publicações e contribuições com o aumento da importância da conservação e escassez de água e o surgimento de novas tecnologias que são capazes de facilitar e automatizar o processo de detecção de vazamentos. O campo de detecção de vazamentos está crescendo em relação aos usos tecnológicos, pois várias novas tecnologias estão sendo utilizadas continuamente para explorar aspectos capazes de apresentar resultados mais precisos. Espera-se que o campo cresça mais à medida que a necessidade aumenta nos setores de produção.

# **REFERÊNCIAS**

ADEL, A. **Utilizing technologies** of fog **computing** in **educational** IoT **systems: privacy, security,** and **agility perspective.** Journal of Big Data, v. 7, n. 1, 12 nov. 2020.

AGÊNCIA NACIONAL DE ÁGUAS - ANA (Brasília). Sistema Nacional de Informações sobre Recursos Hídricos. **Usos** da **água:** Uso de **água** no **setor industrial.** Brasília, 2017. Disponível em: <http://www.snirh.gov.br/portal/snirh/snirh-1/acesso-tematico/usos-da-agua>. Acesso em: 19 ago. 2022.

AHMAD FUAD, Z. et al. **Water leak detection method** in **water distribution network.** IOP Conference Series: Earth and Environmental Science, v. 357, n. 1, p. 012033, 1 nov. 2019.

ALABI, M.; TELUKDARIE, A.; JANSEN VAN RENSBURG, N. **Industry** 4.0 and **Water Industry:** A **south african perspective** and **readiness.** Proceedings of the American Society for Engineering Management 2019 40th International Annual Conference, v. 1, n. 9781713803348, p. 799, 26 out. 2019.

ALVES COELHO, J.; GLÓRIA, A.; SEBASTIÃO, P. **Precise Water Leak Detection Using Machine Learning** and **Real-Time Sensor Data**. MDPI IOT, v. 1, n. 2, p. 474–493, 3 dez. 2020.

CORPORATE FINANCE INSTITUTE. **Industry:** The **production** of **different types** of **goods** and **services.** Disponível em: <https://corporatefinanceinstitute.com/resources/knowledge/economics/industry/>. Acesso em: 17 set. 2022.

ERTEL, W.; BLACK, N.; MAST, F. **Introduction** to **artificial intelligence**. Cham, Switzerland: Springer, 2017.

ISSA, Mahmod. **Água** no **Setor Industrial Brasileiro.** Disponível em: <https://www.imasul.ms.gov.br/wp-content/uploads/2017/12/Uso-de-%C3%81gua-no-Setor-I ndustrial-Brasileiro.pdf>. Acesso em: 22 ago. 2022.

KUMAR, V. et al. **Comparison** of Fog **Computing & Cloud Computing**. International Journal of Mathematical Sciences and Computing, v. 5, n. 1, p. 31–41, 8 jan. 2019.

MAJID, M. et al. **Applications** of **Wireless Sensor Networks** and **Internet** of **Things Frameworks** in the **Industry Revolution 4.0:** A **Systematic Literature Review.** MDPI Sensors, v. 22, n. 6, p. 2087, 8 mar. 2022.

MARTINI, A.; RIVOLA, A.; TRONCOSSI, M. **Autocorrelation Analysis** of **Vibro-Acoustic Signals Measured** in a **Test Field** for **Water Leak Detection.** MDPI Applied Sciences, v. 8, n. 12, p. 2450, 1 dez. 2018.

MOUBAYED, A. et al. **Water Leak Detection Survey: Challenges & Research Opportunities Using Data Fusion & Federated Learning.** IEEE Access, v. 9, p. 40595–40611, 2021.

NASCIMENTO, A. M.; BELLINI, C. G. P. **Artificial intelligence** and **industry 4.0:** The **next frontier** in **organizations.** BAR - Brazilian Administration Review, v. 15, n. 4, 21 jan. 2019.

PARK, S.H; PARK, J.K. IoT **Industry & Security Technology Trends.** International journal of Advanced Smart Convergence, v. 5, n. 3, p. 27–31, 30 set. 2016.

PATWARDHAN, A. D. **Industrial Wastewater Treatment**. 2. ed. Delhi, Índia: PHI Learning Private Limited, 2017.

RESEARCH AND MARKETS. **Water Leakage Detector Systems Global Market Report 2022: Rising Water Pollution Levels Leading** to **Severe Shortage** of **Freshwater Drives** the **Demand** for **Water Leakage Detection Systems**. Disponível em: <https://www.globenewswire.com/en/news-release/2022/06/01/2453908/28124/en/Water-Lea kage-Detector-Systems-Global-Market-Report-2022-Rising-Water-Pollution-Levels-Leadingto-Severe-Shortage-of-Freshwater-Drives-the-Demand-for-Water-Leakage-Detection-System. html>. Acesso em: 5 set. 2022.

WATER BLOCK SOLUTIONS. How to **prevent water leaks** in **companies** and **factories.** Disponível em: <https://www.waterblocksolutions.com/en/water-leaks-in-companies-and-factories/>. Acesso em: 25 out. 2022.
