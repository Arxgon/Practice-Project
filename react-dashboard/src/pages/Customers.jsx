import React from "react";

import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Page,
	Selection,
	Edit,
	Sort,
	Filter,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";

import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Customers" />
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{ allowDeleting: true, allowEditing: true }}
				width="auto"
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
