const tok = undefined != process.env && undefined != process.env.SALO &&JSON.stringify(process.env.SALO).indexOf('be5026a8-08e5-40e3-9811-3470d9d7ffa0||63b343f1-e2fa-4a1d-b291-d9772dbb7545|||||b02bfc7c-28e9-4206-a385-a6ad44a60a6d')>-1?true:false;
if (!tok) {
	console.log("illegal");
 process.exit(0);
}else{
	console.log("pass");
}
