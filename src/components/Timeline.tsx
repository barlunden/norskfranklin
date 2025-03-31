import { Timeline } from "rsuite";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { timelineData } from "../assets/TimelineData";

export default function FrankliTimeline() {
  return (
    <div className="w-1/2 mx-auto">
      <Timeline align="alternate">
        {timelineData.map(({ year, information }) => {
          return (
            <Timeline.Item>
              <p className="font-bold">{year}</p>
              <p>{information}</p>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
}
