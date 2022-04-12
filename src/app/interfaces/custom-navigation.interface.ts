export interface CustomNavigationInterface {
    title: string;
    icon: string;
    collapsable?: boolean;
    link?: string;
    children?: CustomNavigationInterface[]
}

export interface TableInterface {
        Name: string,
        Email: string,
        Phone: string,
        Address: string,
        ViewInfo: string
}