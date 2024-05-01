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
  return <video ref={videoRef} width={900} height={700} autoPlay controls />;
};

const VideoStreamer = (props) => {
  const { startRecording, stopRecording, mediaBlobUrl, status, clearBlobUrl, pauseRecording, resumeRecording, previewStream } = useReactMediaRecorder({
    video: true,
  });

  const handleUpload = () => {
    props.uploadVideo(mediaBlobUrl)
  }

  return (
    <div className='video'>
      <div className='video buttons'>
        {
          status === "idle" ? <button onClick={startRecording}>Start Recording</button> : <button onClick={stopRecording} >Stop Recording</button>
        }
        {
          status === "paused" ? <button onClick={resumeRecording} >resume Recording </button> : <button onClick={pauseRecording} disabled={status !== "recording"}>Pause Recording</button>
        }

        <button onClick={clearBlobUrl} disabled={status !== "stopped"}>Delete Recording</button>
        <button onClick={handleUpload} disabled={status !== "stopped"}>Upload</button>

      </div>


      {status === "recording" || status === "paused" ?
        <VideoPreview stream={previewStream} /> :
        <video src={mediaBlobUrl} width={900} height={700} controls autoPlay loop />}
    </div>
  );

}


export default VideoStreamer;