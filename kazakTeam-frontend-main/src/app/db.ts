import {Product} from "./models";

export class MyDB{
  static Products = [
    {ID: 1,
      Name: "Спортивный костюм Adidas",
      Description: "ткань: хлопок",
      CategoryID: 1,
      Price: 25000,
      img: "https://scontent.fala11-1.fna.fbcdn.net/v/t39.30808-6/337130617_1156692755027365_2133735210639431813_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=pahnlHFYVVAAX9FQVeB&_nc_ht=scontent.fala11-1.fna&oh=00_AfDUJ3WsVxa4Yox4ilzLZtR6jsD6ckIWPwu6t0J2kzulqw&oe=644888AE",
      liked: false
    },
    {ID: 2,
      Name:'Спортивные костюм Nike',
      Description:'ткань: хлопок',
      CategoryID: 1, Price:25000,
      img: "https://scontent.fala11-1.fna.fbcdn.net/v/t39.30808-6/337369277_1776376049431487_6872932571088076440_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=-fr46lqR9UoAX9HDXDE&_nc_ht=scontent.fala11-1.fna&oh=00_AfDj3jsghEbklURFs_xhODV-lgM5oiJaJduoeWwy7KKqaw&oe=6448154B",
      liked: false
    },
    {ID: 3,
      Name:'Рашгард 3- ка',
      Description:'ткань: хлопок',
      CategoryID: 2,
      Price:18500,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/318305461_541335044672558_4352331908956021899_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=kdw7uEA3aFEAX8cBdMO&_nc_ht=scontent.fguw1-1.fna&oh=00_AfBiW_5Sy9LyyhmVxDaRj4nViza1CYW4b_XlP80OVlvGfg&oe=644FAEE5",
      liked: false
    },
    {ID: 4,
      Name:'Рашгард 3- ка АСА',
      Description:'ткань: хлопок',
      CategoryID: 2,
      Price:18500,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/317570126_538117058327690_2903069509975605558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=9w-TF1gTjbwAX8Oi1B1&_nc_ht=scontent.fguw1-1.fna&oh=00_AfAUGAN3EtJbsOThwzCDElId3jd7kRXaWj-lPR-DOHK9uA&oe=644EA35D",
      liked: false
    },
    {ID: 5,
      Name:'Бойцовская двойка',
      Description:'ткань: хлопок',
      CategoryID: 3,
      Price:15000,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/316668234_532318948907501_5859917990364531746_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=0XsQDPzirsoAX-dexxt&_nc_ht=scontent.fguw1-1.fna&oh=00_AfBMLXwGbGUXa55aeVCBHeIOl8-vCXgoVFAsf_95LByFZQ&oe=644FB04A",
      liked: false
    },
    {ID: 6,
      Name:'Футболка',
      Description:'ткань: хлопок',
      CategoryID: 3,
      Price:4900,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/295988232_1027770304589546_6151634625336879182_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=_xok5745IckAX8hG19y&_nc_ht=scontent.fguw1-1.fna&oh=00_AfCct9-zLTY_iGW-clWVwKP9PO6sSOP-fzwcXV8bSlnSCQ&oe=644E5A45",
      liked: false
    },
    {ID: 7,
      Name:'Кроссовки',
      Description:'ткань: хлопок',
      CategoryID: 4,
      Price:20000,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/303207055_465721455567251_7551380475368708931_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8eTGgoAFX1QAX9OQ535&_nc_ht=scontent.fguw1-1.fna&oh=00_AfABj16kTA29WoS19vaJ5WoCzFXzg2ELsk3UISZPBy1WlQ&oe=644E206E",
      liked: false
    },
    {ID: 8,
      Name:'Кроссовки',
      Description:'ткань: хлопок',
      CategoryID: 4,
      Price:20000,
      img: "https://scontent.fguw1-1.fna.fbcdn.net/v/t39.30808-6/302015053_465721458900584_2267550891489104856_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=SavgPTuawcEAX99bO4r&_nc_ht=scontent.fguw1-1.fna&oh=00_AfBq7cL6LexPCg8E3VfKJ2bRR7t6NSczSW-x-uiSkxB16Q&oe=644E6595",
      liked: false
    },
  ];

  // static GetProductByID(id: number): Product | undefined{
  //   let product = MyDB.Products.find(product => product.ID == id)
  //   return product
  // }

}
