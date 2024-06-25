const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imgUrl: "https://utfs.io/f/d9c2db1a-ce79-4cec-8b83-6f81feb43221-yqn8tn.webp",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Conheça o MX Master 3S – um mouse icônico remasterizado. Sinta cada momento do seu fluxo de trabalho com ainda mais precisão, tato e desempenho, graças aos cliques silenciosos e um sensor de 8000 DPI sobre vidro13para 4mm de espessura mínima de vidro..",
        imgUrls: [
          "https://utfs.io/f/18d74d9f-8767-459f-800f-361b0630a241-nng1v9.webp",
          "https://utfs.io/f/d4747e00-58f4-4a1a-b688-3c0307a35eee-omvna5.webp",
          "https://utfs.io/f/7b5afaaa-0d52-42ed-a340-fef174a48128-7ez39m.webp",
          "https://utfs.io/f/8cdc9787-3b47-4081-bf06-aec304d02055-9fvk1m.webp",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Remova todos os obstáculos para vencer com nosso mouse PRO mais leve e rápido de todos os tempos. A nova arma perfeita para os melhores profissionais do mundo, que pesa menos de 63 gramas e proporciona deslizamento quase sem nenhum atrito. O PRO X SUPERLIGHT dá prosseguimento à nossa filosofia de design com ZERØ OPOSIÇÃO — nosso compromisso de remover todos os obstáculos para criar a conexão mais real possível entre o jogador e o jogo.",
        imgUrls: [
          "https://utfs.io/f/d9c2db1a-ce79-4cec-8b83-6f81feb43221-yqn8tn.webp",
          "https://utfs.io/f/50ba6302-c280-4309-a02d-cc2595160460-yqn8to.webp",
          "https://utfs.io/f/b0269ed1-7a83-440c-b1f3-cff25d951d7b-yqn8tp.webp",
          "https://utfs.io/f/a9ffaa37-e88f-4cb7-823d-5aa8b1cdf20c-yqn8tq.webp",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, 
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Mouse para jogos sem fio LIGHTSPEED projetado para um desempenho de ponta com as mais recentes inovações tecnológicas. Bateria com duração impressionante de 250 horas. Agora, em uma variedade de cores intensas.",
        imgUrls: [
          "https://utfs.io/f/6b63e551-7ded-4125-86de-dc033abd8378-n1k78m.webp",
          "https://utfs.io/f/260a500f-b3ad-49ac-8bf6-f3fedb92cf99-n1k78l.webp",
          "https://utfs.io/f/a1167a9d-fb61-4488-acc9-b8c029a820d9-n1k78k.webp",
          "https://utfs.io/f/926bdae1-06d7-4ce9-b16e-b2ed30faff93-n1k78j.webp",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Cobra Cherry",
        slug: "cobra-cherry",
        description: "Uma grande parceria Redragon x Kabum misturando alto desempenho e design exclusivo e inigualável para os gamers do Brasil.",
        imgUrls: [
          "https://utfs.io/f/86b0c661-1508-447b-bcc3-56771c15925d-ki2thc.webp",
          "https://utfs.io/f/f180a1e8-de7f-425a-8141-8ccd2c66ad57-ki2thd.webp",
          "https://utfs.io/f/0e4b3cde-194c-4b12-bceb-20fed794bb5e-ki2th9.webp",
          "https://utfs.io/f/477e8e0e-964e-4ee4-87a1-320510be0955-ki2thg.png"
        ],
        basePrice: 250,
        categoryId: mousesCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Cooler Master MM730",
        slug: "cooler-master-mm730",
        description: "O MM730 retém o espírito inovativo da Cooler Master enquanto mantém a estética familiar de um clássico Mouse pra jogos. Cada componente de nível profissional contribúem para sua responsividade na velocidade da luz, num piscar de olhos. pés de PTFE genuínos para um deslizar sem igual, sensor óptico com ajuste para até 16.000 DPI, e micro-switches ópticos com qualidade superior de registro e durabilidade.",
        imgUrls: [
          "https://utfs.io/f/07a0a8fb-ddae-4a42-987f-a1cf3bdf1a90-5fdm5p.png",
          "https://utfs.io/f/b25db50e-fdf1-4a47-9a4b-72c9e46db501-5fdm5q.png",
          "https://utfs.io/f/5542a1cc-19ca-4c89-8ba1-bf1032a15a47-gzkq5v.webp",
          "https://utfs.io/f/2856c716-0052-4242-930c-dda73669353e-q7nu7i.webp"
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 6, 
      },
      {
        name: "SuperFrame Flick Pro",
        slug: "superframe-flick-pro",
        description: "O Mouse Gamer SuperFrame Flick Pro não economiza quando se trata de precisão. Com o avançado sensor Pixart 3395, sua resolução de até 26.000 DPI proporciona uma precisão sem igual. ",
        imgUrls: [
          "https://utfs.io/f/f39b468b-4482-4113-b755-eb59319c6b01-6zubvz.png",
          "https://utfs.io/f/6c08f43b-ebc3-46b5-a63c-abe812b761fd-ufu6th.png",
          "https://utfs.io/f/033085bc-4803-400a-9cb3-8d37e60719ff-vd3upc.png",
          "https://utfs.io/f/7be8b415-ac43-4a6e-a495-9df6cd2576fd-5lupdw.png"
        ],
        basePrice: 500,
        categoryId: mousesCategory.id,
        discountPercentage: 53, 
      },
      {
        name: "Corsair Elite RGB",
        slug: "corsair-elite-rgb",
        description: "O mouse CORSAIR M65 RGB ELITE configurável para jogos é o mouse para jogos FPS mais avançado da CORSAIR, com estrutura de alumínio e o mais moderno sensor óptico com 18.000 DPI. ",
        imgUrls: [
          "https://utfs.io/f/f8c443a3-0761-496f-8e1a-c0df815890e1-x1xk42.png",
          "https://utfs.io/f/8a21f981-eebf-481e-86c9-6287f79f063e-x1xk3f.png",
          "https://utfs.io/f/9dd20a4e-e13b-406a-b789-4ef437ec92af-x1xk43.png",
          "https://utfs.io/f/742b7448-1c32-4929-9fae-d6b3c3a39394-enprf2.png"
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 41, 
      },
      {
        name: "Force One Lynx",
        slug: "force-one-lynx",
        description: "Nunca fique na mão: o Force One Lynx conta com 2 modos de conexão – com ou sem fio. Jogue sem atraso com o Dongle Sem Fio 2.4 GHz ou o levíssimo Cabo Paracord USB-C.",
        imgUrls: [
          "https://utfs.io/f/ea5d2dc5-7f00-4112-baac-d56069dbe7bc-xx02t3.png",
          "https://utfs.io/f/0082986e-e1df-42bc-bc50-3a0e5d134d14-ng57e0.png",
          "https://utfs.io/f/61b007e4-9eb8-48e8-9a42-b55d3f3ba99b-x3huit.png",
          "https://utfs.io/f/e176ba36-dfc9-4445-b7c9-bbf15aae1240-bnnph0.png"
        ],
        basePrice: 460,
        categoryId: mousesCategory.id,
        discountPercentage: 18, 
      },
      {
        name: "Marvo M727",
        slug: "marvo-m727",
        description: "No universo competitivo dos jogos, cada movimento conta, e a diferença entre a vitória e a derrota muitas vezes está na precisão e no controle que você tem sobre sua jogabilidade. O Mouse Gamer Marvo M727 é um equipamento que vai além, oferecendo precisão excepcional, personalização avançada e um toque de estilo com sua iluminação RGB deslumbrante. Este é o mouse que vai elevar sua experiência de jogo a novos patamares.",
        imgUrls: [
          "https://utfs.io/f/57a73f67-da5c-40c9-bf20-c703695301e2-4zyakk.png",
          "https://utfs.io/f/cea5c1eb-18e1-4d9f-b49b-15ea4c338d1a-ofmpr7.png",
          "https://utfs.io/f/2daea839-e060-49fb-8975-c27df891e656-5xu9ys.png",
          "https://utfs.io/f/408df4f3-11f3-4983-842b-34bfb572041f-5j8yjo.png"
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 72, 
      }
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imgUrl: "https://utfs.io/f/21a558e0-9983-4a9f-8d59-843be44a42f4-pafepz.webp",
      },
    });

    const keyboards = [
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Deixe a personalidade estourar na sua mesa e além com POP Keys. Junto com um mouse POP correspondente, deixe seu verdadeiro eu brilhar com uma estética de mesa impressionante e teclas de emoji personalizáveis e divertidas.",
        imgUrls: [
          "https://utfs.io/f/21a558e0-9983-4a9f-8d59-843be44a42f4-pafepz.webp",
          "https://utfs.io/f/042fe9a1-9701-4fb3-af12-e685405986e4-pafepy.webp",
          "https://utfs.io/f/c3e41359-df6c-4750-a4b7-a57526489e2a-pafepx.webp",
          "https://utfs.io/f/17f031cf-2805-47d3-825f-f9da7059d8eb-pafepw.webp",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, 
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "inta cada momento do seu processo criativo ou cada linha de código com o MX Mechanical irresistivelmente tátil. Apresenta teclas mecânicas de baixo perfil em 3 tipos de switches para feedback satisfatório a cada toque de tecla, iluminação inteligente e Easy-Switch - permitindo que você conecte até 3 dispositivos. Escolha entre o MX Mechanical de tamanho normal com um teclado numérico integrado ou o minimalista MX Mechanical Mini que economiza espaço.",
        imgUrls: [
          "https://utfs.io/f/a10e0417-9ba0-4628-8efe-40f62a6e7609-vquxtz.webp",
          "https://utfs.io/f/e3689308-001c-45ca-8879-187d56895ad4-vquxty.webp",
          "https://utfs.io/f/e13305c8-3112-4d93-8793-88a08794c72f-vquxtx.webp",
          "https://utfs.io/f/5190df7f-2a3a-4a6a-897c-d322c742d9fd-vquxtw.webp",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "O Redragon Ashe Pro chama muita atenção com seu design, sendo uma opção de teclado mecânico com teclas de perfil baixo, visual limpo e conforto aprimorado.",
        imgUrls: [
          "https://utfs.io/f/ceffcf86-81db-4a97-a45e-75dc64477427-ay233f.png",
          "https://utfs.io/f/dd2affa9-5568-484a-ac9c-26edabda9fca-ay233e.png",
          "https://utfs.io/f/7da85ef3-df0f-483f-b56e-798ad8c4852e-ay233d.png",
          "https://utfs.io/f/65e1a2c4-67b1-4719-9fae-a83349087715-ay233c.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, 
      },
      {
        name: "Ninja Black Noir",
        slug: "ninja-black-noir",
        description:
          "Aprimore seu desempenho nos jogos com o teclado gamer ninja Black Noir, um teclado feito especialmente para gamers que buscam um teclado silencioso para uso durante a jogatina, misturando conforto e funcionalidades.",
        imgUrls: [
          "https://utfs.io/f/22e4c854-d678-4aa0-93a5-11aca999e44e-iczfcd.webp",
          "https://utfs.io/f/48423a34-1862-414c-b644-59d93fb15af3-iczfd2.webp",
          "https://utfs.io/f/ffadf7b4-7efc-4714-ac0e-69b3f1bf4dcb-iczfcg.webp",
          "https://utfs.io/f/e1638deb-5869-4a21-9e15-a1f44aa0dcfc-iczfd3.webp"
        ],
        basePrice: 130,
        categoryId: keyboardsCategory.id,
        discountPercentage: 36, 
      },
      {
        name: "Redragon Lakshmi",
        slug: "redragon-lakshmi",
        description:
          "O Redragon LAKSHMI reúne o que há de melhor em um teclado para seu setup, entrega performance profissional, evita Double Clicks e possui o dobro de vida útil comparado a um teclado mecânico convencional, é o teclado perfeito para quem procura um excelente upgrade para seu setup.",
        imgUrls: [
          "https://utfs.io/f/32855a52-16eb-4df9-b48b-e50b44f0846a-ihyv3.png",
          "https://utfs.io/f/c7ce60cc-7012-4606-8fd9-7b70c56f5297-hzagy2.png",
          "https://utfs.io/f/c6b2dc25-8bf5-42e7-bf20-10dc12af1c31-hkqcee.png",
          "https://utfs.io/f/c9071490-fd04-4f59-8f72-a585ad381ef3-3v3snf.png"
        ],
        basePrice: 300,
        categoryId: keyboardsCategory.id,
        discountPercentage: 37, 
      },
      {
        name: "Redragon Kumara Pro",
        slug: "redragon-kumara-pro",
        description:
          "Aprimore seu desempenho nos jogos com o Kumara K552-RGB PRO com switch mecânico Magnético Blue de altíssima qualidade garante um tempo de resposta ágil para os mais exigentes gamers.",
        imgUrls: [
          "https://utfs.io/f/a5f03c79-80da-4532-a02e-80ec125b73b0-14cozz.png",
          "https://utfs.io/f/34919662-03e2-49ea-ab18-ce56bc83c371-v5kfo1.png",
          "https://utfs.io/f/fbcd29b1-2bc3-4482-b748-59b3bcc96305-rf9ri.png",
          "https://utfs.io/f/74f3fa06-1149-4bee-90cb-1c45a3278a74-awds64.png"
        ],
        basePrice: 550,
        categoryId: keyboardsCategory.id,
        discountPercentage: 47, 
      },
      {
        name: "Akko Naruto Shippuden Sasuke",
        slug: "akko-naruto-shippuden-sasuke",
        description:
          "O teclado Akko Naruto Shippuden Sasuke 3108V2 é um dos melhores modelos da akko. O switch Akko Pink que acompanha o teclado é excelente e tem um som satisfatório que ganhou o publico mundial. Qualidade, versatilidade e um preço justo para um teclado top de linha!",
        imgUrls: [
          "https://utfs.io/f/f375172d-157e-4d43-b7ed-cbc61c285ae5-497eca.webp",
          "https://utfs.io/f/206032f1-c45b-478c-b4ef-c00612ca57a5-497ebo.webp",
          "https://utfs.io/f/7bda461c-2d1f-4e2a-b705-3b6938c7d39e-497ecb.webp",
          "https://utfs.io/f/ae241f0d-64fb-41f8-bb1d-746363291eee-497ebn.webp"
        ],
        basePrice: 780,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, 
      },
      {
        name: "SuperFrame Ferz",
        slug: "superframe-ferz",
        description:
          "O Teclado Gamer SuperFrame Ferz é um teclado mecânico feito para gamers, que apresenta um layout compacto 60% para os usuários que procuram deixar o máximo de espaço possível sobre a mesa.",
        imgUrls: [
          "https://utfs.io/f/2542a069-7585-4ec9-8c61-728e31617ff6-h7dqwc.png",
          "https://utfs.io/f/00e4a6b1-72ed-4fa0-96ec-f4b33dee4839-sl99ix.png",
          "https://utfs.io/f/3fbc7156-0058-4f4f-bfcc-52b6141533a8-rsx1ee.png",
          "https://utfs.io/f/4ec0bbb1-0e32-4d36-9acd-59196a64d7d7-k11o4f.png"
        ],
        basePrice: 330,
        categoryId: keyboardsCategory.id,
        discountPercentage: 29, 
      },
      {
        name: "8BitDo Fami Edition",
        slug: "8Bitdo-fami-edition",
        description:
          "Domine o jogo com o Teclado Mecânico Gamer 8BitDo Fami Edition. Este teclado sem fio Bluetooth combina o melhor do estilo retrô com a tecnologia moderna, oferecendo uma experiência de digitação excepcional para jogadores exigentes.",
        imgUrls: [
          "https://utfs.io/f/d780c0f1-064f-4ef8-b07e-6b0be4813f93-ig2w57.png",
          "https://utfs.io/f/74518bec-308a-470f-8ade-aa4ad6e16a4d-dmyrnv.png",
          "https://utfs.io/f/f69ca7e3-de7a-4528-ba89-df35217e563b-cp2s9n.png",
          "https://utfs.io/f/429b5aab-55cc-44bd-b4cb-d7c1feec77e3-gimq2t.png"
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0, 
      }
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imgUrl: "https://utfs.io/f/ca45cb59-9332-4bb6-8e8d-08bfe81b9f84-1h1tqv.webp",
      },
    });

    const headphones = [
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
        "Com design revolucionário, acústica avançada e conforto ergonômico, o A50 Wireless + Base Station oferece uma experiência de jogo inesquecível. ",
        imgUrls: [
          "https://utfs.io/f/ca45cb59-9332-4bb6-8e8d-08bfe81b9f84-1h1tqv.webp",
          "https://utfs.io/f/fb584d69-f465-45b2-86cd-7bd942f95b55-sf271k.webp",
          "https://utfs.io/f/a4682e87-f7a1-4f67-be1f-4c8260532102-cpxu55.webp",
          "https://utfs.io/f/7dad132c-347c-4239-821f-65796ceb8f58-h666na.webp",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
        "Ofereça sua melhor imagem e um som excelente nas videochamadas com os Zone Wired Earbuds. Os avançados microfones com redução de ruídos localizados no fone esquerdo capturam claramente cada palavra. Com som integrado com qualidade de estúdio.",
        imgUrls: [
          "https://utfs.io/f/69e51318-6299-4c00-8c9c-073a28068407-a5n61x.webp",
          "https://utfs.io/f/9e721536-d113-4546-9f7d-2ee0552add5c-4ir464.webp",
          "https://utfs.io/f/0c35c43d-9714-4eb6-9da1-ed7b4d08c5fd-j75ee5.webp",
          "https://utfs.io/f/18557815-c149-4cf9-96d6-b7ecd242c4ab-xvjom6.webp",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, 
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "HyperX Cloud Stinger 2 - Headset gamer (preto).",
        imgUrls: [
          "https://utfs.io/f/7e51327b-bd7b-440c-a98b-0e9aa23bfafb-qmfx3g.png",
          "https://utfs.io/f/84237a23-7b88-44f5-856b-e5c90cfa687b-kdriey.png",
          "https://utfs.io/f/985a0470-6b65-4891-a049-701a4a6969bd-uvv3aq.png",
          "https://utfs.io/f/b09f2b58-76ec-4da1-b55c-f1bf89154582-o4gki9.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, 
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imgUrl: "https://utfs.io/f/4998a72b-b9bf-4ba7-ba5e-7d1b06ed39b5-1na232.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "A espessura preferida pelos jogadores profissionais para uma superfície de mesa mais consistente e melhores jogos em LANS e torneios. Obtenha a quantidade certa de resistência aos pés do seu mouse. Perfeito para todos os movimentos de partida, parada e movimentos bruscos e rápidos que vêm com jogos de baixo DPI. A textura de superfície perfeita fornece a imagem ideal para o sensor do seu mouse, para que ele possa traduzir o movimento do mouse para o movimento do cursor.",
        imgUrls: [
          "https://utfs.io/f/b1d8cb8b-8559-40cc-aac6-774dc32f24b9-rdtluz.webp",
          "https://utfs.io/f/d8682174-8d85-42b8-8b15-b4b96e241465-rdtluy.webp",
          "https://utfs.io/f/47d90211-286d-47fc-bf07-25553debc036-rdtlux.webp",
          "https://utfs.io/f/0a830f11-197e-4f6d-ad85-3a28d2c693cc-rdtluw.webp",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, 
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Conheça o macio, suave e antideslizante mouse pad que leva seu espaço de trabalho a novas alturas. Feito de materiais de alta qualidade, o mouse Pad da Logitech lhe dá o deslize e o conforto que você precisa para seu mouse Logitech favorito. Uma superfície de tecido lisa e confortável apresenta um material de tecido fino para um menor atrito e deslizamento silencioso e sem esforço - quer você esteja no escritório ou em casa. O Logitech Mouse Pad possui um revestimento à prova de derramamento que resiste a contratempos acidentais, para que os líquidos possam ser facilmente limpos com um pano úmido.",
        imgUrls: [
          "https://utfs.io/f/4998a72b-b9bf-4ba7-ba5e-7d1b06ed39b5-1na232.png",
          "https://utfs.io/f/67a548a2-5695-48b0-b847-67cc3320f554-1na233.png",
          "https://utfs.io/f/a053e148-24b8-432c-8e2b-e6c26909b00f-1na234.png",
          "https://utfs.io/f/7c65b3dd-3126-4489-ace3-27f0dc047e7a-1na235.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Mousepad Force One Skyhawk Dark XXL (900x400mm)",
        imgUrls: [
          "https://utfs.io/f/6ca36f1a-1062-406f-b5e6-6a695268c37f-11g5.webp",
          "https://utfs.io/f/259d3a20-a37f-4202-8c7a-de2dd932afcd-126u.webp",
          "https://utfs.io/f/c59b8352-7d96-4380-aa67-94dd092c0655-12xj.webp",
          "https://utfs.io/f/1748e178-019a-44ea-85c4-67a369e9d31c-13o8.webp",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Mousepad Force One Gamer Skyhawk XXL (900x400mm) ",
        imgUrls: [
          "https://utfs.io/f/1bf28d7a-01b5-407c-8b97-fb7eaf744337-rzdulz.webp",
          "https://utfs.io/f/8ad3e218-67db-4448-aa6e-ab751ba4299c-rzdtva.webp",
          "https://utfs.io/f/05506676-a26e-4ddc-8018-ff4179906d1a-rzdt4l.webp",
          "https://utfs.io/f/1bf28d7a-01b5-407c-8b97-fb7eaf744337-rzdulz.webp",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5,
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imgUrl: "https://utfs.io/f/ee26d074-9f13-4e3f-8d75-5b19158d3eaa-eqbl0l.png",
      },
    });

    const monitors = [
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "O ComfortView Plus, uma tela integrada com baixa emissão de luz azul e sempre ativa, reduz as emissões potencialmente nocivas de luz azul sem prejudicar as cores. O incrível acabamento preto e a base pequena complementam um sistema de gerenciamento de cabos aprimorado que oculta os cabos no riser do monitor. Experimente o conforto feito para você ao inclinar, girar, rodar e ajustar a altura do monitor (máx. de 150 mm) e encontrar o conforto ideal para visualização.",
        imgUrls: [
          "https://utfs.io/f/e39eb655-1bcb-429a-abc9-c124fa638be8-n4q7lt.png",
          "https://utfs.io/f/24eec4ac-8484-4660-b9eb-f2dea5dc0e23-n4q7lz.png",
          "https://utfs.io/f/691ee36e-d78c-419c-a6db-08c0a6686d43-n4q7lu.png",
          "https://utfs.io/f/26ed0f14-2df7-4f1c-b048-ebaf9756f2a3-n4q7lv.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Monitor curvo WQHD de 34” com VESA DisplayHDR 400 e taxa de atualização de 144 Hz que proporciona uma experiência gamer realmente imersiva.",
        imgUrls: [
          "https://utfs.io/f/14ea65fd-b17e-40fa-b1b5-29bc6d911047-tm0366.png",
          "https://utfs.io/f/ee26d074-9f13-4e3f-8d75-5b19158d3eaa-eqbl0l.png",
          "https://utfs.io/f/9896b266-5884-4e64-9589-ad666ff31127-eqcuzn.png",
          "https://utfs.io/f/db46166a-f17f-473f-b27a-d900e6ed9cad-alman2.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Monitor curvo QHD de 31,5 com tempo de resposta de 1 ms (MPRT)/2 ms (cinza a cinza), taxa de atualização de 165 Hz e cores 99% sRGB para oferecer imagens nítidas aos games e tornar a jogabilidade imersiva.",
        imgUrls: [
          "https://utfs.io/f/13103244-dbda-4667-a885-11d368aa528c-x091g8.png",
          "https://utfs.io/f/35352e9c-4ac3-4983-a2cd-8e9647f05f13-60nsg3.png",
          "https://utfs.io/f/9c46c189-84a4-4944-bf16-8b61d86e8088-60offm.png",
          "https://utfs.io/f/6c583a6f-840a-4ae3-9474-c1b1b436c885-424mad.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, 
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imgUrl: "https://utfs.io/f/909d2979-a874-4172-922f-2937f8573489-sh030b.png",
      },
    });

    const speakers = [
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Os alto-falantes Sony SA-Z9R foram projetados para elevar a sua experiência auditiva a novos patamares, oferecendo um áudio imersivo e envolvente que coloca você no centro da ação. Como parte do sistema de áudio Sony HT-Z9F, esses alto-falantes traseiros sem fio foram meticulosamente projetados para complementar e aprimorar o desempenho do seu sistema de home theater, proporcionando um som surround realista e emocionante.",
        imgUrls: [
          "https://utfs.io/f/f41fd707-a43d-4135-93b0-034039954e95-n3vzru.webp",
          "https://utfs.io/f/d569f8bf-f88c-4c1f-840a-9c8908cd6668-m6v095.webp",
          "https://utfs.io/f/d1817477-80a0-439a-a7a9-dc9b293f09ad-gl3cew.webp",
          "https://utfs.io/f/68fc32f6-1632-40b5-a546-f5aa2bcbd46b-fo2cw7.webp",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Desfrute de som potente e portabilidade incomparável com a Caixa de Som Sony SRS-XB23. Projetada para os verdadeiros amantes da música que não querem comprometer a qualidade sonora, esta caixa de som combina um design robusto com recursos avançados, garantindo uma experiência auditiva excepcional em qualquer ambiente.",
        imgUrls: [
          "https://utfs.io/f/909d2979-a874-4172-922f-2937f8573489-sh030b.png",
          "https://utfs.io/f/ab97beff-8e92-46ba-97f2-8b26dcf17e2b-v18t4g.png",
          "https://utfs.io/f/e65fb362-f7b7-49e7-a19f-dd04d8dc8103-n3m1nu.png",
          "https://utfs.io/f/e0413110-5331-44c5-be7e-c009a560721b-63enc4.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Introduzindo a Sony HT-200F Soundbar: sua solução sonora definitiva para transformar sua sala de estar em um verdadeiro cinema em casa. Projetada com a lendária qualidade de áudio da Sony, esta elegante e compacta soundbar oferece uma experiência de áudio imersiva que complementa perfeitamente qualquer ambiente. Com sua potência de saída de 80W, a HT-200F preenche o espaço com um som nítido e envolvente, que torna cada momento de entretenimento uma experiência emocionante. Graças à tecnologia S-Force Front Surround, você desfrutará de um campo sonoro expansivo que simula a experiência de som surround sem a necessidade de alto-falantes adicionais. A conectividade Bluetooth integrada permite que você transmita facilmente música de seus dispositivos compatíveis, enquanto a entrada HDMI ARC simplifica a conexão com sua TV para uma configuração rápida e fácil. Além disso, com o design fino e discreto da HT-200F, ela se integra perfeitamente ao seu espaço de entretenimento, proporcionando um visual elegante e moderno. Desfrute de filmes, música e jogos como nunca antes com a Sony HT-200F Soundbar - onde o áudio excepcional encontra o design sofisticado.",
        imgUrls: [
          "https://utfs.io/f/73c66027-3668-4de8-97bd-576b460052fc-k1xrbb.webp",
          "https://utfs.io/f/77fc391f-0bee-49c9-a758-42ea5dde2859-iq0lcq.webp",
          "https://utfs.io/f/e6d10109-402e-4a82-939f-ddc3c8189a36-pygboy.webp",
          "https://utfs.io/f/728eaab2-bb23-418c-9224-c0bf12f5732b-cti0z3.webp",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, 
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });