import Background from '../sources/background.mp4'
import '../css/video.css'

const Video = () => {

    return (
        <div className='videoContainer'>
            <video src={Background} loop autoPlay='true' muted />
        </div>
    )
}

export default Video
