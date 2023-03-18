export type InputTypes = {
  title: string;
  date: string;
  detail: string;
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
  onLike: (index: number) => void;
}

export interface ModifyModalTypes {
  title: string;
  detail: string;
  date: string;
  setIsModify: (isModify: boolean) => void;
  setPlace: () => void;
  onChangeInput: () => void;
}
