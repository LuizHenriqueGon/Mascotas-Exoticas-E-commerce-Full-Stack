-- 1. Desliga a segurança temporariamente para limpar a tabela antiga
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE produto;
SET FOREIGN_KEY_CHECKS = 1;

-- 2. Insere os 40 animais com as Fichas Técnicas Completas
INSERT INTO produto (nome, nome_cientifico, grupo, preco, estoque, url_imagem, local_origem, criador, descricao, alimentacao, habitat) VALUES 

-- === MAMÍFEROS (10) ===
('Furão (Ferret)', 'Mustela putorius furo', 'Mamífero', 8500.00, 3, 'https://images.unsplash.com/photo-1615049539775-68045559d825', 'América do Norte / Europa', 'Mustelídeos Sul', 
'O furão é um carnívoro estrito, extremamente energético, curioso e brincalhão. Eles dormem cerca de 14 a 18 horas por dia, mas quando acordados, são pura energia e adoram roubar objetos pela casa. Importante: No Brasil, são vendidos obrigatoriamente castrados e microchipados.', 
'Ração Super Premium específica para furões (alta proteína animal e gordura). Petiscos permitidos: pedaços pequenos de carne crua ou cozida (sem tempero). Evite frutas e doces.', 
'Necessitam de gaiolas grandes e verticais, com redes, túneis e plataformas. Sensíveis ao calor (acima de 27°C podem sofrer insolação). Devem ser soltos diariamente por pelo menos 2h sob supervisão.'),

('Hedgehog (Ouriço Pigmeu)', 'Atelerix albiventris', 'Mamífero', 1800.00, 5, 'https://images.unsplash.com/photo-1599488615731-7e5c28a39f1c', 'África Central', 'Exotic Paws', 
'Pequeno mamífero noturno coberto de espinhos. É solitário e, quando assustado, vira uma bolinha. Possui um comportamento curioso chamado "ungimento" (cobre-se de espuma ao sentir cheiros novos). Não lança espinhos.', 
'Insetívoros onívoros. Base: Ração Super Premium para Gatos (Castrados/Light). Complemento: Insetos vivos ou desidratados (tenébrios, grilos) 2-3x na semana.', 
'Terrário de vidro ou caixa plástica ventilada (min 80x40cm). Temperatura controlada (24-28°C) é vital; frio pode ser fatal. Roda de exercícios de fundo liso é obrigatória.'),

('Chinchila', 'Chinchilla lanigera', 'Mamífero', 450.00, 8, 'https://images.unsplash.com/photo-1595624132647-79888ccc0837', 'Andes (Chile)', 'Recanto dos Andes', 
'Roedor famoso pela pelagem extremamente densa e macia. São animais noturnos, saltadores e muito inteligentes. Podem viver até 20 anos em cativeiro.', 
'Herbívoro estrito. 80% Feno de Capim à vontade. Ração própria para chinchilas (limitada). Proibido sementes gordurosas (girassol) e alimentos úmidos.', 
'Gaiola vertical alta com prateleiras de madeira. Sensível à umidade e calor. Banho apenas com pó de carbonato de cálcio (nunca água).'),

('Porquinho-da-Índia', 'Cavia porcellus', 'Mamífero', 80.00, 15, 'https://images.unsplash.com/photo-1535241556845-3a31a1913f28', 'Peru', 'Rodentia Farm', 
'Dócil, sociável e muito vocal (emite sons variados). Gregário, vive muito melhor em pares ou grupos do mesmo sexo.', 
'Herbívoro. Necessita de Vitamina C externa diariamente (não produz sozinho). Base: Feno à vontade, vegetais frescos (pimentão, chicória) e ração fortificada.', 
'Cercado amplo e plano (chiqueirinho) com forração macia (soft). Não usam rodinhas de exercício (coluna frágil).'),

('Hamster Sírio', 'Mesocricetus auratus', 'Mamífero', 40.00, 20, 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca', 'Síria', 'Little Pets SP', 
'O maior dos hamsters domésticos. Estritamente solitário e territorial (briga até a morte se junto com outro). Noturno e armazena comida nas bochechas.', 
'Mix de sementes de qualidade, ração extrusada e proteína ocasional (ovo cozido).', 
'Gaiola com tubos e roda de exercício grande (min 28cm diâmetro) para não curvar a coluna.'),

('Hamster Anão Russo', 'Phodopus sungorus', 'Mamífero', 35.00, 18, 'https://images.unsplash.com/photo-1548767797-d8c844163c4c', 'Sibéria', 'Little Pets SP', 
'Pequeno e veloz, possui uma listra dorsal característica. Pode viver em pares do mesmo sexo se habituados desde filhotes.', 
'Sementes pequenas, ração específica e larvas secas.', 
'Gaiola com malha fina ou terrário de vidro para evitar fugas.'),

('Gerbil', 'Meriones unguiculatus', 'Mamífero', 30.00, 12, 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c', 'Mongólia', 'Deserto Pet', 
'Roedor do deserto, muito sociável e quase não produz odor na urina. Ativo em ciclos durante dia e noite.', 
'Ração para hamsters/gerbils e sementes.', 
'Terrário com camada grossa de substrato para cavar túneis (adoram escavar).'),

('Twister (Rato Dumbo)', 'Rattus norvegicus', 'Mamífero', 50.00, 10, 'https://images.unsplash.com/photo-1603525547631-f925b689a74a', 'Mundial', 'Ratatouille Criações', 
'Considerado o "cachorro" dos roedores pela alta inteligência e apego ao dono. Aprende truques e atende pelo nome.', 
'Ração extrusada específica (evite mix de sementes pobres), frutas, legumes e ovos cozidos.', 
'Gaiola alta com redes, cordas e brinquedos de inteligência. Vivem melhor em duplas.'),

('Coelho Mini Lionhead', 'Oryctolagus cuniculus', 'Mamífero', 250.00, 6, 'https://images.unsplash.com/photo-1585110396093-6e01b67f607c', 'Europa (Bélgica)', 'Orelhudos Farm', 
'Coelho anão com uma "juba" característica ao redor da cabeça. Temperamento geralmente calmo e dócil.', 
'Feno de capim (80% da dieta), folhas verdes escuras (15%) e ração de coelho (5%). Cenoura apenas como petisco (muito açúcar).', 
'Cercado interno ou viver solto pela casa (bunny proof). Precisa se exercitar e roer brinquedos de madeira.'),

('Mini Pig', 'Sus scrofa domesticus', 'Mamífero', 1500.00, 2, 'https://images.unsplash.com/photo-1516641396056-0ce60a85d49f', 'EUA', 'Micro Pig BR', 
'Porco selecionado para ser menor, mas ainda robusto (40-60kg adulto). Mais inteligente que cães, aprendem a usar banheiro e passear na guia.', 
'Ração específica para mini pigs, muitos vegetais, frutas e raízes.', 
'Casa com quintal. Precisa de área para fuçar na terra e proteção contra sol forte (protetor solar ou sombra).'),

-- === RÉPTEIS (14) ===
('Corn Snake', 'Pantherophis guttatus', 'Réptil', 450.00, 10, 'https://images.unsplash.com/photo-1559214369-a6b1d7919865', 'EUA', 'Serpentário Jiboia', 
'A serpente mais popular do mundo. Dócil, colorida e de tamanho gerenciável (1.2m). Ótima para iniciantes.', 
'Carnívora estrita: Roedores (camundongos) descongelados a cada 7-10 dias.', 
'Terrário horizontal com aquecimento (Toca quente 29-30°C / Fria 24-25°C). Substrato: Aspen.'),

('Jiboia BCI', 'Boa constrictor imperator', 'Réptil', 4000.00, 3, 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce', 'América Central', 'Jiboias Brasil', 
'Serpente clássica, robusta e muito longeva (20-30 anos). Animais legalizados nascidos em cativeiro são dóceis.', 
'Ratos (Rattus) ou coelhos pequenos, sempre descongelados.', 
'Terrário grande e reforçado (min 150cm). Alta umidade necessária para troca de pele (60-70%).'),

('Jiboia Arco-Íris', 'Epicrates assisi', 'Réptil', 2800.00, 3, 'https://images.unsplash.com/photo-1596711684368-2e06173d1c16', 'Caatinga (Brasil)', 'Caatinga Repteis', 
'Espécie nativa deslumbrante que reflete as cores do arco-íris sob a luz (iridescência). Hábitos noturnos.', 
'Roedores descongelados.', 
'Terrário com alta necessidade de esconderijos e temperatura estável.'),

('Píton Real (Ball Python)', 'Python regius', 'Réptil', 3500.00, 4, 'https://images.unsplash.com/photo-1615233500570-c5a47e989c79', 'África Ocidental', 'Python Breeders', 
'Cobra robusta e tímida, vira uma "bola" quando assustada. Existem milhares de combinações de cores (morphs).', 
'Ratos descongelados. Podem fazer greve de fome no inverno.', 
'Terrário com umidade controlada (60%+) e aquecimento. Não precisa de muito espaço vertical.'),

('Leopard Gecko', 'Eublepharis macularius', 'Réptil', 1200.00, 8, 'https://images.unsplash.com/photo-1622288349271-e97c92f44760', 'Oriente Médio', 'Gecko Mania', 
'Lagarto terrestre noturno, possui pálpebras (pisca) e é muito simpático. Armazena gordura na cauda.', 
'Insetívoro: Grilos, baratas e tenébrios vivos, sempre polvilhados com Cálcio + D3.', 
'Terrário desértico com placa aquecida em um dos lados (precisa de calor na barriga para digestão).'),

('Crested Gecko', 'Correlophus ciliatus', 'Réptil', 3000.00, 4, 'https://images.unsplash.com/photo-1628148902506-69537616d252', 'Nova Caledônia', 'Gecko Mania', 
'Lagarto arborícola que parece um dragãozinho. Salta entre galhos e possui "cílios".', 
'Papas de frutas específicas (Crested Diet) e insetos ocasionais.', 
'Terrário vertical tropical com muitas plantas e umidade alta.'),

('Iguana Verde', 'Iguana iguana', 'Réptil', 2500.00, 2, 'https://images.unsplash.com/photo-1535591273668-578e31182c4f', 'América do Sul', 'Amazon Repteis', 
'Lagarto gigante e majestoso. Requer muito espaço e dedicação quando adulto. Pode ser territorial.', 
'Estritamente Herbívoro: Folhas verdes escuras, legumes ralados e frutas. NUNCA carne.', 
'Viveiro telado gigante com lâmpadas UVB potentes (Solar Glo ou similar) e muito calor.'),

('Teiú', 'Salvator merianae', 'Réptil', 2200.00, 3, 'https://images.unsplash.com/photo-1611704204423-45547477145d', 'América do Sul', 'Fauna Legal', 
'O lagarto mais inteligente das Américas. Pode ficar muito dócil e andar pela casa. Hiberna no inverno.', 
'Onívoro voraz: Carne, ovos, frutas doces, insetos e ração.', 
'Recinto externo (quintal adaptado) ou terrário muito grande com lâmpadas potentes.'),

('Dragão Barbudo (Pogona)', 'Pogona vitticeps', 'Réptil', 2500.00, 5, 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb', 'Austrália', 'Australian Dragons', 
'Lagarto muito interativo que "acena" com a pata. Ama o calor e tem espinhos macios.', 
'Onívoro: Vegetais (couve, rúcula) e insetos vivos (baratas/grilos).', 
'Terrário desértico com iluminação UVB 10.0 forte e alta temperatura (ponto quente 40°C).'),

('Jabuti-Piranga', 'Chelonoidis carbonarius', 'Réptil', 800.00, 10, 'https://images.unsplash.com/photo-1508455858334-95337ba25607', 'Brasil', 'Quelônios do Sul', 
'O quelônio mais querido do Brasil. Casco preto com manchas vermelhas. Vive 50-80 anos.', 
'Frutas (mamão, manga), vegetais, flores (hibisco) e proteína animal ocasional.', 
'Jardim ou terrário aberto com acesso ao sol e área sombreada com água.'),

('Jabuti-Tinga', 'Chelonoidis denticulatus', 'Réptil', 1000.00, 4, 'https://images.unsplash.com/photo-1437622645530-1e39026c7317', 'Amazônia', 'Quelônios do Sul', 
'Maior que o Piranga, prefere ambientes mais úmidos de floresta. Manchas amarelas.', 
'Frutas, folhas, cogumelos e insetos.', 
'Recinto úmido, sombreado e espaçoso com piscina rasa.'),

('Tigre d\'água', 'Trachemys dorbigni', 'Réptil', 350.00, 12, 'https://images.unsplash.com/photo-1596765793400-98308e426615', 'Sul do Brasil', 'Acqua Turtles', 
'Tartaruga aquática ativa. Cresce bastante e vive muitos anos.', 
'Ração para tartarugas, peixes pequenos e vegetais aquáticos.', 
'Aquaterrário com parte seca para banho de luz (UVB + Calor) e filtro potente.'),

('Cobra do Leite (Milk Snake)', 'Lampropeltis triangulum', 'Réptil', 1500.00, 5, 'https://images.unsplash.com/photo-1596573887467-f3c965c71317', 'Américas', 'Serpentário Color', 
'Falsa coral. Possui anéis coloridos (Vermelho-Preto-Branco) mimetizando a coral verdadeira. Inofensiva.', 
'Roedores descongelados.', 
'Terrário seguro à prova de fugas com esconderijos.'),

('Lagarto de Língua Azul', 'Tiliqua scincoides', 'Réptil', 4500.00, 2, 'https://images.unsplash.com/photo-1627926224163-54602c347e37', 'Austrália', 'Australian Dragons', 
'Lagarto robusto de patas curtas e língua azul cobalto usada para defesa. Muito calmo.', 
'Onívoro: Ração de gato premium, insetos, caracóis e vegetais.', 
'Terrário horizontal amplo com substrato macio.'),

-- === AVES (16) ===
('Cacatua Alba', 'Cacatua alba', 'Ave', 18000.00, 1, 'https://images.unsplash.com/photo-1605284411802-1279262f7902', 'Indonésia', 'Paraíso das Aves', 
'A "ave velcro". Extremamente carinhosa, gosta de colo constante. É barulhenta e exige um dono muito presente.', 
'Ração extrusada, muitas frutas, sementes germinadas e castanhas.', 
'Viveiro reforçado com muitos brinquedos de madeira para destruir. Precisa de horas solta.'),

('Cacatua Galah', 'Eolophus roseicapilla', 'Ave', 12000.00, 2, 'https://images.unsplash.com/photo-1551329388-1a5c464c1537', 'Austrália', 'Paraíso das Aves', 
'Cacatua rosa e cinza. Muito bonita e um pouco mais independente que a Alba, mas ainda exige atenção.', 
'Ração extrusada, vegetais e sementes (cuidado com obesidade).', 
'Viveiro espaçoso com área de voo.'),

('Papagaio do Congo', 'Psittacus erithacus', 'Ave', 16000.00, 2, 'https://images.unsplash.com/photo-1544377074-b77876a4df15', 'África Central', 'Wings Africa', 
'Considerada a ave mais inteligente do mundo. Pode falar centenas de palavras com contexto. Sensível a mudanças.', 
'Ração extrusada de alta qualidade, frutas, legumes cozidos e cálcio.', 
'Gaiola grande no centro da atividade da casa. Enriquecimento ambiental (brinquedos lógicos) é obrigatório.'),

('Eclectus', 'Eclectus roratus', 'Ave', 11000.00, 2, 'https://images.unsplash.com/photo-1552554278-657c00184451', 'Ilhas Salomão', 'Exotic Birds', 
'Dimorfismo sexual extremo: Macho é verde vibrante, Fêmea é vermelha e azul. Penas parecem pelos.', 
'Muitas frutas e vegetais frescos (têm trato digestivo mais longo, precisam de dieta úmida).', 
'Viveiro espaçoso.'),

('Ring Neck', 'Psittacula krameri', 'Ave', 1200.00, 8, 'https://images.unsplash.com/photo-1588661642959-5484501a44c7', 'Ásia / África', 'Indian Birds', 
'Periquito de colar. Excelente falador, voz "robótica". Personalidade independente, não gosta de muito aperto.', 
'Ração extrusada, sementes, frutas e flores.', 
'Gaiola média/grande com brinquedos.'),

('Calopsita', 'Nymphicus hollandicus', 'Ave', 250.00, 20, 'https://images.unsplash.com/photo-1517789178306-02758f8b34f2', 'Austrália', 'Asas & Cores', 
'A ave pet mais popular. Dócil, assobia músicas e adora carinho na cabeça (coçar o topete).', 
'Mix de sementes e ração extrusada. Vegetais verdes.', 
'Gaiola aberta e convívio solto pela casa.'),

('Periquito Australiano', 'Melopsittacus undulatus', 'Ave', 50.00, 25, 'https://images.unsplash.com/photo-1616428782352-8c4302213df6', 'Austrália', 'Asas & Cores', 
'Pequeno, colorido e tagarela. Muito ativo em bando.', 
'Sementes (painço/alpiste) e vegetais.', 
'Gaiola espaçosa, preferencialmente em pares.'),

('Agapornis Roseicollis', 'Agapornis roseicollis', 'Ave', 150.00, 15, 'https://images.unsplash.com/photo-1583168285906-89689408e001', 'África (Namíbia)', 'Lovebirds BR', 
'Pássaro do amor (Lovebird). Muito territorial mas leal ao dono. Personalidade forte em corpo pequeno.', 
'Sementes e ração extrusada.', 
'Gaiola média com brinquedos coloridos.'),

('Agapornis Personata', 'Agapornis personatus', 'Ave', 180.00, 10, 'https://images.unsplash.com/photo-1535446071477-987829705a1e', 'Tanzânia', 'Lovebirds BR', 
'Conhecido pela "máscara" preta na cabeça e peito amarelo. Cores vibrantes.', 
'Sementes e ração.', 
'Gaiola média.'),

('Agapornis Fischeri', 'Agapornis fischeri', 'Ave', 180.00, 10, 'https://images.unsplash.com/photo-1543501758-a5b4c9356d78', 'Tanzânia', 'Lovebirds BR', 
'Parecido com o Roseicollis mas com anel branco ao redor dos olhos e bico vermelho intenso.', 
'Sementes e ração.', 
'Gaiola média.'),

('Canário Belga', 'Serinus canaria', 'Ave', 100.00, 15, 'https://images.unsplash.com/photo-1596798008855-520e50942557', 'Ilhas Canárias', 'Cantos do Sul', 
'Mestre do canto. Existem diversas cores (Amarelo, Cobre, Branco) e tipos de plumagem.', 
'Alpiste, colza e farinhada de ovo.', 
'Gaiola retangular para voo horizontal.'),

('Diamante de Gould', 'Erythrura gouldiae', 'Ave', 350.00, 6, 'https://images.unsplash.com/photo-1555543787-84615a995727', 'Austrália', 'Exotic Finches', 
'Uma das aves mais coloridas do mundo. Tímido, sensível a mudanças de temperatura e estresse.', 
'Sementes pequenas (painço) e farinhada.', 
'Viveiro calmo sem correntes de ar.'),

('Diamante Mandarim', 'Taeniopygia guttata', 'Ave', 60.00, 12, 'https://images.unsplash.com/photo-1549419225-b44c69399426', 'Austrália', 'Exotic Finches', 
'Zebra Finch. Pequeno, ativo e emite sons parecidos com brinquedos de corda ("beep beep").', 
'Sementes exóticas.', 
'Gaiola em grupos, adoram companhia.'),

('Manon', 'Lonchura striata domestica', 'Ave', 40.00, 15, 'https://images.unsplash.com/photo-1610486796263-d2d473489370', 'Ásia (Doméstico)', 'Exotic Finches', 
'Excelente pai adotivo para outras aves. Muito sociável, pacífico e convive bem em colônia.', 
'Sementes.', 
'Gaiola espaçosa em bando.'),

('Calafate', 'Lonchura oryzivora', 'Ave', 120.00, 8, 'https://images.unsplash.com/photo-1595508821945-8f742416f406', 'Indonésia (Java)', 'Exotic Finches', 
'Pássaro Java Sparrow. Bico robusto rosa e canto suave. Plumagem cinza, branca ou creme.', 
'Sementes e arroz com casca.', 
'Gaiola espaçosa.'),

('Rosela', 'Platycercus eximius', 'Ave', 1500.00, 4, 'https://images.unsplash.com/photo-1618395535316-2495d4d38515', 'Austrália', 'Australian Birds', 
'Ave australiana de plumagem deslumbrante e colorida. Menos dócil ao toque, mais ornamental.', 
'Sementes, frutas e insetos.', 
'Viveiro grande para voo.'),

('Red Rumped', 'Psephotus haematonotus', 'Ave', 300.00, 6, 'https://images.unsplash.com/photo-1620696342898-050965c27635', 'Austrália', 'Australian Birds', 
'Periquito de dorso vermelho. Canto melódico agradável, diferente dos gritos de psitacídeos.', 
'Sementes e vegetais.', 
'Gaiola média.'),

('Arara Canindé (Legalizada)', 'Ara ararauna', 'Ave', 10000.00, 2, 'https://images.unsplash.com/photo-1543167812-32b05b5f891b', 'Brasil', 'Criadouro Conservacionista MG', 
'Símbolo do Brasil. Grande, barulhenta e exige espaço enorme. Inteligente e cria vínculo forte.', 
'Nozes, sementes grandes, frutas e ração específica.', 
'Viveiro gigante ou área de voo livre supervisionada.');