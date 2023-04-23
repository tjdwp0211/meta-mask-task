import React, { Dispatch } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PopupProps {
  view: boolean;
  setPipeLineWithPopup: Dispatch<
    React.SetStateAction<{
      view: boolean;
      account: null | string;
      balance: null | string;
    }>
  >;
}

export interface PosterProps {
  data: { title?: string; src: string }[];
}

export interface TextProps {
  family?: string;
  size?: number;
  children: React.ReactNode;
  className?: string;
}

export interface ImgProps {
  src: string;
  size: { w: number; h: number };
  alt: string;
  className?: string;
}
