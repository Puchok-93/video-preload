export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player');
    const playButton = document.querySelector('.video-button__play');
    const stopButton = document.querySelector('.video-button__stop');
    const timePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const timeTotal = document.querySelector('.video-time__total');
    // const fullVideo = document.querySelector('.video-button__full');

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        } else {
            playButton.classList.add('fa-pause');
            playButton.classList.remove('fa-play');
        }
    };

    const playVideo = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }

        // toggleIcon();
    };

    const stopVideo = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    const addZero = n => n < 10 ? '0' + n : n;


    videoPlayer.addEventListener('click', playVideo);
    playButton.addEventListener('click', playVideo);

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const durationVideo = videoPlayer.duration;

        let minutesPassed = Math.floor(currentTime / 60);
        let secondsPassed  = Math.floor(currentTime % 60);

        let minutesDuration = Math.floor(durationVideo / 60);
        let secondsDuration = Math.floor(durationVideo % 60);

        videoProgress.value = (currentTime / durationVideo) * 100;
        timePassed.textContent = addZero(minutesPassed) + ':' + addZero(secondsPassed);
        timeTotal.textContent = addZero(minutesDuration) + ':' + addZero(secondsDuration);
    })
    stopButton.addEventListener('click', stopVideo);

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value =  videoProgress.value;

        videoPlayer.currentTime = (duration * value) / 100;
    });

    // fullVideo.addEventListener('click', () => {
    //     videoPlayer.webkitRequestFullscreen();
    // })

};