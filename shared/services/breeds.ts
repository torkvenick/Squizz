export interface Breed {
  dog: string;
  imgs: string[];
  dogs?: string[];
  isChosen?: boolean;
}

export enum DogName {
  lhasaApso = "lhasa apso",
  cavalierKingCharlesSpaniel = "cavalier king charles spaniel",
  keeshond = "keeshond",
  keesduitseStaandeLanghaarHond = "keesduitse staande langhaar hond",
  labradorRetriever = "labrador retriever",
  leeuwhondje = "leeuwhondje",
  kerryBlueTerrier = "kerry blue terrier",
  ierseSetter = "ierse setter",
  akitaInu = "akita inu",
  ijslandseHond = "ijslandse hond",
  dandyDinmontTerrier = "dandy dinmont terrier",
  curlyCoatedRetriever = "curly coated retriever",
  leonberger = "leonberger",
  laekenseHerder = "laekense herder",
  ierseWolfshond = "ierse wolfshond",
  borderTerrier = "border terrier",
  lakelandTerrier = "lakeland terrier",
  landseer = "landseer",
  lagottoRomagnolo = "lagotto romagnolo",
  ierseWaterspaniel = "ierse waterspaniel",
}

export const Breeds: Breed[] = [
  {
    dog: DogName.lhasaApso,
    imgs: [
      "https://dogsbestlife.com/wp-content/uploads/2021/03/lhasa-apso-scaled.jpeg",
      "https://www2.zoolyx.be/wp-content/uploads/2018/11/lhasa_apso-scaled.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_original/public/2021-02/BREED%20Hero%20Desktop_0074_lhasa_apso.webp?itok=fK9lY6js",
    ],
  },
  {
    dog: DogName.cavalierKingCharlesSpaniel,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0143_king_charles_spaniel2.jpg?itok=m-c0cnSF",
      "https://s3.eu-central-1.amazonaws.com/hund-gewicht/dog/8901252528/613f5a23e535b874000522.jpg",
      "https://img.pixers.pics/pho_wat(s3:700/FO/23/42/06/50/700_FO23420650_f7f0f777b546090e6e7e11d97fe6ca63.jpg,611,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,391,650,jpg)/fotobehang-cavalier-king-charles-spaniel-5-jaar-oud.jpg.jpg",
    ],
  },
  {
    dog: DogName.keeshond,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0110_german_spitz_klein.jpg?itok=CAyhoHOY",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keeshond_Majic_standing_cropped.jpg/800px-Keeshond_Majic_standing_cropped.jpg",
      "https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2hlYWRlci1kb2ctaW1hZ2VzL2tlZXNob25kLnBuZyIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5IjoxMDAsInByb2dyZXNzaXZlIjpmYWxzZX0sInJlc2l6ZSI6eyJ3aWR0aCI6NTQwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
    ],
  },
  {
    dog: DogName.keesduitseStaandeLanghaarHond,
    imgs: [
      "https://www.puppytest.nl/media/zjqlunxm/duitse-staande-langhaar.jpg",
      "https://static.wixstatic.com/media/e1c7cd_206c94f6ad8940649890a41f2a417d38~mv2_d_1426_1920_s_2.jpg/v1/fill/w_550,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75264775_721204231692576_120653381183628.jpg",
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/duitse-staande-langhaar/glp-ou-0099.jpg",
    ],
  },
  {
    dog: DogName.labradorRetriever,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0040_retriever_labrador.jpg?itok=NvwfmeXF",
      "https://www.omlet.nl/images/cache/438/512/Dog-Labrador_Retriever-A_healthy_adult_Labrador_sitting%2C_waiting_for_some_attention_from_it%27s_owner.jpg",
      "https://t2.ea.ltmcdn.com/en/razas/0/0/1/labrador-retriever_100_0_600.jpg",
    ],
  },
  {
    dog: DogName.leeuwhondje,
    imgs: [
      "https://www.hondencentrum.com/images/og-thumbnail/Leeuwhondje2.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Lowchen%20%28Little%20Lion%20Dog%291.jpg?itok=Y9x8mZ2Z",
      "https://gekop.com/wp-content/uploads/2014/02/1295-Honden-shutterstock-Leeuwhondje.jpg",
    ],
  },
  {
    dog: DogName.kerryBlueTerrier,
    imgs: [
      "https://www.nieuwehond.nl/wp-content/uploads/2016/09/kerry-blue-terrier-Depositphotos_33407753_S-1200x675.jpg",
      "https://www.omlet.nl/images/cache/371/512/Dog-Kerry_Blue_Terrier-A_lovely_Kerry_Blue_Terrier_sitting_neatly%2C_awaiting_some_attention.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0080_kerry_blue_terrier.jpg?itok=jGBtYWTz",
    ],
  },
  {
    dog: DogName.ierseSetter,
    imgs: [
      "https://www.hondenrassen.nl/public/img/content/setter_rood.jpg",
      "https://omy.dog/photo/F7E1CAD7-D484-4265-9E24-3015B912F3F6/original",
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0069_irish_setter.jpg",
    ],
  },
  {
    dog: DogName.akitaInu,
    imgs: [
      "https://gekop.com/wp-content/uploads/2013/10/542-Honden-shutterstock-akita-inu.jpg",
      "https://assets.felicanis.be/wp-content/uploads/akita-inu-683x1024.jpg",
      "https://i.pinimg.com/originals/0d/66/ee/0d66ee6da8aa47159243b2acac42fb09.jpg",
    ],
  },
  {
    dog: DogName.ijslandseHond,
    imgs: [
      "https://www.nieuwehond.nl/wp-content/uploads/2016/09/IJslandse-hond-Depositphotos_105049762_S.jpg",
      "https://www.nieuwehond.nl/wp-content/uploads/2016/09/IJslandse-hond-Depositphotos_82393860_S.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Ulfur.jpg",
    ],
  },
  {
    dog: DogName.dandyDinmontTerrier,
    imgs: [
      "https://www.dogalize.com/wp-content/uploads/2017/03/Dandie-Dinmont-Terrier.jpg",
      "https://www.dogtime.com/assets/uploads/2011/01/file_23064_dandie-dinmont-terrier-460x290.jpg",
      "http://lhic.nl/wp-content/uploads/2021/02/Dandy-Dinmont-Terrier-hond.jpg",
    ],
  },
  {
    dog: DogName.curlyCoatedRetriever,
    imgs: [
      "https://petlur.com/storage/app/public/breeds/dog/curly-coated-retriever.png",
      "https://breed-assets.wisdompanel.com/dog/curly-coated-retriever/Curly_Coated_Retriever_Color_Small_File.png",
      "https://cdn.royalcanin-weshare-online.io/TyIGHmsBaxEApS7LiB3m/v1/bd173h-hub-curly-coated-retriever-adult-black-and-white?fm=jpg&auto=compress",
    ],
  },
  {
    dog: DogName.leonberger,
    imgs: [
      "https://www.zoo-mar.pl/wp-content/uploads/2016/02/leonberger.jpg",
      "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=460,height=600,fit=cover/animal/breed/pictures/613f5a2385378949260103.jpg",
      "https://www.purina.pl/sites/default/files/2018-02/leonberger_400x378.jpg",
    ],
  },
  {
    dog: DogName.laekenseHerder,
    imgs: [
      "https://gekop.com/wp-content/uploads/2014/02/1356-Honden-shutterstock-Laekense-Herdershond.jpg",
      "https://www.omlet.nl/images/cache/512/512/Dog-Belgian_Shepherd_Dog_%28Laekenois%29-A_lovely_Belgian_Shepherd_Dog_%28Laekenois%29_sitting_down.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0168_belgian_shepherd_lakenois.jpg?itok=nHTJo9G1",
    ],
  },
  {
    dog: DogName.ierseWolfshond,
    imgs: [
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-10/ierse-wolfshond/irw-ou-0021.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0089_irish_wolfhound.jpg?itok=3Pck2fM-",
      "https://s3.eu-central-1.amazonaws.com/tipaw-pictures/b34dccb5-0cac-4a4d-a2a8-6283979aa894.jpg",
    ],
  },
  {
    dog: DogName.borderTerrier,
    imgs: [
      "https://www.omlet.us/images/cache/512/341/Dog-Border_Terrier-An-adult_Border_Terrier_with_a_long_and_thick_coat.jpg",
      "https://www.thekennelclub.org.uk/media/1527/border-terrier-standing.jpg?mode=pad&width=1000&rnd=132143779710000000",
      "https://www.dogtime.com/assets/uploads/2011/01/file_23058_border-terrier.jpg",
    ],
  },
  {
    dog: DogName.lakelandTerrier,
    imgs: [
      "https://media.istockphoto.com/id/1293258655/photo/lakeland-terrier.jpg?s=612x612&w=0&k=20&c=4N-UWRv6rKq6E0eGNwrsmOOvbpMfSSoLNc1jyTNDt-Y=",
      "https://123tinki.com/wp-content/uploads/sites/2/2016/11/Lakeland-terrier-e1479118428586.jpg",
      "https://www.purina.nl/sites/default/files/breed_library/lakeland_terrier.jpg",
    ],
  },
  {
    dog: DogName.landseer,
    imgs: [
      "https://cdn.royalcanin-weshare-online.io/YCIcHmsBaxEApS7LjB2v/v5/bd241h-hub-landseer-adult-black-and-white",
      "https://thumbs.dreamstime.com/b/landseer-dog-pure-breed-playing-fun-lovely-puppy-landseer-dog-pure-breed-water-training-sea-beach-lake-work-rescue-162727787.jpg",
      "https://www.hundeo.com/wp-content/uploads/2019/01/Landseer_2.jpg",
    ],
  },
  {
    dog: DogName.lagottoRomagnolo,
    imgs: [
      "https://www.lagottotartufo.it/fileadmin/_processed_/8/9/csm_caratteristiche_lagotto_romagnolo_1_ba64698fd7.jpg",
      "https://www.dogtime.com/assets/uploads/2018/07/lagotto-romagnolo-dog-breed-pictures-header.jpg",
      "https://s36700.pcdn.co/wp-content/uploads/2015/06/Peperonata-Lagotto-Romagnolo-05.jpg.optimal.jpg",
    ],
  },
  {
    dog: DogName.ierseWaterspaniel,
    imgs: [
      "https://media-be.chewy.com/wp-content/uploads/2021/06/25115515/IrishWaterSpaniel-FeaturedImage.jpg",
      "https://breed-assets.wisdompanel.com/dog/irish-water-spaniel/Irish_Water_Spaniel_Color_Small_File.png",
      "https://www.purina.nl/sites/default/files/breed_library/irish_water_spaniel.jpg",
    ],
  },
];
