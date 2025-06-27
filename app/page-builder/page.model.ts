export type PageType =
  | "Info"
  | "Details"
  | "Other"
  | "Ending"
  | "newPageType"
  | string;

export type Page = {
  id: string;
  title: string;
  type: PageType;
  iconName?: string;
};
