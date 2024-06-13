import Head from 'next/head'
import Script from 'next/script'

const Meta = () => {
	return (
		<Head>
			{/* Essentials */}
			<meta charSet="utf-8" />
			<title>CyberCEO</title>

			{/* SEO */}
			<meta
				name="description"
				content="Securing the future: Keeping our current and future generations cyber safe."
			/>
			<meta name="author" content="CyberCEO" />
			<meta
				name="keywords"
				content="cyberCEO, cyber CEO, cyber community education outreach, cybersecurity"
			/>

			{/* Open Graph */}
			<meta
				property="og:description"
				content="Securing the future: Keeping our current and future generations cyber safe."
			/>
			<meta property="og:url" content="https://cyberceo-sd.org" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="CyberCEO" />
			<meta property="og:site_name" content="CyberCEO" />
			<meta property="og:image" content="/icon.png" />
			<meta property="og:image:alt" content="/icon.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta
				name="twitter:card"
				content="Securing the future: Keeping our current and future generations cyber safe."
			/>
			<meta name="twitter:url" content="https://cyberceo-sd.com" />
			<meta name="twitter:title" content="CyberCEO" />
			<meta
				name="twitter:description"
				content="Securing the future: Keeping our current and future generations cyber safe."
			/>
			<meta name="twitter:image" content="/icon.png" />

			{/* WeChat */}
			<meta itemProp="name" content="CyberCEO" />
			<meta itemProp="image" content="/icon.png" />
			<meta
				name="description"
				itemProp="description"
				content="Securing the future: Keeping our current and future generations cyber safe."
			/>

			{/* Apple */}
			<link rel="apple-touch-icon" href="/icon.png" />
			<link rel="apple-touch-startup-image" href="/icon.png" />
			<meta name="apple-mobile-web-app-title" content="CyberCEO" />
			<meta name="apple-mobile-web-app-capable" content="yes" />

			{/* IE */}
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />

			{/* QQ */}
			<meta name="x5-orientation" content="portrait" />
			<meta name="x5-fullscreen" content="true" />

			{/* UC Mobile */}
			<meta name="screen-orientation" content="portrait" />
			<meta name="full-screen" content="yes" />
			<meta name="wap-font-scale" content="no" />

			{/* Icons */}
			<meta name="image" content="/icon.png" />
			<link rel="icon" href="/icon.png" />

		</Head>
	)
}

export default Meta
