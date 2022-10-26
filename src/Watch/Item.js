import { React, Component } from "react";

import moment from "moment";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.divergence = props.TimeZone * 60;

		this.upd = () => {
			this.setState({ count: this.state.count + 1 });
		};
	}
	componentDidMount() {
		this.timerId = setInterval(this.upd, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<div>
				<span
					type="button"
					className="material-icons"
					onClick={() => this.props.onDel(this.props.id)}
				>
					highlight_off
				</span>
				<div>{this.props.name}</div>
				<div>
					{moment().utcOffset(this.divergence).format("HH:mm:ss")}
				</div>
			</div>
		);
	}
}

export default Item;
