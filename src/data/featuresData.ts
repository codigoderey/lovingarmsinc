import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page:string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?:string;
}

const features_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      icon_name: "flaticon-help",
      title: "Become an volunteer",
      desc: "If it is in your heart to help, we can work together to make a difference. Contact us now.",
   },
   {
      id: 2,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Fundraising Activities",
      desc: "As a non profit organization we perform fundraising activities to help those in need.",
   },
   {
      id: 3,
      page:"home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Start Donating",
      desc: "Either your time, effort or money can make a difference to someone in need. Join us now.",
   },

   // home one single features
   {
      id: 1,
      page:"single_features",
      title: "Youth & Family Education",
      desc: "With resources and support, we can help families and youth to get the education they deserve.",
   },
   {
      id: 2,
      page:"single_features",
      title: "Resources for Youth at Risk",
      desc: "We provide resources and support to youth at risk to help them get back on their feet.",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page:"single_features",
      title: "Helping Children in Need",
      desc: "Our children deserve the best. We provide resources and support to children in need.",
      btn_bg: "btn--green",
   },

   // home two

   {
      id:1,
      page:"home_2",
      icon_name:"flaticon-help",
      title:"Become a volunteer",
      desc:"Morem ipsum is simply free text amet consectetuer adipiscing elit.",
   },
   {
      id:2,
      page:"home_2",
      icon_name:"flaticon-donation",
      title:"Get Involved",
      desc:"Morem ipsum is simply free text amet consectetuer adipiscing elit.",
      item_bg:"feature-item--green",
   },
   {
      id:3,
      page:"home_2",
      icon_name:"flaticon-solidarity",
      title:"Adopt a child",
      desc:"Morem ipsum is simply free text amet consectetuer adipiscing elit.",
      item_bg:"feature-item--yellow",
   },

   // home three

   {
      id:1,
      page:"home_3",
      bg_img:features3Bg_1,
      icon_name:"flaticon-solidarity",
      title:"Get Inspire",
      desc:"Learn how to help others in need. It is more blessed to give than to receive.",
   },
   {
      id:2,
      page:"home_3",
      bg_img:features3Bg_2,
      icon_name:"flaticon-heart",
      title:"Donate for charity",
      desc:"If you are looking to be of a help, learn about how can you do it with us.",
   },
   {
      id:3,
      page:"home_3",
      bg_img:features3Bg_3,
      icon_name:"flaticon-help",
      title:"Become a volunteer",
      desc:"There are many ways to volunteer with us. Join us and make a difference.",
   },
]

export default features_data;