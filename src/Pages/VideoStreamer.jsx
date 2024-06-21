import React, { useEffect, useRef } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={800} height={600} autoPlay controls />;
};

const VideoStreamer = (props) => {
  const { startRecording, stopRecording, mediaBlobUrl, status, clearBlobUrl, pauseRecording, resumeRecording, previewStream } = useReactMediaRecorder({
    video: true,
  });

  const handleUpload = () => {
    props.uploadVideo(mediaBlobUrl)
  }

  return (
    <>
    <div className='video row d-flex justify-content-center'>
      <div className='video buttons col-12 d-flex justify-content-center '>
        {
          status === "idle" ?
          
          <button class="btn btn-outline-success btn-sm" onClick={startRecording}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/></svg>
          Start Recording</button> 
          
          : 

          <button class="btn btn-outline-danger btn-sm" onClick={stopRecording} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="" class="bi bi-stop-circle " viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"/></svg>
          Stop Recording</button>
        }
        {
          status === "paused" ?
          
          <button className='btn btn-outline-secondary btn-sm' onClick={resumeRecording} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/></svg>
          resume Recording </button>
          
          : 
          
          <button className='btn btn-outline-secondary btn-sm' onClick={pauseRecording} disabled={status !== "recording"}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="" class="bi bi-pause-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
        </svg> Pause Recording</button>
        }

        <button className='btn btn-outline-danger btn-sm' onClick={clearBlobUrl} disabled={status !== "stopped"}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
         Delete Recording</button>
        {/* <button onClick={handleUpload} disabled={status !== "stopped"}>Submit Video</button> */}


      </div>


      {status === "recording" || status === "paused" ?
        <VideoPreview stream={previewStream} /> :
        <video className=' ' src={mediaBlobUrl} width={800} height={600} controls autoPlay  />}
    </div>
    <div className=' d-flex justify-content-center p-1'>
    <button id="submit-btn" className="btn px-4 btn-primary text-white"onClick={handleUpload} disabled={status !== "stopped"}>Submit Video</button>
    </div>
    </>
  );

}


export default VideoStreamer;