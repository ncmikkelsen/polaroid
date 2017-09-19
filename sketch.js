var capture
var img
var negimg
var blurLevel = 3
var fadeLevel = 0
var capturing
function preload(){
	//capture = createCapture(VIDEO)
	capture = createCapture({
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  });
}

function setup() {
	createCanvas(640, 480)
	capture.hide()
	capturing = true
}

function draw() {
	if(capturing){
		console.log('drawing the capture object')
		image(capture.get(), 0, 0)
	} else {
		push()
			tint(fadeLevel, fadeLevel, fadeLevel)
			image(img ,0,0)
		pop()
	}
}

function mouseClicked(){
	console.log('capturing: ', capturing)
	if(capturing){
		img = capture.get()
		fadeLevel = 20
		console.log('grabbed image')
	} else {
		fadeLevel = 0
		console.log('setting fade to 0')
	}
	capturing = !capturing
}

function mouseMoved(){
	if(!capturing){
		fadeLevel += 1
		fadeLevel = constrain(fadeLevel, 0, 255)
		console.log(fadeLevel)		
	}
}

function touchEnded(){
	console.log('capturing: ', capturing)
	if(capturing){
		img = capture.get()
		fadeLevel = 20
		console.log('grabbed image')
	} else {
		fadeLevel = 0
		console.log('setting fade to 0')
	}
	capturing = !capturing
}

function deviceShaken(){
	if(!capturing){
		fadeLevel += 1
		fadeLevel = constrain(fadeLevel, 0, 255)
		console.log(fadeLevel)		
	}	
}
