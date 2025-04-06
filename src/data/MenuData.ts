interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
	{
		id: 1,
		has_dropdown: true,
		title: "Home",
		link: "/"
	},
	{
		id: 2,
		has_dropdown: true,
		title: "About",
		link: "/about"
	},
	{
		id: 3,
		has_dropdown: true,
		title: "Services",
		link: "/services"
	},
  {
    id: 4,
    has_dropdown: true,
    title: "Board",
    link: "/board"
  },
	{
		id: 5,
		has_dropdown: true,
		title: "Contact Us",
		link: "/contact"
	}
	// {
	// 	id: 4,
	// 	has_dropdown: true,
	// 	title: "Portfolio",
	// 	link: "#",
	// 	sub_menus: [
	// 		{ link: "/portfolio", title: "Portfolio" },
	// 		{ link: "/portfolio-details", title: "Portfolio Details" },
	// 		{ link: "/donate", title: "Donate" }
	// 	]
	// },
];
export default menu_data;
