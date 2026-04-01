import React, { forwardRef } from "react";
import type { CardData } from "../../types";

export const Card = forwardRef<HTMLDivElement, { cardData: CardData }>(
  ({ cardData }, ref) => {
    return <div></div>;
  },
);
