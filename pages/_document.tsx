import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps }  from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initinalProps= await Document.getInitialProps(ctx);
		return {...initinalProps};
	}
	render(){
		return (
			<Html lang='ru'>
				<Head/>
				{/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
				<title>My App</title>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;