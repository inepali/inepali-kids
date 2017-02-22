var app=angular.module('iNepali.pixis', [])
app.factory('pixis', function ($window, ){
	var renderer
	var stage
	var texture
	var bunny;
	var canvas;


function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}

var init = function ()
{

	$scope.pixiRender = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
	//$scope.pixiRender.appendChild(renderer.view);


	// create the root of the scene graph
	stage = new PIXI.Container();

	// create a texture from an image path
	texture = PIXI.Texture.fromImage('/pages/1.jpg');

	// create a new Sprite using the texture
	bunny = new PIXI.Sprite(texture);

	// center the sprite's anchor point
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;

	// move the sprite to the center of the screen
	bunny.position.x = 200;
	bunny.position.y = 150;

	stage.addChild(bunny);

	return state;
	// start animating
	//animate();
};

var animate = function ()
{
		requestAnimationFrame(animate);

    	// just for fun, let's rotate mr rabbit a little
    	bunny.rotation += 0.1;

    	// render the container
    	renderer.render(stage);
}



return {
	init: init,
	animate: animate
};
});