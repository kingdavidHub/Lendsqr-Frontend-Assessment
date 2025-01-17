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
  id: string;
  username: string;
  email: string;
  organization: "lendsqr" | "irorun" | "lendstar";
  phone_number: string;
  date_joined: string;
  status: "active" | "inactive" | "blacklisted" | "pending";
  first_name: string;
  last_name: string;
  level_education: string;
  guarantor: string;
  guarantor_number: string;
  guarantor_relationship: string;
  guarantor_email: string;
  children: number;
  gender: "male" | "female";
  marital_status: string
};

export interface PaginationProps {
  setCurrentRange: React.Dispatch<React.SetStateAction<UserRecord[] | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  ranges: UserRecord[][];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  isFilterActive: boolean
}

export interface FindSomethingProps {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string | "active" | "inactive" | "blacklisted" | "pending";

}