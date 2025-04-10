import Link from "next/link";

export default function GrandOpening() {
	return (
		<>
			<style>
				{`
          .grand-opening {
            background-color: #A6AB6E;
            color: #000;
            padding: 20px;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
          }

          .grand-opening p {
            margin: 0;
            font-size: 24px;
            font-weight: normal;
            line-height: 1.5;
          }
          .grand-opening p:first-child {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .grand-opening p:last-child {
            font-size: 28px;
            font-weight: bold;
            margin-top: 10px;
          }

          .grand-opening a {
            background-color: #000;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
          }

          @media (max-width: 768px) {
            .grand-opening {
              font-size: 24px;
              padding: 15px;
            }
            .grand-opening p {
              font-size: 20px;
              line-height: 1.4;
            }
            .grand-opening p:first-child {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .grand-opening p:last-child {
              font-size: 24px;
              font-weight: bold;
              margin-top: 5px;
            }
          }
          @media (max-width: 480px) {
            .grand-opening {
              font-size: 20px;
              padding: 10px;
            }
            .grand-opening p {
              font-size: 18px;
              line-height: 1.3;
            }
            .grand-opening p:first-child {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .grand-opening p:last-child {
              font-size: 20px;
              font-weight: bold;
              margin-top: 5px;
            }
          }
        `}
			</style>
			<div className="grand-opening">
				<p>Loving Arms Grand Opening</p>
				<p>Friday, April 11, 2025 11 AM - 4 PM </p>
				<p>3313 Oakfield Avenue Gwynn Qak, MD. 21207</p>
				<Link
					href="/assets/docs/00-event.pdf"
					download="event.pdf"
					className="cr-btn btn--yellow btn--green">
					Learn More
				</Link>
			</div>
		</>
	);
}
