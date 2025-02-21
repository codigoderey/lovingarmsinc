import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonials/author1.jpeg";
import authorImg_2 from "@/assets/img/testimonials/author2.jpeg";
import authorImg_3 from "@/assets/img/testimonials/author3.jpg";

import quoteIcon_1 from "@/assets/img/testimonials/quote-icon1.png";
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import quoteIcon_3 from "@/assets/img/testimonials/quote-icon3.png";

interface DataType {
   id: number;
   page:string;
   desc: string;
   name: string;
   designation: string;
   rating?:string[];
   img?:StaticImageData | undefined;
   item_bg?:string;
   quote_icon?:StaticImageData;
}

const testimonial_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      desc: "Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable. you are going to use.",
      name: "Robart Jonson",
      designation: "Doner, Canada",
   },
   {
      id: 2,
      page:"home_1",
      desc: "You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable.",
      name: "Jesse Rayford",
      designation: "Doner, Canada",
   },
   {
      id: 3,
      page:"home_1",
      desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, or you are going to use.",
      name: "Ralph Alfred",
      designation: "Doner, Canada",
   },
   {
      id: 4,
      page:"home_1",
      desc: "You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable.",
      name: "Jesse Rayford",
      designation: "Doner, Canada",
   },
   {
      id: 5,
      page:"home_1",
      desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, or you are going to use.",
      name: "Ralph Alfred",
      designation: "Doner, Canada",
   },

   // home two

   {
      id: 1,
      page:"home_2",
      desc: "Loving Arms Inc. have served me with the best care and support. I am very happy with their service. I would recommend them to anyone.",
      name: "Robart Jonson",
      designation: "Baltimore, Maryland",
      rating:["flaticon-star","flaticon-star","flaticon-star","flaticon-star","flaticon-star",],
   },
   {
      id: 2,
      page:"home_2",
      desc: "A ne of the more obscure Latin You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly.",
      name: "Jesse Rayford",
      designation: "Doner, Canada",
      rating:["flaticon-star","flaticon-star","flaticon-star","flaticon-star","flaticon-star",],
   },
   {
      id: 3,
      page:"home_2",
      desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, a ne of the more obscure Latin or you are going.",
      name: "Ralph Alfred",
      designation: "Doner, Canada",
      rating:["flaticon-star","flaticon-star","flaticon-star","flaticon-star","flaticon-star",],
   },

   // home three

   {
      id: 1,
      page:"home_3",
      desc: "Loving Arms Inc have served me with the best care and support. I am very happy with their service. I recommend them to anyone.",
      name: "Keyshawn Wilson",
      designation: "Baltimore, Maryland",
      img:authorImg_1,
      quote_icon:quoteIcon_1,
   },
   {
      id: 2,
      page:"home_3",
      desc: "I was very impresed by Loving Arms Inc genuine care and support. I am very happy with their service. I would absolutely recommend them.",
      name: "Wade Warren",
      designation: "Owings Mills, Maryland",
      img:authorImg_2,
      item_bg:"item--green",
      quote_icon:quoteIcon_2,
   },
   {
      id: 3,
      page:"home_3",
      desc: "Cindy was very helpful and supportive. I am very happy with their service. I would recommend and come back if I need any help.",
      name: "Jenny Johnson",
      designation: "Glen Burnie, Maryland",
      img:authorImg_3,
      item_bg:"item--yellow",
      quote_icon:quoteIcon_3,
   },
]

export default testimonial_data;