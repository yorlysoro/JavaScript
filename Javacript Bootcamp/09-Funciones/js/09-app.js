const reproductor = {
    reproducir: function(cancion) {
        console.log(`Reproduciendo la canción: ${cancion}`);
    },
    pausar: function() {
        console.log('Pausando la canción');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.reproducir('Imagine - John Lennon');
reproductor.pausar();
reproductor.crearPlaylist('Rock Clásico');
reproductor.reproducirPlaylist('Rock Clásico');

reproductor.borrar = function(nombre) {
    console.log(`Borrando la playlist: ${nombre}`);
}

reproductor.borrar('Rock Clásico');