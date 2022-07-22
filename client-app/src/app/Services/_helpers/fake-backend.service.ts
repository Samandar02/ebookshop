import { Book, Catigorie,Comment } from "src/app/Models/models"

export class FakeBackend {
  static books:Book[] = [
    {
      id: 1,
      title: "Clean code",
      authors: "John Doe",
      publisher: "NYS",
      pages: 300,
      website: "cc.co",
      price: 302,
      img: "https://th.bing.com/th/id/R.ecdd3dace07a96ce08d6dd94c1541fb1?rik=S48TKPJtm30qTQ&pid=ImgRaw&r=0&sres=1&sresct=1",
      catigorieId: 1,
      catigorie: {},
      comments: {}
    },
    {
      "id": 2,
      "title": "The Progmatic Programmer",
      "authors": "Backham",
      "publisher": "Random House",
      "pages": 400,
      "website": "tpp.com",
      "price": 123,
      "img": "https://th.bing.com/th/id/OIP.3GNqwZKzUfpEO5VIuQHZSAHaG8?pid=ImgDet&rs=1",
      "catigorieId": 1,
      "catigorie": {},
      "comments": {}
    },
    {
      "id": 3,
      "title": "Atomic Habbits",
      "authors": "James Clear",
      "publisher": "Random House",
      "pages": 400,
      "website": "jamesclear.net",
      "price": 321,
      "img": "https://th.bing.com/th/id/R.2636f40066ea2dd17adf8b5e2c7e4b52?rik=taSOLIK3pPG%2bYw&pid=ImgRaw&r=0",
      "catigorieId": 2,
      "catigorie": {},
      "comments": {}
    },
  ]
  static catigories: Catigorie[]= [
    {
      "id": 1,
      "catigorieName": "Developers",
      "books": []
    },
    {
      "id": 2,
      "catigorieName": "Psycology",
      "books": []
    },
    {
      "id": 3,
      "catigorieName": "Romance",
      "books": []
    },
    {
      "id": 4,
      "catigorieName": "Science",
      "books": []
    },
    {
      "id": 5,
      "catigorieName": "Humans Resurse",
      "books": []
    }
  ]
  static comments: Comment[] = [
    {
      id: 1,
      "text": "Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found arose.",
      "raiting": 12,
      "bookId": 1,
      "userId": "123",
      "book": {},
      "comments": []
    },
    {
      "id": 2,
      "text": "She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.",
      "raiting": 6,
      "bookId": 1,
      "userId": "123",
      "book": {},
      "comments": []
    },
    {
      "id": 3,
      "text": "Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.",
      "raiting": 4,
      "bookId": 2,
      "userId": "321",
      "book": {},
      "comments": []
    },
    {
      "id": 4,
      "text": "Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she.",
      "raiting": 9,
      "bookId": 2,
      "userId": "321",
      "book": {},
      "comments": []
    },
    {
      "id": 5,
      "text": "string",
      "raiting": 8,
      "bookId": 1,
      "userId": "321",
      "book": {},
      "comments": []
    },
  ]
  public static getBooks() {
    return (this.books)
  }

  public static getCatigories() {
    return this.catigories
  }

  public static getComments() {
    return this.comments
  }

}



