some code:

~~~~html
<!DOCTYPE html>
<html>
<body>
<script type="text/javascript">
function altera() {
	var myobject = document.getElementById('demo')
	console.log(myobject)
	if (myobject.innerHTML == ''){
		myobject.innerHTML = Date()
	}
	else {
		myobject.innerHTML = 'se fode ai'
	}
}

</script>

<h2>My First JavaScript</h2>

<button type="button"
onclick="altera()">
Click me to display Date and Time.</button>

<p id="demo"></p>



</body>
</html> 

~~~~

<!DOCTYPE html>
<html>
<body>
<script type="text/javascript">
function altera() {
	var myobject = document.getElementById('demo')
	console.log(myobject)
	if (myobject.innerHTML == ''){
		myobject.innerHTML = Date()
	}
	else {
		myobject.innerHTML = 'se fode ai'
	}
}

</script>

<h2>My First JavaScript</h2>

<button type="button"
onclick="altera()">
Click me to display Date and Time.</button>

<p id="demo"></p>



</body>
</html>
e é isso.
