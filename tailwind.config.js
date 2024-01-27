/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				verde: {
					50: "#97c847",
					100: "#00B37E",
					200: "#015F43",
					300: "#0e662d",
					600: "rgba(0, 179, 126, 0.6)",
				},
				cinza: {
					50: "#F2F2F2",
					100: "#f6fbff",
					200: "#C4C4CC",
					300: "#8D8D99",
					350: "#343438",
					400: "#28282c",
					500: "#1f1f23",
				},
				azul: {
					30: "#d9f2fa",
					40: "#c5eefc",
					50: "#81D8F7",
					100: "#00B9ED",
					200: "#00ADDE",
					300: "#155794",
					400: "#1948ae",
					500: "#374151",
					700: "#06202D",
					800: "#0A3347",
					900: "#04161F",
				},
				laranja: {
					100: "#F1511B",
					200: "#6d4b24",
				},
				vermelho: {
					100: "#F75A68",
					200: "#A93E47",
				},
				roxo: {
					100: "#582058",
				},
				marca: {
					azul1: "#00B9ED",
					escuro1: "#06202d",
					verde1: "#97c847",
				},
				branco: {
					50: "#F7F8FA",
					100: "#EAEDF1",
				},
			},
			height: {
				nulo: "0vh",
				93: "93.9vh",
				95: "95vh",
				450: "450px",
				500: "500px",
			},
			maxHeight: {
				450: "450px",
			},
			width: {
				520: "520px",
				550: "550px",
				600: "610px",
				650: "600px",
				700: "700px",
				750: "750px",
			},
			margin: {
				topNeg: "-1rem",
			},
			rotate: {
				270: "270deg",
			},
			gridTemplateRows: {
				painel: "60px 98px 27px 27px",
				painel2: "54px 124px 22px",
			},
		},
	},
	plugins: [],
}
