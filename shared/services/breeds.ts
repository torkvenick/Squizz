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
  chihuahua = "chihuahua",
  amerikaanseCockerSpaniel = "amerikaanse cocker spaniel",
  borderCollie = "border collie",
  griffonKorthals = "griffon korthals",
  shibaInu = "shiba inu",
  chesapeakBayRetriever = "chesapeak bay retriever",
  novaScotiaDuckTollingRetriever = "nova scotia duck tolling retriever",
  australianCattleDog = "australian cattle dog",
  anatolischeHerdershond = "anatolische herdershond",
  americanAkita = "american akita",
  foxterrierDraadhaar = "foxterrier draadhaar",
  bosanskiOstrodlakiGonicBarak = "bosanski ostrodlaki gonic barak",
  westHighlandWhiteTerrier = "west highland white terrier",
  epagneulBreton = "epagneul breton",
  shetlandSheepdog = "shetland sheepdog",
  finseSpits = "finse spits",
  bolognezer = "bolognezer",
  russischeTerrier = "russische terrier",
  bouvierDesArdenne = "bouvier des ardenne",
  epagneulNainContinentalPapillon = "epagneul nain continental papillon",
  ruwharigeTeckel = "ruwharige teckel",
  imaalTerrierOfIerseGlen = "imaal terrier of ierse glen",
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
  {
    dog: DogName.chihuahua,
    imgs: [
      "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Chihuahua-Smooth-Coat.jpg?itok=J40w8Swm",
      "https://www.petbarn.com.au/petspot/app/uploads/2015/01/30.-Chihuahua.jpg",
      "https://www.licg.nl/media/1275/chihuahua740x433.jpg",
    ],
  },
  {
    dog: DogName.amerikaanseCockerSpaniel,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0122_spaniel_american_cocker.jpg",
      "https://gekop.com/wp-content/uploads/2013/10/054-Honden-shutterstock-am-cocker-spaniel.jpg",
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-8/amerikaanse-cocker-spaniel/acs-ou-0009.jpg",
    ],
  },
  {
    dog: DogName.borderCollie,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0018_border_collie.jpg",
      "https://www.akc.org/wp-content/uploads/2017/11/Border-Collie-On-White-01.jpg",
      "https://cdn.britannica.com/25/234625-050-6070814C/Border-Collie-dog.jpg",
    ],
  },
  {
    dog: DogName.griffonKorthals,
    imgs: [
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/griffon-korthals/grk-ou-0014.jpg",
      "https://cdn.webshopapp.com/shops/324873/files/382848618/griffon-korthals.jpg",
      "http://in05.hostcontrol.com/resources/b2c34fd5e7b7a2/c884e60a62.JPEG",
    ],
  },
  {
    dog: DogName.shibaInu,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0084_japanese_shiba_inu.jpg?itok=_ryhqMa9",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/1200px-Taka_Shiba.jpg",
      "https://image.petmd.com/files/styles/863x625/public/2022-10/Shiba-Inu.jpeg",
    ],
  },
  {
    dog: DogName.chesapeakBayRetriever,
    imgs: [
      "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_chesapeake-bay-retriever_desktop.jpg?h=475&la=en&w=825&hash=E901FC0696A374EEEB4DA413BFD4B776",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F01%2F11%2Fchesapeake-bay-retriever-sitting-in-the-sun-661221626-2000.jpg",
      "https://www.thekennelclub.org.uk/media/1299/retriever-chesapeake-bay-standing.jpg?mode=pad&width=1000&rnd=132140430600000000",
    ],
  },
  {
    dog: DogName.novaScotiaDuckTollingRetriever,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0107_nova_scotia_ducke_toller.jpg",
      "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5f77466d0abdb973826258.jpg",
      "https://www.nativebreed.org/wp-content/uploads/2020/07/Nova-Scotia-Duck-Tolling-Retriever-1024x682.jpg",
    ],
  },
  {
    dog: DogName.australianCattleDog,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0004_australian_cattle_dog_0.jpg",
      "https://media-be.chewy.com/wp-content/uploads/2021/06/16153832/AustralianCattleDog-FeaturedImage-1024x615.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ACD-blue-spud.jpg/640px-ACD-blue-spud.jpg",
    ],
  },
  {
    dog: DogName.anatolischeHerdershond,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Anatolian%20Shepherd%20Dog1.jpg?itok=F7Io4Pba",
      "https://fastly.jwwb.nl/public/p/c/o/temp-tafkmrgopywxnvnxqbkv/Anatolische-Herdershond.jpg",
      "https://www.hondenrassen.nl/public/img/content/pebbles_13052008-20110922114500.jpg",
    ],
  },
  {
    dog: DogName.americanAkita,
    imgs: [
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg",
      "https://image.jimcdn.com/app/cms/image/transf/none/path/s53b36d06bb1bc5e5/image/iea74cdb9a08eab13/version/1620740965/image.jpg",
      "https://www.thekennelclub.org.uk/media/1670/akita-standing.jpg?mode=pad&width=1000&rnd=132143812230000000",
    ],
  },
  {
    dog: DogName.foxterrierDraadhaar,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0050_fox_terrier_wire.jpg",
      "https://omy.dog/photo/E90F7B59-7D7B-4213-A037-852C7EEA65C5/thumbnail",
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/foxterrier-draadhaar/fox-ou-0083.jpg",
    ],
  },
  {
    dog: DogName.bosanskiOstrodlakiGonicBarak,
    imgs: [
      "https://jelenadogshows.com/sr/wp-content/uploads/2021/05/BOSANSKI-OSTRODLAKI-GONIC-BARAK.jpg",
      "https://bosnjani.com/wp-content/uploads/2020/11/9957763.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg/800px-BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg",
    ],
  },
  {
    dog: DogName.westHighlandWhiteTerrier,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0139_west_highland_white_terrier.jpg",
      "https://hondxl.nl/storage/5163/conversions/West_Highland_White_Terrier_Krakow-thumb_wide.jpg",
      "https://s3.eu-central-1.amazonaws.com/tipaw-pictures/9d098bc1-d305-475b-bb5f-ecd3ddf62cc6.jpg",
    ],
  },
  {
    dog: DogName.epagneulBreton,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0151_brittany.jpg?itok=MZUdZNmM",
      "https://www.beestig.be/sites/default/files/styles/article_header/public/artikel/teaser_achtergrond/epagneul_breton_hond.jpg?itok=5NbbIrJA",
      "https://dejacht.nl/flora-en-fauna/jachthondenrassen/staande-honden/continentaal-1/epagneul-breton/epagneul-breton-wmc-10.jpg/",
    ],
  },
  {
    dog: DogName.shetlandSheepdog,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0116_shetland_sheepdog.jpg",
      "https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-On-White-01.jpg",
      "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5cb5a163d90be203279750.jpg",
    ],
  },
  {
    dog: DogName.finseSpits,
    imgs: [
      "https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0049_finnish_spitz.jpg",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Finnish%20Spitz2.jpg?itok=nk-7lMzr",
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Finnish%20Spitz1.jpg?itok=RzliHFEm",
    ],
  },
  {
    dog: DogName.bolognezer,
    imgs: [
      "https://www.hondenrassen.nl/public/img/content/bolognezer.jpg",
      "https://www.purina.nl/sites/default/files/breed_library/bolognese.jpg",
      "https://egcn.nl/images/bolognezer/1/bolognezer.jpg",
    ],
  },
  {
    dog: DogName.russischeTerrier,
    imgs: [
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-2/zwarte-russische-terrier/brt-ou-0006.jpg",
      "https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2hlYWRlci1kb2ctaW1hZ2VzL1pSVC1yYXNkZXRhaWwucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOmZhbHNlfSwicmVzaXplIjp7IndpZHRoIjo1NDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
      "https://www.omlet.nl/images/cache/512/422/Dog-Black_Russian_Terrier-Two_beautiful_adult_Black_Russian_Terriers_content_in_each_others_company.jpg",
    ],
  },
  {
    dog: DogName.bouvierDesArdenne,
    imgs: [
      "https://jardinage.lemonde.fr/images/dossiers/2019-12/bouvier-des-ardennes-1-073856.jpg",
      "https://cdn.royalcanin-weshare-online.io/8mlWHWsBG95Xk-RBXfiT/v1/bd38h-hub-bouvier-des-ardennes-black-and-white?fm=jpg&auto=compress",
      "https://media.ooreka.fr/public/image/3-306021-2563-full-13058055.jpg",
    ],
  },
  {
    dog: DogName.epagneulNainContinentalPapillon,
    imgs: [
      "https://egcn.nl/images/Epapillon/1/Epagneul-Nain-Continental-Papillon.jpg",
      "https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/epagneul-nain-continental-papillon/pap-ou-0039.jpg",
      "https://img.passeportsante.net/1200x675/2022-08-17/epagneul-papillon.webp",
    ],
  },
  {
    dog: DogName.ruwharigeTeckel,
    imgs: [
      "https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0129_dachshund_wire_standard.jpg?itok=x0VONqvK",
      "https://st2.depositphotos.com/1806346/11156/i/600/depositphotos_111561602-stock-photo-miniature-wirehaired-dachshund.jpg",
      "http://teckelpedia.nl/wp-content/uploads/2021/03/43212686-rasechte-ruwharige-teckel-binnen-in-de-studio-en-geA%C2%AFsoleerd-op-een-zwarte-achtergrond-.jpg",
    ],
  },
  {
    dog: DogName.imaalTerrierOfIerseGlen,
    imgs: [
      "https://brit-petfood.com/file/nodes/product/irishglenofimaalterier.jpg",
      "https://www.akc.org/wp-content/uploads/2017/11/Glen-of-Imaal-Terrier-On-White-01.jpg",
      "https://animals.net/wp-content/uploads/2018/10/Glen-of-Imaal-Terrier-2-650x425.jpg",
    ],
  },
];
