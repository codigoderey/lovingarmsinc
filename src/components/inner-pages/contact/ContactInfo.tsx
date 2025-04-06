import Link from "next/link";
import React from "react";

interface DataType {
   id: number;
   item_bg?: string;
   icon: string;
   title: string;
   contact_info?: {
      info_link: string;
      info_title: string;
   }[];
   contact_info_text?: JSX.Element;
}[]

const contact_data: DataType[] = [
	{
		id: 1,
		item_bg: "contact-info-item--green",
		icon: "flaticon-phone-call",
		title: "Phone Number",
		contact_info: [
			{
				info_link: "callto:(443) 415 1174",
				info_title: "Call Now"
			}
		]
	},
	{
		id: 2,
		item_bg: "contact-info-item--yellow",
		icon: "flaticon-phone-call",
		title: "Email Now",
		contact_info: [
			{
				info_link: "mailto:lovingarms3@gmail.com",
				info_title: "Email Now"
			}
		]
	},
	{
		id: 3,
		icon: "flaticon-pin",
		title: "Office Address",
		contact_info_text: (
			<>
				2901 Druid Park Drive, Suite 103
				<br />
				Baltimore, Maryland 21215
			</>
		)
	}
];

const ContactInfo = () => {
   return (
      <div className="contact-info-area py-85">
         <div className="container">
            <div className="row justify-content-center">
               {contact_data.map((item) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                     <div className={`contact-info-item ${item.item_bg}`}>
                        <div className="contact-info__icon"><i className={item.icon}></i></div>
                        <h5>{item.title}</h5>
                        <div className="contact-info__text">
                           {item.contact_info ? (item.contact_info.map((info, index) => (
                              <React.Fragment key={index}>
                                 <Link href={info.info_link}>{info.info_title}</Link><br />
                              </React.Fragment>
                           ))) : (item.contact_info_text)}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ContactInfo
