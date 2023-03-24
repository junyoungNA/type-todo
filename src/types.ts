export type InputTypes = {
  title: string;
  date: string;
  detail: string;
};

export type Shoes = {
  id: number;
  title: string;
  content: string;
  price: number;
};

export interface ListTypes {
  index: number;
  title: string;
  date: string;
  like: number;
  setIsModal: (modalNum: number) => void;
  modalNum: number;
  onLike: (index: number) => void;
}

export interface ModalTypes {
  title: string;
  detail: string;
  index: number;
  date: string;
  like: number;
  setIsModify: (isModify: boolean) => void;
  setIsAdd: (isAdd: boolean) => void;
  onLike: (index: number) => void;
  onDelete: (index: number) => void;
}

export interface ModifyModalTypes {
  title: string;
  detail: string;
  date: string;
  place: any;
  like: number;
  modalNum: number;
  setIsModify: (isModify: boolean) => void;
  setPlace: (state: any) => void;
  onChangeInput: () => void;
}

export interface ShoesTypes {
  shoes: Shoes;
}
