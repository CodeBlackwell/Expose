export default ({ body, helmet, styles }) => {
	return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
	${styles}
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="root">${body}</div>
	<script src="/static/client.js" async></script>
</body>
</html>`;
};