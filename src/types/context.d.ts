type DataContextType = {
  isLoading;
  setIsLoading;
  defaultDatabase;
  setDefaultDatabase;
  searchInput;
  setSearchInput;
  showModal;
  setShowModal;
  newStudentData;
  setNewStudentData;
  modalTitle;
  setModalTitle;
  dateRegEx;
  transformData;
  showToast;
  setShowToast;
  isApiAlive;
  setIsApiAlive;
  addNewStudent;
  apiRequest;
  updateStudent;
  currentSelectedUser;
  setCurrentSelectedUser;
  invalidInputData;
  setInvalidInputData;
  modalDescription;
  setModalDescription;
  resetDatabase;
  setResetDatabase;
  apiUrl;
};

type StudentDataType = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  school: string;
  phoneNumber: string;
};

type CurrentSelectedUserType = StudentDataType | null;

type ApiErrorType = boolean;
