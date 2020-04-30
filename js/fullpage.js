const seccionesPagina = new fullpage('#fullpage', {
    autoScrolling:true,
    fitToSection:false,
    fitToSectionDelay:300,
	css3: true,
	loopBottom: false,
	responsiveWidth: 900,
	//menu settings
	navigation:true,
	menu: '#menu',
	anchors: [
		'home',
		'about',
		'skills',
		'portfolio',
		'contacto'
	],
	naviationTooltips:['home', 'about', 'skills', 'portfolio', 'contacto'],
	
});

fullpage_api.setAllowScrolling(true);