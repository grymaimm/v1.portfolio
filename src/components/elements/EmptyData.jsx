import { PiSmileySadThin } from "react-icons/pi";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

export default function EmptyData({ title, description }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <PiSmileySadThin size={52} />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
    </Empty>
  );
}
