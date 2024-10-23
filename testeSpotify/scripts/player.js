let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'fHI8X4OXluQ', // ID do vídeo do YouTube
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('play-pause').addEventListener('click', function() {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });

    const progressBar = document.getElementById('progress-bar');
    progressBar.addEventListener('input', function() {
        const seekTime = player.getDuration() * (progressBar.value / 100);
        player.seekTo(seekTime);
    });

    const volumeBar = document.getElementById('volume-bar');
    volumeBar.addEventListener('input', function() {
        player.setVolume(volumeBar.value);
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        // Lógica para quando o vídeo começa a tocar
    }
}
