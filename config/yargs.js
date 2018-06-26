const descripcion = {
			alias: 'd',
			demand: true,
			desc: 'Descripcion de la tarea por hacer'
		}

const completado = {
			alias: 'c',
			default: true,
			desc: 'Marca compo completado o pendiente la tarea'
		}

const argv = require('yargs')
	.command('crear','Crear un elemento por hacer',{
		descripcion
	})
	.command('actualizar','Actualiza el estado completado de una tarea',{
		descripcion,
		completado
	})
	.command('borrar','Borra el elemento por hacer',{
		descripcion
	})
	.help()
	.argv;

	module.exports = {
		argv
	}