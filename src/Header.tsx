import { Colors } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

const styles = {
	header: css({
		backgroundColor: "#91972A",
		color: Colors.LIGHT_GRAY5 + " !important",
		padding: "10px",
		margin: "0 0 10px 0",
		textAlign: "left",
	}),

	home: css({
		fontSize: "34px !important",
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
				{ to: "/plants", label: "My Plants" },
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
							Plant.li
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
