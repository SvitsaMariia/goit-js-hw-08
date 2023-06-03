import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoCurrentTime = event => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds));
};

player.on('timeupdate', throttle(videoCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);