window.onload = function () {
	var formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", validarFormulario);

	var borrar = document.getElementById('borrar');
	borrar.addEventListener("click", limpiarFormulario);

	var nombre = document.getElementById('nombre');
	nombre.addEventListener("input", validarCampoNombre);
	nombre.addEventListener("keypress", bloquearNumeros);

	var correo = document.getElementById('correo');
	correo.addEventListener("input", validarCampoCorreo);

	var direccion = document.getElementById('direccion');
	direccion.addEventListener("input", validarCampoDireccion);

	var pais = document.getElementById('pais');
	pais.addEventListener("input", validarCampoPais);
	pais.addEventListener("keypress", bloquearNumeros);

	var asunto = document.getElementById('asunto');
	asunto.addEventListener("input", validarCampoAsunto);

	var webSite = document.getElementById('web-site');
	webSite.addEventListener("input", validarCampoWebSite);

	var comentario = document.getElementById('comentario');
	comentario.addEventListener("input", validarCampoMensaje);
	comentario.addEventListener("input", calcular);
}

function bloquearNumeros(event) {
	var charCode = event.which ? event.which : event.keyCode;
	if (charCode >= 48 && charCode <= 57) {
		event.preventDefault();
	}
}

function calcular() {
	var contadorChar = document.getElementById("contador-char");
	var comentario = document.getElementById("comentario").value;
	var caracteresRestantes = 1000 - comentario.length;
	contadorChar.textContent = caracteresRestantes;
}

function validarFormulario(event) {
	event.preventDefault();

	var nombreValido = validarCampoNombre();
	var correoValido = validarCampoCorreo();
	var direccionValida = validarCampoDireccion();
	var paisValido = validarCampoPais();
	var asuntoValido = validarCampoAsunto();
	var webSiteValido = validarCampoWebSite();
	var mensajeValido = validarCampoMensaje();

	if (nombreValido && correoValido && direccionValida && paisValido && asuntoValido && webSiteValido && mensajeValido) {
		alert("Formulario enviado");
		this.submit();
	} else {
		return false;
	}
}

function validarCampoWebSite() {
	var webSite = document.getElementById('web-site').value;
	var webSiteError = document.getElementById('web-site_error');
	var campoWebSite = document.getElementById('web-site');

	if (!webSite) {
		mostrarError(webSiteError, "El Sitio Web es Requerido!");
		resaltarCampo(campoWebSite);
		return false;
	} else if (!/^(http|https|ftp):\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})(\/\S*)?$/.test(webSite)) {
		mostrarError(webSiteError, "Por favor ingrese una URL válida");
		resaltarCampo(campoWebSite);
		return false;
	} else {
		limpiarErrorYCampo(webSiteError, campoWebSite);
		return true;
	}
}

function validarCampoMensaje() {
	var usuarioMensaje = document.getElementById('comentario').value;
	var mensajeError = document.getElementById('comentario_error');
	var campoMensaje = document.getElementById('comentario');

	if (!usuarioMensaje) {
		mostrarError(mensajeError, "Por favor escriba su Mensaje!");
		resaltarCampo(campoMensaje);
		return false;
	} else if (usuarioMensaje.length > 1000) {
		mostrarError(mensajeError, "El Mensaje no puede tener más de 1000 caracteres.");
		resaltarCampo(campoMensaje);
		return false;
	} else {
		limpiarErrorYCampo(mensajeError, campoMensaje);
		return true;
	}
}

function validarCampoPais() {
	var pais = document.getElementById('pais').value;
	var paisError = document.getElementById('pais_error');
	var campoPais = document.getElementById('pais');

	if (!pais) {
		mostrarError(paisError, "El País es Requerido!");
		resaltarCampo(campoPais);
		return false;
	} else if (!/^[A-Za-z\s]+$/.test(pais)) {
		mostrarError(paisError, "Por favor ingrese un País válido (solo letras)");
		resaltarCampo(campoPais);
		return false;
	} else {
		limpiarErrorYCampo(paisError, campoPais);
		return true;
	}
}

function validarCampoNombre() {
	var usuarioNombre = document.getElementById('nombre').value;
	var nombreError = document.getElementById('nombre_error');
	var campoNombre = document.getElementById('nombre');

	if (!usuarioNombre) {
		mostrarError(nombreError, "Su Nombre Completo es Requerido!");
		resaltarCampo(campoNombre);
		return false;
	} else if (!/^[A-Za-z\s]+$/.test(usuarioNombre)) {
		mostrarError(nombreError, "Por favor ingrese un Nombre Completo válido (solo letras)");
		resaltarCampo(campoNombre);
		return false;
	} else {
		limpiarErrorYCampo(nombreError, campoNombre);
		return true;
	}
}

function validarCampoCorreo() {
	var usuarioCorreo = document.getElementById('correo').value;
	var correoError = document.getElementById('correo_error');
	var campoCorreo = document.getElementById('correo');

	if (!usuarioCorreo) {
		mostrarError(correoError, "Su Correo Electrónico es Requerido!");
		resaltarCampo(campoCorreo);
		return false;
	} else if (!/^\S+@\S+\.\S+$/.test(usuarioCorreo)) {
		mostrarError(correoError, "Por favor ingrese un Correo Electrónico válido");
		resaltarCampo(campoCorreo);
		return false;
	} else {
		limpiarErrorYCampo(correoError, campoCorreo);
		return true;
	}
}

function validarCampoAsunto() {
	var usuarioAsunto = document.getElementById('asunto').value;
	var asuntoError = document.getElementById('asunto_error');
	var campoAsunto = document.getElementById('asunto');

	if (!usuarioAsunto) {
		mostrarError(asuntoError, "El Tema del Asunto es Requerido!");
		resaltarCampo(campoAsunto);
		return false;
	} else {
		limpiarErrorYCampo(asuntoError, campoAsunto);
		return true;
	}
}

function validarCampoDireccion() {
	var direccion = document.getElementById('direccion').value;
	var direccionError = document.getElementById('direccion_error');
	var campoDireccion = document.getElementById('direccion');

	if (!direccion) {
		mostrarError(direccionError, "La Dirección es Requerida!");
		resaltarCampo(campoDireccion);
		return false;
	} else {
		limpiarErrorYCampo(direccionError, campoDireccion);
		return true;
	}
}

function mostrarError(elemento, mensaje) {
	elemento.innerHTML = mensaje;
	elemento.style.color = "#f00";
}

function limpiarErrorYCampo(elementoError, campo) {
	elementoError.innerHTML = "";
	campo.style.border = "1px solid #000";
}

function resaltarCampo(campo) {
	campo.style.border = "2px solid #f00";
}

function limpiarFormulario() {
	document.getElementById("formulario").reset();
	limpiarErrores();
}

function limpiarErrores() {
	var errores = document.querySelectorAll('.mensaje_error');
	errores.forEach(function (error) {
		error.textContent = '';
	});
	var campos = document.querySelectorAll('input, textarea');
	campos.forEach(function (campo) {
		campo.style.border = '1px solid #000';
	});
}
