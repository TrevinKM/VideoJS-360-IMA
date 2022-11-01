import react from "react";
import CourtVector from "./CourtVector";
import CameraVector from "./CameraVector";
import ChangeButton from "./ChangeButton";
export const CameraPicker = ({ cameras, setCamera, currentCamera }) => {
  const viewBoxWidth = 750;
  const viewBoxHeight = 750;
  return (
    <>
      <svg width="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <g>
          <CourtVector
            viewBoxHeight={viewBoxHeight}
            viewBoxWidth={viewBoxWidth}
          />
          {cameras.map((camera) => (
            <CameraVector
              x={camera.x}
              y={camera.y}
              setCamera={() => setCamera(camera.id - 1)}
              selected={currentCamera.id == camera.id}
            />
          ))}
        </g>
      </svg>
    </>
  );
};

export default CameraPicker;
