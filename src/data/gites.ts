export interface PricePeriod {
  period: string;
  price: string;
}

export interface Gite {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  capacity: string;
  size: string;
  description: string;
  longDescription: string;
  equipment: string[];
  prices: PricePeriod[];
  options: { label: string; value: string }[];
  mainImage: string;
  images: string[];
}

export const gites: Gite[] = [
  {
    id: "la-forge",
    slug: "la-forge",
    title: "La Forge",
    subtitle: "4 chambres, 9 personnes",
    capacity: "9 Personnes",
    size: "160 m²",
    description: "Notre plus grande demeure, idéale pour les grandes tribus.",
    longDescription:
      "C'est une maison cossue disposant de quatre chambres confortables sur deux étages, pouvant accueillir 9 personnes (160 m²). Décorées avec soin, les chambres et le séjour possèdent de magnifiques charpentes à l'ancienne. Au rez-de-chaussée, une cheminée et un mobilier de bon goût donnent à ce gîte tout son caractère. Dans un cadre de verdure, offrant de superbes vues sur les pâturages environnants, le gîte La Forge est la garantie d'un séjour reposant et confortable, au cœur du Périgord.",
    equipment: [
      "Rez-de-chaussée : 1 cuisine, 1 séjour, 1 cheminée avec insert, 1 grande cuisine d'été avec baies vitrées, WC",
      "1er étage : 1 chambre avec un lit de 140 cm, 1 chambre avec un lit de 160 cm, 1 salon, 1 salle d'eau, 1 WC",
      "2e étage : 1 chambre avec un lit de 140 cm, 1 chambre avec un lit de 140 cm + un lit de 90 cm",
      "Cuisine parfaitement équipée avec lave-linge, lave-vaisselle, four, plaques chauffantes, micro-ondes, réfrigérateur/congélateur, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "540 €" },
      { period: "du 25/04 au 30/05", price: "660 €" },
      { period: "du 30/05 au 27/06", price: "770 €" },
      { period: "du 27/06 au 04/07", price: "830 €" },
      { period: "du 04/07 au 11/07", price: "950 €" },
      { period: "du 11/07 au 18/07", price: "1030 €" },
      { period: "du 18/07 au 22/08", price: "1200 €" },
      { period: "du 22/08 au 29/08", price: "1050 €" },
      { period: "du 29/08 au 26/09", price: "950 €" },
      { period: "du 26/09 au 28/11", price: "595 €" },
    ],
    options: [
      { label: "Option ménage", value: "65 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6_OGFWutRAIJ3DJ9bvKC5T_c1uAt-A2m0x0Iv7FEEDTLG0GX-H1b-eIpqrMs5HLR4ukz0BxIy8ZChXnMUSoEJIDGMPHtakI1sfOgJxZFnqvpLqH_Z_8f2zh89FnIEvjHPf0qIx_OB1fk8hr_9YxpDkuZa0E1COimsfEKTdUwebqXdPVciXYd8vlXDifDN570XYvUNo2SF8J5MfH6V2eC7WkYckv2DPjKQqPtdhj_-oIDzzWTTDeV9LCGjVlYISsDt4lm4Hje5NFq",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-14.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-08.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-09.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-07.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-06.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-05.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-15.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-10.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-11.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-forge-13.jpg",
    ],
  },
  {
    id: "les-duos",
    slug: "les-duos",
    title: "Les Duos",
    subtitle: "1 chambre, 2 personnes",
    capacity: "2 Personnes",
    size: "30 m²",
    description: "Idéal pour un couple, séjour en tête à tête.",
    longDescription:
      "Ce sont deux sympathiques petits appartements pour deux personnes (30 m²), situés en rez-de-chaussée de la Vieille Grange. Idéal pour un couple désireux de passer un séjour en tête à tête, dans un cadre agréable, propice au romantisme. Laissez le charme agir… Ces deux petits appartements des Gîtes de Bourniquel vous permettront de vivre des moments de rêve, dans un environnement préservé.",
    equipment: [
      "Rez-de-chaussée : un séjour avec coin cuisine, une chambre avec un lit de 140, une salle d'eau et un WC",
      "Cuisine équipée avec plaques chauffantes, micro-ondes, réfrigérateur, lave-vaisselle, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "300 €" },
      { period: "du 25/04 au 30/05", price: "350 €" },
      { period: "du 30/05 au 04/07", price: "360 €" },
      { period: "du 04/07 au 11/07", price: "390 €" },
      { period: "du 11/07 au 22/08", price: "450 €" },
      { period: "du 22/08 au 29/08", price: "390 €" },
      { period: "du 29/08 au 26/09", price: "340 €" },
      { period: "du 26/09 au 28/11", price: "300 €" },
    ],
    options: [
      { label: "Option ménage", value: "30 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvAh5jbyGghPs9nk9lL1MWJ2HuLw7YrSTmfXcqO-ZzixhALopidXLGrZm7DF6Oh3ZNRFRUAAeR7WHQFCYdiwBnxMGZ-bKk0kwNOr-_Iij0r6Dy-wVdRDlVM8i4TgLVoKpY7kFfRbvOskG9wBA-tYz9GfaH5V3-Onpt2dP3aMwFVgdbUcLx2HiQr0j6QXH3rHREnZ-0eEvx58aGqw-rjLF-EV0qXtyGnoh6ZTKrRhyEuQnovACgGnoPnC16EhQJLKnikNpgZ7UKaDFJ",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-gris-01.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-gris-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-rouge-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-rouge-01.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-rouge-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-rouge-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-duo-03.jpg",
    ],
  },
  {
    id: "la-treille",
    slug: "la-treille",
    title: "La Treille",
    subtitle: "2 chambres, 5 personnes",
    capacity: "5 Personnes",
    size: "75 m²",
    description: "Gîte de charme avec courette ombragée et cheminée.",
    longDescription:
      "C'est un gîte de charme possédant à l'étage deux chambres coquettes pouvant accueillir 5 personnes (75 m²). Cette maison de hameau, entièrement restaurée, offre l'intimité d'une courette ombragée donnant la possibilité de prendre ses repas à l'extérieur, en toute convivialité, ou bien à l'intérieur, dans la salle à manger agrémentée d'une large cheminée ouverte. Un rez de chaussée confortable avec coin cuisine parfaitement équipé, une salle d'eau et des wc.",
    equipment: [
      "Rez-de-chaussée : 1 séjour avec coin cuisine, 1 cheminée, 1 salle d'eau, 1 wc",
      "1er étage : 1 chambre avec un lit de 140 cm, 1 chambre avec un lit de 140 cm + un lit de 110 cm",
      "Cuisine parfaitement équipée avec lave-linge, lave-vaisselle, four, plaques chauffantes, micro-ondes, réfrigérateur/congélateur, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "400 €" },
      { period: "du 25/04 au 30/05", price: "460 €" },
      { period: "du 30/05 au 27/06", price: "550 €" },
      { period: "du 27/06 au 04/07", price: "595 €" },
      { period: "du 04/07 au 22/08", price: "750 €" },
      { period: "du 22/08 au 29/08", price: "600 €" },
      { period: "du 29/08 au 26/09", price: "560 €" },
      { period: "du 26/09 au 28/11", price: "400 €" },
    ],
    options: [
      { label: "Option ménage", value: "45 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiAIWB-2J_Hor9wUU3aZDMULoBHgWvP2bk3Ng1w7uNBJyL71tJRku53pzzBjNgr_qkasZuetrH3Fr0k9ZF_aF_5YxcuzptgtxFKcUnjlmIU4_3k33PSNYgRi42gD4q5I7_8H53NacVPNZfi6Es5QOnpDZwTLifgsQqjwxg1lUa224Lo2CTJJ8WZF4Hzp_sqDv8FwjmukBeof_yhu1N4yLs9y-ceBnGn1M2oW8u8L_HmVuUWnbcPhQBY6VonjqITVgRlNRjFk3MHGJE",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-07.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-06.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-05.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-09.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-treille-08.jpg",
    ],
  },
  {
    id: "hauts-vieille-grange",
    slug: "hauts-vieille-grange",
    title: "Les Hauts de la Vieille Grange",
    subtitle: "2 chambres, 5 personnes",
    capacity: "5 Personnes",
    size: "70 m²",
    description: "Vue imprenable et charpente à l'ancienne.",
    longDescription:
      "C'est une résidence située à l'étage d'une ancienne grange typique de Dordogne, laissant admirer sa magnifique charpente à l'ancienne. Les nombreuses ouvertures offrent une vue imprenable sur de superbes paysages verdoyants, faits de pâturages et de forêts. Le gîte, prévu pour 5 personnes (70 m²), possède deux chambres spacieuses et confortables. Un vaste séjour avec coin cuisine entièrement équipé, disposant d'un poêle à bois… pour goûter le charme d'antan sans rien sacrifier au confort d'aujourd'hui.",
    equipment: [
      "1er étage : grand séjour avec coin cuisine, 1 poêle à bois, 1 chambre avec un lit de 140 cm, 1 chambre avec 1 lit 140 cm et 1 lit 90 cm, 1 salle d'eau, 1 wc",
      "Cuisine parfaitement équipée avec lave-linge, lave-vaisselle, four, plaques chauffantes, micro-ondes, réfrigérateur/congélateur, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "400 €" },
      { period: "du 25/04 au 30/05", price: "460 €" },
      { period: "du 30/05 au 27/06", price: "550 €" },
      { period: "du 27/06 au 04/07", price: "595 €" },
      { period: "du 04/07 au 22/08", price: "750 €" },
      { period: "du 22/08 au 29/08", price: "600 €" },
      { period: "du 29/08 au 26/09", price: "560 €" },
      { period: "du 26/09 au 28/11", price: "400 €" },
    ],
    options: [
      { label: "Option ménage", value: "45 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-01.jpg",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-05.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-06.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-07.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-08.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-09.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-10.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-hauts-12.jpg",
    ],
  },
  {
    id: "maison-de-denise",
    slug: "maison-de-denise",
    title: "Maison de Denise",
    subtitle: "2 chambres, 5 personnes",
    capacity: "5 Personnes",
    size: "65 m²",
    description: "Terrasse et jardin privatif avec vue panoramique.",
    longDescription:
      "C'est une location de vacances indépendante pouvant accueillir 5 personnes (65 m²) disposant de 2 chambres confortables à l'étage. Au rdc, une grande salle d'eau, wc séparés, une cuisine équipée et une pièce à vivre donnant toutes les deux sur la terrasse. Vous profiterez d'une terrasse et d'un jardin privatif ombragé avec vue sur les pâturages. Vous passerez de belles vacances en famille ou entre amis au calme dans cette maison.",
    equipment: [
      "Rez-de-chaussée : cuisine, salon/salle à manger, salle d'eau, wc séparés",
      "1er étage : 1 chambre avec lit de 140 cm, 1 chambre avec un lit de 140 cm et 1 lit de 90 cm",
      "Cuisine parfaitement équipée avec lave-linge, lave-vaisselle, four, plaques chauffantes, micro-ondes, réfrigérateur/congélateur, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "360 €" },
      { period: "du 25/04 au 30/05", price: "410 €" },
      { period: "du 30/05 au 27/06", price: "490 €" },
      { period: "du 27/06 au 04/07", price: "530 €" },
      { period: "du 04/07 au 11/07", price: "580 €" },
      { period: "du 11/07 au 22/08", price: "700 €" },
      { period: "du 22/08 au 29/08", price: "595 €" },
      { period: "du 29/08 au 26/09", price: "470 €" },
      { period: "du 26/09 au 28/11", price: "360 €" },
    ],
    options: [
      { label: "Option ménage", value: "40 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl-lw2abH_HCvZbDA3FkAhAA-qlpmxAloVHPMQHxx0tMInawJ0BPBzX-fAIe1CsBMx0fFJiseUyS8G_fxNkZTraO5NLmb0mZaNUoYdxZu4YW-tvptG4f2J7r5p4l-btdxy8sb6y-qxcGgaxMqQHzSge2CFk44-B8pTWrYEl3wBv6a1JBtWUB1RA2eJz4ux4IWr25QRJNzQNPG6DpVdK0R_5TtbpLlPubHtEgNuducGLIbXAam_4K3ReK_jhZ66P8F5l3JDgLxee-O9",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-10.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-06.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-05.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-07.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-01.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-09.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-denise-11.jpg",
    ],
  },
  {
    id: "la-cour",
    slug: "la-cour",
    title: "La Cour",
    subtitle: "2 chambres + 1 mezzanine, 7 personnes",
    capacity: "7 Personnes",
    size: "90 m²",
    description: "Maison périgourdine avec terrasse surélevée.",
    longDescription:
      "C'est une maison périgourdine admirablement restaurée pouvant accueillir de 6 à 7 personnes (90 m²), disposant de deux chambres charmantes situées, l'une au rez de chaussée et l'autre, à l'étage. À l'intérieur, un salon-séjour avec coin cuisine, belle cheminée et mezzanine s'offre à vous, tandis qu'à l'extérieur, une vaste terrasse surélevée vous permettra de goûter au plaisir de déjeuner en toute tranquillité ou de vous faire bronzer sous les rayons généreux du soleil de Dordogne, avant d'aller vous rafraîchir dans la superbe piscine située à deux pas du gîte.",
    equipment: [
      "Rez-de-chaussée : 1 grand séjour avec coin cuisine, 1 cheminée, 1 chambre avec un lit de 140 cm, 1 salle d'eau, 1 wc",
      "1er étage : 1 mezzanine avec clic-clac, 1 cabinet de toilette avec vasque + wc, 1 chambre avec un lit de 140 cm + un lit de 90 cm",
      "Cuisine parfaitement équipée avec lave-linge, lave-vaisselle, four, plaques chauffantes, micro-ondes, réfrigérateur/congélateur, barbecue et salon de jardin",
    ],
    prices: [
      { period: "du 28/03 au 25/04", price: "490 €" },
      { period: "du 25/04 au 30/05", price: "550 €" },
      { period: "du 30/05 au 27/06", price: "600 €" },
      { period: "du 27/06 au 04/07", price: "640 €" },
      { period: "du 04/07 au 11/07", price: "720 €" },
      { period: "du 11/07 au 22/08", price: "795 €" },
      { period: "du 22/08 au 29/08", price: "705 €" },
      { period: "du 29/08 au 26/09", price: "570 €" },
      { period: "du 26/09 au 28/11", price: "470 €" },
    ],
    options: [
      { label: "Option ménage", value: "45 €" },
      { label: "Draps", value: "9 €/lit" },
      { label: "Chauffage", value: "Selon relevé compteur d'électricité" },
    ],
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGzRwgvEqoYXjUWfCWuAw2yn-Unwda9-R7jDru5zp4AJT7tbWq5L6EShncRXJNBrv2gfBSOrX2DeJW93v1mu7InomZro1bSWoVWpgPuraEAhtVJ07IiJFwgCLO4Ad4wOeQXnpgxStbnHrcmPsuwz7eUvMEtS2GA1Yh_qtzKaAiNRGZSE6fwtbxNtDuE0s6aW8ngXqgxGSMloqYFel9S3XSHiFRHAG1FwboYcfAAc_cGEwDn192jo9VxDAT5RC8CLsl0-fuX-obXBz",
    images: [
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-01.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-06.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-02.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-05.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-04.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-03.jpg",
      "https://gites-charme-piscine-dordogne-perigord.com/wp-content/uploads/2023/03/gite-cour-07.jpg",
    ],
  },
];

export const otherGites = (currentSlug: string) =>
  gites.filter((g) => g.slug !== currentSlug);
