export interface RootFolderType {
    name: string;
    type: string;
    children?: ChildrenFolderType[];
}

interface ChildrenFolderType {
    name: string;
    type: string;
}