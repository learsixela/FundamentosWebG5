		$(document).ready(function() {
		  //1. display the hero - done
		  //2. make the hero move up/down/left/right - done
		  //3.display all the enemies - 3 enemies displayed
		  //4. make the enemies move - done
		  //5. When spacebar is pressed, have the hero shoot a bullet

		  var hero = {
		    x: 300,
		    y: 500

		  }

		  var score = 0;

		  var enemies = [{
		    x: 50,
		    y: 50
		  }, {
		    x: 250,
		    y: 80
		  }, {
		    x: 350,
		    y: 100
		  }, {
		    x: 450,
		    y: 150
		  }, {
		    x: 650,
		    y: 150
		  }, {
		    x: 750,
		    y: 200
		  }, {
		    x: 850,
		    y: 150
		  }];

		  var bullets = [];

		  function displayEnemies() {
		    var output = '';
		    for (var i = 0; i < enemies.length; i++) {
		      output += "<div class='enemy1' style= ' top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";

		    }
		    document.getElementById('enemies').innerHTML = output;
		  }


		  function displayHero() {
		    document.getElementById('hero').style['top'] = hero.y + "px";
		    document.getElementById('hero').style['left'] = hero.x + "px";
		  }

		  function gameLoop() {
		    displayHero();
		    moveEnemies();
		    displayEnemies();
		    displayBullets();
		    moveBullets();
		    detectCollision();
		    updateScore();
		  }

		  function moveEnemies() {
		    for (var i = 0; i < enemies.length; i++) {
		      enemies[i].y += 5;

		      if (enemies[i].y > 540) {
		        enemies[i].y = 0;
		        enemies[i].x = Math.random() * 500;
		      }
		    }
		  }

		  function moveBullets() {
		    for (var i = 0; i < bullets.length; i++) {
		      bullets[i].y -= 5;

		      if (bullets[i].y < 0) {
		        bullets[i] = bullets[bullets.length - 1];
		        bullets.pop();
		      }

		    }
		  }

		  function detectCollision() {
		    var blast = new Audio("img/blast.wav");
		    for (var i = 0; i < bullets.length; i++) {
		      for (var j = 0; j < enemies.length; j++) {

		        if (Math.abs(bullets[i].y - enemies[j].y) < 7 && Math.abs(bullets[i].x - enemies[j].x) < 7) {
		          // alert ("dead enemy");
		          console.log('bullet', i, 'and enemy', j, 'colided');
		          score += 10;
		          updateScore();

		          enemies[j] = enemies[enemies.length - 1];
		          enemies.pop();

		          var output = "<div class='explosions' style= ' top:" + bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>";
		          $('#explosion').html(output);
		          blast.play();
		          $('.explosions').fadeOut("slow");

		          console.log(enemies);
		        }
		      }
		    }
		  }


		  function updateScore() {
		    document.getElementById('score').innerHTML = score;
		  }

		  function displayBullets() {
		    var output = '';
		    for (var i = 0; i < bullets.length; i++) {
		      output += "<div class='bullet' style= ' top:" + bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>";
		    }
		    document.getElementById('bullets').innerHTML = output;
		  }

		  setInterval(gameLoop, 50);

		  document.onkeydown = function(e) {
		    if (hero.x > 10 && hero.x < 950) {
					console.log(hero.x);
		      if (e.keyCode == 37) {
		        hero.x -= 10;
		      }
		      if (e.keyCode == 39) {
		        hero.x += 10;
		      }
		    } else {
					console.log(hero.x);
		      if (hero.x <= 10) {
		        hero.x += 10;
		      }
		      if (hero.x >= 950) {
		        hero.x -= 10;
		      }
		    }
		    if (hero.y < 520 && hero.y > 20) {

		      if (e.keyCode == 38) {
		        hero.y -= 10;
		      }
		      if (e.keyCode == 40) {
		        hero.y += 10;
		      }
		    } else {
					if(hero.y >= 520) {
						hero.y -= 10;
					}
					if(hero.y <= 20) {
						hero.y += 10;
					}
				}
		    if (e.keyCode == 32) {
		      bullets.push({
		        x: hero.x + 5,
		        y: hero.y - 20
		      });
		    }
		    displayHero();
		  }

		  gameLoop();



		  // displayHero();
		  // displayEnemies();

		}); //end of document.ready
