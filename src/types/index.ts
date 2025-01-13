export interface ToggleContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export type HeadingListProps = {
  headingIcon: string;
  headingTitle: string;
};

export type SidebarProps = Array<{
  heading: string;
  headingList: HeadingListProps[];
}>;
