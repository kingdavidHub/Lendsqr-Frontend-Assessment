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

export type TableHeaderProps = {
  title: string;
  options?: string[];
};

export type UserRecord = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};
