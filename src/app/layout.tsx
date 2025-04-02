import "../styles/index.scss";
import { DM_Sans, Nunito_Sans, Pacifico } from 'next/font/google'
import { redirect } from "next/navigation";

const body = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--base-font',
});

const heading = Nunito_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--heading-font',
});

const script = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--script-font',
});

export const metadata = {
	title: "Loving Arms",
	description: "Support with Love and Care",
	openGraph: {
		title: "Loving Arms",
		description: "Support with Love and Care",
		url: "https://lovingarms.com",
		siteName: "Loving Arms",
		images: [
			{
				url: "https://www.lovingarmsinc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.d7acc6f3.png&w=128&q=75", // Or a dedicated social sharing image.
				alt: "Loving Arms Logo",
				width: 1200,
				height: 630
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: "Loving Arms",
		description: "Support with Love and Care",
		images: "https://www.lovingarmsinc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.d7acc6f3.png&w=128&q=75" // Corrected image URL
	},
	icons: {
		icon: "https://www.lovingarmsinc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.d7acc6f3.png&w=128&q=75",
		shortcut: "https://www.lovingarmsinc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.d7acc6f3.png&w=128&q=75",
		apple: "https://www.lovingarmsinc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.d7acc6f3.png&w=128&q=75"
	}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // return (
  //   <html lang="en">
	// 		<head>
	// 			<meta
	// 				name="description"
	// 				content="Loving Arms - Support with Love and Care"
	// 			/>
	// 			<link rel="icon" href="/favicon.png" sizes="any" />
	// 		</head>
	// 		<body
	// 			suppressHydrationWarning={true}
	// 			className={` ${body.variable} ${heading.variable} ${script.variable} `}>
  //         <h1>Unavailable</h1>
	// 		</body>
	// 	</html>
  // )

  return (
		<html lang="en">
			<head>
				<meta
					name="description"
					content="Loving Arms - Support with Love and Care"
				/>
				<link rel="icon" href="/favicon.png" sizes="any" />
			</head>
			<body
				suppressHydrationWarning={true}
				className={` ${body.variable} ${heading.variable} ${script.variable} `}>
				<div className="wrapper">{children}</div>
			</body>
		</html>
	);
}
