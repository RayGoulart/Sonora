const addSongForm = document.getElementById('add-song-form');
const songList = document.getElementById('song-list');

// Carrega a playlist do localStorage ao iniciar a página
document.addEventListener('DOMContentLoaded', loadPlaylist);

addSongForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const title = document.getElementById('song-title').value;
    const artist = document.getElementById('song-artist').value;
    const videoId = document.getElementById('song-id').value;

    addSongToPlaylist(title, artist, videoId);
    addSongForm.reset(); // Limpa o formulário
});

// Adiciona a música à lista de reprodução
function addSongToPlaylist(title, artist, videoId) {
    const song = { title, artist, videoId };
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

    playlist.push(song);
    localStorage.setItem('playlist', JSON.stringify(playlist));
    renderPlaylist(playlist);
}

// Carrega a playlist do localStorage
function loadPlaylist() {
    const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    renderPlaylist(playlist);
}

// Renderiza a playlist na tela
function renderPlaylist(playlist) {
    songList.innerHTML = ''; // Limpa a lista atual
    playlist.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist} (ID: ${song.videoId})`;
        songList.appendChild(li);
    });
}
