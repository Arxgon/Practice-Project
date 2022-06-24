import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import {
	earningData,
	SparklineAreaData,
	ecomPieChartData,
} from "../data/dummy";

const Ecommerce = () => {
	return (
		<div className="mt-24">
			<div className="flex flex-wrap lg:flex-nowrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-800 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div className="flex justify-between items-center">
						<div>
							<p className="font-bold text-gray-400">Text SubTitle</p>
							<p className="text-2xl">Text Title</p>
						</div>
						<button
							type="button"
							style={{ backgroundColor: "orange" }}
							className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
						>
							<BsCurrencyDollar />
						</button>
					</div>
					<div className="mt-6">
						<Button
							color="white"
							bgColor="orange"
							text="Download"
							borderRadius="10px"
							size="md"
						/>
					</div>
				</div>

				<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
					{earningData.map((item) => (
						<div
							key={item.title}
							className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
						>
							<button
								type="button"
								style={{ color: item.iconColor, backgroundColor: item.iconBg }}
								className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
							>
								{item.icon}
							</button>
							<p className="mt-3">
								<span className="text-lg font-semibold">{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>
									{item.percentage}
								</span>
							</p>
							<p className="text-sm txt-gray-400 mt-1">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Some title</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Information 1</span>
							</p>
							<p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Information 2</span>
							</p>
						</div>
					</div>
					<div className="mt-10 flex gap flex-wrap justify-center">
						<div className="border-r-1 border-color m-4 pr-10">
							<div>
								<p>
									<span className="text-3xl font-semibold">Information</span>
									<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
										info
									</span>
								</p>
								<p className="text-gray-500 mt-1">Sub Title</p>
							</div>
							<div className="mt-8">
								<p>
									<span className="text-3xl font-semibold">Information</span>
									<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
										info
									</span>
								</p>
								<p className="text-gray-500 mt-1">Sub Title</p>
							</div>
							<div className="mt-5">
								<SparkLine
									currentColor="orange"
									id="line-sparkline"
									type="Line"
									height="80px"
									width="250px"
									data={SparklineAreaData}
									color="orange"
								/>
							</div>
							<div className="mt-10">
								<Button
									color="white"
									bgColor="orange"
									text="Download Report"
									borderRadius="10px"
								/>
							</div>
						</div>
						<div>
							<Stacked width="320px" height="360px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;
