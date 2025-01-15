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
  userId: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "active" | "inactive" | "blacklisted" | "pending";
};

export interface PaginationProps {
  setCurrentRange: React.Dispatch<React.SetStateAction<UserRecord[] | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  ranges: UserRecord[][];
  currentPage: number;
  totalPages: number;
}
