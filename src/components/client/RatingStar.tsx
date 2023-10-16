"use client";

import { Rating } from "react-simple-star-rating";
import { fillColorArray, tooltipArray } from "@/constants/rating";

type Props = { value: number; size: number; showTooltip: boolean };

function RatingStar(props: Props) {
  return (
    <Rating
      size={props.size}
      allowFraction
      showTooltip={props.showTooltip}
      tooltipArray={tooltipArray}
      fillColorArray={fillColorArray}
      initialValue={props.value}
      readonly={true}
      SVGstyle={{ display: "inline-block" }}
      tooltipClassName={"text-xs"}
      tooltipStyle={{ marginLeft: 5 }}
    />
  );
}

export default RatingStar;
