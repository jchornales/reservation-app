type NavMenuItem = {
  label: string;
  url: string;
};

export type NavMenuLists = {
  menuList: NavMenuItem[];
  delay?: number;
  stagger: number;
  duration?: number;
};
