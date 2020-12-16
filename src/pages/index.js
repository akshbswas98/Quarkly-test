import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://lh3.googleusercontent.com/pw/ACtC-3cNZg8Ag8ct1oXNjogcOdr8wchExMa8nzrOqwzTw1T86TDbG0gclhu9980mLYSS2u8KLz8R9Tt7rrgfJX_FgWPwwfuoeRf-CJupo37shfRKMhU5HN0yPdY91OvNfqghj9zG5MdZibiIV9CpzxGi9K3kKQ=w1219-h914-no?authuser=0) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About me
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Hey I’m Akash
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--base"
						max-width="400px"
						color="#f6f8ef"
						text-align="justify"
						text-transform="uppercase"
						border-color="#141513"
					>
						My name is Akash Biswas, born and raised in Siliguri, currently pursuing BE-  information Science & Engineering at Acharya Institute of Technology,Bangalore.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section border-color="#e10f0f">
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				background="#95a0f1"
			>
				ONLINE EXAMINATION MANAGEMENT
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
				mix-blend-mode="multiply"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-404">
					HOME
				</Override>
				<Override slot="link-index">
					SIGNUP/SINGIN
				</Override>
			</Menu>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						I'm just{" "}
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
						17
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});