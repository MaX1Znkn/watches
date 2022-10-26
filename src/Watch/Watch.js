import nextId from "react-id-generator";
import React, { useState } from "react";
import Item from "./Item";

const Watch = () => {
	const [forms, setValue] = useState({ name: "", TimeZone: 0, id: "" });
	const [formsArr, setFormArr] = useState([]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name === "TimeZone" && value > 12) {
			setValue((prev) => ({ ...prev, [name]: 12 }));
		} else if (name === "TimeZone" && value < -12) {
			setValue((prev) => ({ ...prev, [name]: -12 }));
		} else {
			setValue((prev) => ({ ...prev, [name]: value, id: nextId() }));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setValue((prev) => ({ name: "", TimeZone: 0 }));
		setFormArr((prev) => [...prev, forms]);
	};

	function onDel(i) {
		const newArr = formsArr.filter((item) => item.id !== i);
		setValue((prev) => ({ name: "", TimeZone: 0 }));
		setFormArr(newArr);
	}

	return (
		<div className="Watch">
			<form onSubmit={handleSubmit}>
				<table>
					<thead>
						<tr>
							<th>Название</th>
							<th>Временная зона</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input
									id="text"
									type="text"
									name="name"
									className=""
									value={forms.name}
									onChange={handleChange}
								/>
							</td>
							<td>
								<input
									id="distance"
									type="number"
									name="TimeZone"
									className=""
									onChange={handleChange}
									value={forms.TimeZone}
								/>
							</td>
							<td>
								<button>Добавить</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<div>
				{formsArr.map((item) => {
					return (
						<Item
							name={item.name}
							TimeZone={item.TimeZone}
							onDel={onDel}
							key={item.id}
							id={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Watch;
