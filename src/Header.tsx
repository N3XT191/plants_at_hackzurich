import { Colors } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

import logo from "./image.png";

const styles = {
	header: css({
		backgroundColor: "#58b482",
		color: "#f1fdfb !important",
		textAlign: "left",
		fontWeight: 400,
	}),

	home: css({
		padding: 0,
		fontSize: "44px !important",
		color: Colors.LIGHT_GRAY5,
		":hover": { color: Colors.LIGHT_GRAY4, textDecoration: "none" },
	}),
	link: css({
		fontSize: "18px !important",
		color: Colors.LIGHT_GRAY5,
		marginTop: "16px",
		marginLeft: "20px",
		":hover": {
			borderBottom: "2px solid",
			color: Colors.LIGHT_GRAY5 + " !important",
			textDecoration: "none !important",
		},
	}),
	makeBottom: css({ marginTop: "10px" }),
};

export default class Header extends React.Component<{
	location: { pathname: string };
}> {
	public state = { isOpen: false };
	private makeLink = (to: string, label: string) => {
		return (
			<NavItem key={label}>
				<NavLink
					{...styles.link}
					to={to}
					activeStyle={{
						borderBottom: "2px solid",
					}}
					exact={true}
					onClick={() => {
						this.setState({ isOpen: false });
					}}
				>
					{label}
				</NavLink>
			</NavItem>
		);
	};
	public render() {
		const links = {
			left: [
				{ to: "/", label: "Home" },
				{ to: "/plants", label: "My Garden" },
				{ to: "/add", label: "Add Plants" },
			],
			right: [{ to: "/info", label: "Infos" }],
		};
		return (
			<div {...styles.header}>
				<Navbar dark={true} expand="md">
					<NavbarBrand>
						<Link
							to={"/"}
							{...styles.home}
							onClick={() => {
								this.setState({ isOpen: false });
							}}
						>
							plant.li
							<img alt="asdf" src={logo} height={60}></img>
						</Link>
					</NavbarBrand>
					<NavbarToggler
						onClick={() => {
							this.setState({ isOpen: !this.state.isOpen });
						}}
					/>
					<Collapse isOpen={this.state.isOpen} navbar={true}>
						<Nav className="mr-auto" navbar={true} {...styles.makeBottom}>
							{links.left.map((link) => this.makeLink(link.to, link.label))}
						</Nav>
						<Nav>{links.right.map((link) => this.makeLink(link.to, link.label))}</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
